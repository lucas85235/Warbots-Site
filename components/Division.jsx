import styles from '../styles/Division.module.css'

function Division() {
    return (
        <div className={styles.division}>
            <div className={styles.line}></div>
            <div className={styles.box}></div>
            <div className={styles.line}></div>
        </div>
    )
}

export default Division;