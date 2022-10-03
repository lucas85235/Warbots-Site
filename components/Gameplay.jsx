import Image from 'next/image'

function Gameplay() {

    const textStyle = {
        display: "flex",
        textAlign: "center",
        color: "#444",
        fontSize: "1.1rem",
        fontWeight: "500",
        paddingLeft: "25px",
        paddingRight: "25px",
        maxWidth: "60rem",
        marginTop: "2rem",
        marginBottom: "2rem"
    }

    function ImageDiv() {
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
                marginTop: '2em',
            }}>
                <Image src="/screenshots/game.png" width={480} height={270} alt="" style={{ borderRadius: '1rem' }} />
            </div>
        )
    }

    return (
        <div style={{
            minHeight: "40vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
        }}>
            <div style={{ marginTop: "3rem", marginBottom: "3.5rem" }}>
                <h1 style={{ textAlign: "center" }}>Gameplay</h1>
                <p style={textStyle}>
                    Each robot is made up of 5 parts: the head, the body, the right arm, the left arm, and the legs. These are the parts that will define your Warbot's stats and attacks. These parts are NFTs, which can be purchased, traded and sold by the player community.
                </p>
                <p style={textStyle}>
                    Warbots adopts a game model called “play-to-earn”, that is, play to win. The player will be able to face both PvE and PvP modes to be rewarded with In-game Tokens! These Tokens can be used both within the game, for the acquisition of new parts and upgrades, as well as being withdrawn by the user.
                </p>
            </div>
        </div>
    )
}

export default Gameplay;