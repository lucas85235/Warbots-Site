import styles from '../styles/Tokenomics.module.css'

const tokenAllocation = [
    {
        label: "IDO",
        porcent: "2%",
        color: "#0d6efd"
    },
    {
        label: "Private Sale",
        porcent: "2%",
        color: "#0dcaf0"
    },
    {
        label: "Liquidity",
        porcent: "5%",
        color: "#dc3545"
    },
    {
        label: "Play to Earn",
        porcent: "40%",
        color: "#6f42c1"
    },
    {
        label: "Staking",
        porcent: "23%",
        color: "#d63384"
    },
    {
        label: "Devs",
        porcent: "10%",
        color: "#fd7e14"
    },
    {
        label: "Marketing",
        porcent: "9%",
        color: "#dc3545"
    },
    {
        label: "Reserves",
        porcent: "6%",
        color: "#ffc107"
    },
    {
        label: "Advisor",
        porcent: "2%",
        color: "#198754"
    }
]

function TokensList() {
    return (
        <div className={styles.listContainer}>
            {tokenAllocation.map(data =>
                <div className={styles.item}>
                    <div className={styles.box} style={{backgroundColor: data.color}}></div>
                    <div className={styles.content}>
                        <span className={styles.text} style={{color: data.color}}>{data.label}</span>
                        <span className={styles.text}>{data.porcent}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default function Tokenomics() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Tokenomics</h1>
            {TokensList()}
        </div>
    )
}