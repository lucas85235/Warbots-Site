import { createContext, useContext, useEffect, useState } from 'react';
import Web3 from "web3";
import Mock from "./contracts/MemoryToken.json"

const BlockchainContext = createContext()

export function BlockchainProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [accountAddress, setAccountAddress] = useState()

    // NFT
    const [balance, setBalance] = useState(0)
    const [nftContract, setNftContract] = useState()
    const [myNfts, setMyNfts] = useState([])

    // Check Login On Start
    useEffect(() => {
        isUnlocked()
    });

    const isUnlocked = async () => {
        if (!isAuthenticated && window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
            const accounts = await window.web3.eth.getAccounts()

            if (accounts.length > 0) {
                await loadBlockchainData()
                setIsAuthenticated(true)
            }
        }
    }

    // Request Metamask Connect
    const loadWeb3 = async () => {
        try {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum)
                await window.ethereum.enable()
                return true
            }
            else if (window.web3) {
                window.web3 = new Web3(window.web3.currentProvider)
                return true
            }
            else {
                window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!")
                return false
            }
        } catch (error) {
            window.alert("Error on login into your wallet ", error)
            return false
        }
    }

    // Load All Blockchain Necessary Data
    const loadBlockchainData = async () => {
        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()

        setAccountAddress(accounts[0])

        const networkId = await web3.eth.net.getId()
        const networkData = Mock.networks[networkId]

        if (networkData) {
            const abi = Mock.abi
            const address = networkData.address

            const _balance = web3.utils.fromWei(await web3.eth.getBalance(address), 'ether')
            const _contract = new web3.eth.Contract(abi, address)

            setNftContract(_contract)
            setBalance(_balance)

            await getMyNftsFromBlockchain(_contract, accounts[0])
        }
        else {
            alert("Smart contract not deployed to detected network.")
        }
    }

    // Load All Nft Tokens URI
    const getMyNftsFromBlockchain = async (contract, account) => {
        let balanceOf = await contract.methods.balanceOf(account).call()
        const blockchainTokens = []

        for (let i = 0; i < balanceOf; i++) {
            const id = await contract.methods.tokenOfOwnerByIndex(account, i).call()
            const tokenURI = await contract.methods.tokenURI(id).call()
            blockchainTokens.push(tokenURI)
        }

        setMyNfts(blockchainTokens)
    }

    // Connect to Metamask and Load Account Data
    async function doLogin() {
        if (await loadWeb3()) {
            await loadBlockchainData()
            setIsAuthenticated(true)
        }
    }

    const doMint = async (nftURI, events) => {

        const { onRegistered, onReceipt, onConfirmation, onError } = events
        const web3 = window.web3

        nftContract.methods.mint(accountAddress, nftURI)
            .send({ from: accountAddress })
            .on('transactionHash', async (hash) => { 
                console.log("Transaction Submitted!")
                await onRegistered(hash)
            })
            .on('receipt', async (receipt) => {
                console.log("Your nft is minted with success!")
                await onReceipt(receipt)
                await getMyNftsFromBlockchain(nftContract, accountAddress)
            })
            .on('confirmation', async (confirmationNumber, receipt) => {
                console.log("Confirmation registered!")
                await onConfirmation(confirmationNumber, receipt)
                await getMyNftsFromBlockchain(nftContract, accountAddress)
            })
            .on('error', async (err) => {
                onError(err.message)
            })
    }

    return (
        <BlockchainContext.Provider value={{
            isLoged: isAuthenticated,
            account: accountAddress,
            balance,
            myTokens: myNfts,
            getMyNftsFromBlockchain,
            doLogin,
            doMint
        }}>
            {children}
        </BlockchainContext.Provider>
    );
}

export function useBlockchain() {
    return useContext(BlockchainContext);
}
