import { useBlockchain } from '../../blockchain'

const Mint = () => {

    const { isLoged, doMint } = useBlockchain()

    const eventsHandle = {
        onRegistered: (hash) => { handleRegistered(hash) },
        onReceipt: (receipt) => { handleReceipt(receipt) },
        onConfirmation: (confirmationNumber, receipt) => { },
        onError: (err) => { handleError(err) },
    }

    const handleRegistered = async (hash) => {
        alert("Transaction Submitted! \nHash: " + hash)
    }
    const handleReceipt = async (receipt) => {
        alert("Your nft is minted with success!")
    }
    const handleError = async (err) => {
        alert(err.message)
    }

    const handleMint = async () => {
        if (isLoged) {
            await doMint("1", eventsHandle)
        }
        else {
            console.log("Metamask is not connected!")
        }
    }

    return (
        <div>
            <button onClick={handleMint}>Mint Nft</button>
        </div>
    )
}

export default Mint;
