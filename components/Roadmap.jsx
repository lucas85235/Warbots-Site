import styles from '../styles/Roadmap.module.css'
import Image from 'next/image'

const milestones = [
    {
        label: "Q2 2022",
        tasks: [
            { label: "GAME MECHANICS", complete: true },
            { label: "GAME ART", complete: true },
            { label: "GAME PROTOTYPE", complete: true },
        ]
    },
    {
        label: "Q3 2022",
        tasks: [
            { label: "WEBSITE", complete: true },
            { label: "SOCIAL MEDIA", complete: true },
            { label: "WHITERPAPER", complete: true },
        ]
    },
    {
        label: "Q4 2022",
        tasks: [
            { label: "START NFT SALES", complete: false },
            { label: "TOKEN LAUNCH ", complete: false },
            { label: "PANCAKESWAP LISTING ", complete: false },
            { label: "AVENTURE MODE", complete: false },
            { label: "MULTIPLAYER QUICK MATCH", complete: false },
            { label: "PLAY-TO-EARN MISSIONS", complete: false },
            { label: "REWARDS WITHDRAWAL", complete: false },
        ]
    },
    {
        label: "Q1 2023",
        tasks: [
            { label: "NEW WARBOTS", complete: false },
            { label: "WARBOTS UPGRADE SYSTEM", complete: false },
            { label: "BUY TOOLS / MARKETPLACE", complete: false },
            { label: "NEW EXCHANGE LISTING", complete: false },
            { label: "MULTIPLAYER RANKED BATTLES", complete: false },
        ]
    }
]
function CreateMilestones(index) {
    return (
        <div className={styles.milestones}>
            <div className={styles.textBox}>
                <h2 className={styles.text}>{milestones[index].label}</h2>
            </div>
            <div>
                {milestones[index].tasks.map((task) => (
                    <div className={styles.milestoneText} style={{ color: task.complete ? "#33cc00" : "#444" }} key={"q1-" + task.label}>
                        {task.complete ? <div className={styles.check}><Image src="/check.png" width={18} height={18} alt="" /></div> : ""}
                        {task.label}
                    </div>
                ))}
            </div>

        </div>
    )
}

function Roadmap() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Roadmap</h1>
            <div className={styles.content}>
                {CreateMilestones(0)}
                {CreateMilestones(1)}
                {CreateMilestones(2)}
                {CreateMilestones(3)}
            </div>
        </div>
    )
}

export default Roadmap;