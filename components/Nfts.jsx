import Image from 'next/image'
import styles from '../styles/Nfts.module.css'

function Nfts() {

    const textStyle = {
        display: "flex",
        textAlign: "center",
        color: "#444",
        fontSize: "1.1rem",
        fontWeight: "500",
        paddingLeft: "50px",
        paddingRight: "50px",

        // minHeight: '500px',
        maxWidth: '600px',
        mixWidth: '500px',


        // maxWidth: "60rem",
        marginTop: "3rem",
        // marginBottom: "2rem",
        // border: '1px solid red'
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Nfts</h1>
            <div className={styles.items}>
                <div className={styles.image}>
                    <Image src="/custom_warbot.png" width={540} height={696}></Image>
                </div>
                <div>
                    <p style={textStyle}> A Warbot is a set of 5 parts (Head, Body, Right Arm, Left Arm and Legs) joined in a single robot. These 5 parts are NFTs, and can be freely exchanged by the player, allowing customization of your Warbot. A Warbot is required to get rewards in Adventure (PvE) and Competitive (PvP) modes.</p>
                    <p style={textStyle}> You can acquire a complete Warbot when purchasing a Gold Box, or a random part when purchasing a Silver Box. Every 2 months, new Warbots will be released, shaking the metagame and making the game more dynamic. Warbots parts are minted to a limited extent.</p>
                    <p style={textStyle}> After the initial sale, they will not be reissued, but can be found on the Marketplace if any player decides to sell the parts they own.</p>
                </div>
            </div>
        </div>
    )
}

export default Nfts;