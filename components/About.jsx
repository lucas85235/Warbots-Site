function About() {
    return (
        <div style={{
            minHeight: "40vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
        }}>
            <h1>O que é Warbots?</h1>
            <h3 style={{
                display: "flex",
                textAlign: "center",
                color: "#444",
                fontWeight: "500",
                paddingLeft: "25px",
                paddingRight: "25px",
                maxWidth: "60rem",
            }}>
                O Warbots utiliza mecânicas de jogos de RPG e de cartas, para garantir que o jogador com a melhor estratégia vença!
                Junte-se a esses poderosos robôs em batalhas rápidas e emocionantes!
            </h3>
        </div>
    )
}

export default About;