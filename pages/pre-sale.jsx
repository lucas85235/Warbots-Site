import styles from "../styles/PreSale.module.css"
import Head from 'next/head'
import { BlockchainProvider } from "../blockchain"
import Login from "../components/Login"

function PreSale() {
    return (

        <div className={styles.container}>
            <Head>
                <title>Warbots Pre Sale</title>
                <meta name="description" content="Warbots nft pre sale" />
                <link rel="icon" href="/icons/logo.png" />
            </Head>

            <BlockchainProvider>
                <Login></Login>
            </BlockchainProvider>
        </div>
    )
}

export default PreSale