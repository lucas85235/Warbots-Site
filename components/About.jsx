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
            minHeight: "35vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
        }}>
            <div style={{ marginTop: "2rem", marginBottom: "3.5rem" }}>
                <h1 style={{ textAlign: "center" }}>What is Warbots?</h1>
                <p style={textStyle}>
                Warbots is a blockchain game that uses RPG and card game mechanics to ensure that the player with the best strategy wins! Join these mighty robots in fast paced and exciting battles!
                </p>
            </div>
        </div>
    )
}

export default About;