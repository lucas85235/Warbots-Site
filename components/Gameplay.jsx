function Gameplay() {
    return (
        <div style={{
            minHeight: "40vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
        }}>
            <h1>Gameplay</h1>
            <h3 style={{
                display: "flex",
                textAlign: "center",
                color: "#444",
                fontWeight: "500",
                paddingLeft: "25px",
                paddingRight: "25px",
                maxWidth: "60rem",
            }}>
                Cada  War Robot um possui seu baralho próprio de cartas, que representam suas habilidades de combate. Administre a energia de cada um para utilizar golpes poderosos, levantar suas defesas, ou até mesmo atrapalhar o adversário!
            </h3>
        </div>
    )
}

export default Gameplay;