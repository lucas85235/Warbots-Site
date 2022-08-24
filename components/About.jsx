function About() {
    const textStyle = {
        display: "flex",
        textAlign: "center",
        color: "#444",
        fontSize: "1.1rem",
        fontWeight: "500",
        paddingLeft: "25px",
        paddingRight: "25px",
        maxWidth: "60rem",
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
                <h1 style={{ textAlign: "center" }}>O que é Warbots?</h1>
                <p style={textStyle}>
                    O Warbots é um jogo em blockchain, que utiliza mecânicas de jogos de RPG e de cartas, para garantir que o jogador com a melhor estratégia vença! Junte-se a esses poderosos robôs em batalhas rápidas e emocionantes!
                </p>
            </div>
        </div>
    )
}

export default About;