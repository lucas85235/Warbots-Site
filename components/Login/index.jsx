import styles from "../../styles/Login.module.css"
import { useBlockchain } from '../../blockchain'
import PartListView from "../PartListView";
import Button from "../Button"
import Mint from "./Mint"

function Login() {

    const { isLoged, myTokens, doLogin } = useBlockchain()

    const handleLogin = async () => {
        await doLogin()
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
                    <h1 >Wallet is connected</h1>
                </div>
                <div className={styles.windowContainer}>
                    <div style={{ margin: '2rem' }}>
                        <PartListView tokens={myTokens} />
                    </div>
                    <Mint />
                </div>
            </div>

        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.window}>{!isLoged ? notLogedPanel() : isLogedPanel()}</div>
        </div>
    )
}

export default Login;
