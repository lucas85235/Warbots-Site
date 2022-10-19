import styles from "../../styles/Login.module.css"
import { useBlockchain } from '../../blockchain'
import Image from "next/image"
import PartListView from "../PartListView";
import Button from "../Button"
import Mint from "./Mint"

function Login() {

    const { isLoged, myTokens, doLogin, doMint } = useBlockchain()

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

    const handleLogin = async () => {
        await doLogin()
    }

    const handleMint = async () => {
        if (isLoged) {
            await doMint("1", eventsHandle)
        }
        else console.log("Metamask is not connected!")
    }

    const notLogedPanel = () => {
        return (
            <div className={styles.windowContainer}>
                <Button modifier={styles.button} onClick={handleLogin} primary>
                    Connect MetaMask
                    <div className={styles.metamaskIcon}></div>
                </Button>
            </div>
        )
    }

    const isLogedPanel = () => {
        return (
            <div className={styles.div}>
                <div className={styles.title}>
                    <h1>Pre Sale</h1>
                </div>
                <div className={styles.windowContainer}>
                    <div className={styles.boxes}>
                        <div className={styles.lootbox}>
                            <span className={styles.text}>Silver Box</span>
                            <Image src={"/icons/loot-silver.png"} width={180} height={180} alt="" />
                            <Button modifier={styles.buyButton} onClick={handleMint} primary>Buy</Button>
                        </div>
                        <div className={styles.lootbox}>
                            <span className={styles.text}>Gold Box</span>
                            <Image className={styles.boxImage} src={"/icons/loot-gold.png"} width={190} height={190} alt="" />
                            <Button modifier={styles.buyButton} onClick={handleMint} primary>Buy</Button>
                        </div>
                    </div>
                    <span className={styles.span}>A Warbot is a set of 5 parts (Head, Body, Right Arm, Left Arm and Legs) joined in a single robot. These 5 parts are NFTs, and can be freely exchanged by the player, allowing customization of your Warbot. You can acquire a complete Warbot when purchasing a Gold Box, or a random part when purchasing a Silver Box.</span>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.window}>
                {!isLoged ? notLogedPanel() : isLogedPanel()}
            </div>
            <div className={styles.window}>
                {!isLoged ?
                    <div className={styles.windowContainer}>
                        <span className={styles.text}>Login to access</span>
                    </div>
                    :
                    <div className={styles.div}>
                        <div className={styles.title}>
                            <h1>Nft's</h1>
                        </div>
                        <PartListView tokens={myTokens} />
                    </div>
                }
            </div>
        </div>
    )
}

export default Login;
