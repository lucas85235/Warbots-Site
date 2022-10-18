import Image from 'next/image'
import styles from '../styles/Partners.module.css'

function Partners() {

    const images = [
        "/partners/unity.png",
        "/partners/metamask.png",
        "/partners/pancake.png",
        "/partners/bsc.png",
    ]

    return (
        <div className={styles.container}>

            <div className={styles.div}>
                <h1 className={styles.h1}>Tools</h1>
                <div className={styles.images}>
                    {images.map((value, key) => <div key={key} className={styles.image}><Image src={value} height={160} width={180} alt={value}/></div>)}
                </div>
            </div>

        </div>
    )
}

export default Partners;