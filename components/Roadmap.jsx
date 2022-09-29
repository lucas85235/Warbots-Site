import styles from '../styles/Roadmap.module.css'
import Image from 'next/image'

const milestones = [
    {
        label: "Q2 2022",
        tasks: [
            { label: "Entrega 1", complete: true },
            { label: "Entrega 2", complete: true },
            { label: "Entrega 3", complete: true },
            { label: "Entrega 4", complete: true }
        ]
    },
    {
        label: "Q3 2022",
        tasks: [
            { label: "Entrega 1", complete: true },
            { label: "Entrega 2", complete: true },
            { label: "Entrega 3", complete: false },
            { label: "Entrega 4", complete: false }
        ]
    },
    {
        label: "Q4 2022",
        tasks: [
            { label: "Entrega 1", complete: false },
            { label: "Entrega 2", complete: false },
            { label: "Entrega 3", complete: false },
            { label: "Entrega 4", complete: false }
        ]
    },
    {
        label: "Q1 2023",
        tasks: [
            { label: "Entrega 1", complete: false },
            { label: "Entrega 2", complete: false },
            { label: "Entrega 3", complete: false },
            { label: "Entrega 4", complete: false }
        ]
    }
]
function CreateMilestones(index) {
    return (
        <div className={styles.milestonesDiv}>
            <div className={styles.qContent}>
                <h2 className={styles.qText}>{milestones[index].label}</h2>
            </div>
            {milestones[index].tasks.map((task) => (
                <div className={styles.text} style={{ color: task.complete ? "#33cc00" : "#444"}} key={"q1-" + task.label}>
                    {task.complete ? <Image src="/check.png" width={18} height={18} alt="" style={{ marginRight: "0.5rem" }}/> : ""}
                    {task.label}
                </div>
            ))}
        </div>
    )
}

function Roadmap() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.align}>Roadmap</h1>
                <div className={styles.milestones}>
                    {CreateMilestones(0)}
                    {CreateMilestones(1)}
                    {CreateMilestones(2)}
                    {CreateMilestones(3)}                    
                </div>
            </div>
        </div>
    )
}

export default Roadmap;