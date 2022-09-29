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
            <div style={{ marginTop: "2rem", marginBottom: "3rem" }}>
                <h1 style={{ textAlign: "center" }}>Gameplay</h1>
                <p style={textStyle}>
                    Cada robô é composto de 5 partes: A cabeça, o corpo, o braço direito, o braço esquerdo, e as pernas. São essas partes que irão definir as estatísticas e os ataques do seu Warbot. Essas peças são NFTs, que podem ser adquiridos, trocados e vendidos pela comunidade de jogadores.
                </p>
                <p style={textStyle}>
                    Warbots adota um modelo de jogo chamado “play-to-earn”, ou seja, jogue para ganhar. O jogador poderá enfrentar tanto o modo PvE quanto o modo PvP para ser recompensado com Tokens dentro do jogo! Esses Tokens podem ser utilizado tanto dentro do jogo, para aquisição de novas peças e upgrades, como ser sacado pelo usuário.
                </p>
            </div>
        </div>
    )
}

export default Gameplay;