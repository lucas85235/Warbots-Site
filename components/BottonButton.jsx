import styles from '../styles/BottonButton.module.css'
import Image from 'next/image'

export default function BottonButton(props) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button className={styles.button}>
                <Image src={props.image} alt="" width="75px" height="75px" />
            </button>
        </a>
    )
}