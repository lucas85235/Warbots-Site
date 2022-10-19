import styles from "../../styles/PartListView.module.css"
import Image from "next/image"

const PartListView = (props) => {

    const { tokens } = props

    return (
        <div className={styles.div}>
            <div className={styles.title}>
                <h5 >You acquired <span id="result">&nbsp;{tokens.length}</span> NFT</h5>
            </div>

            <div className={styles.grid}>
                {tokens.map((tokenURI, key) => {
                    console.log(tokenURI);
                    return (
                        <div className={styles.part} key={key}><Image  src={"/robots/" + "Buildbot" + ".png"} width={100} height={100} alt="" /></div>

                    )
                })}
            </div>
        </div>
    )
}

export default PartListView
