import styles from "../styles/PreSale.module.css"
import { BlockchainProvider } from "../blockchain"
import Login from "../components/Login"

function PreSale() {
    return (

        <div className={styles.container}>
            <BlockchainProvider>
                <Login></Login>
            </BlockchainProvider>
        </div>
    )
}

export default PreSale