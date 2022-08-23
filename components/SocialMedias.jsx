import styles from '../styles/SocialMedias.module.css'
import Image from 'next/image'

const buttons = [
    {
        link: "https://discord.gg/YPWcefA2GE",
        image: "/icons/Discord.png"        
    },
    {
        link: "https://t.me/+8Aj0UQLzqEM4NjRh",
        image: "/icons/Telegram.png"
    }
]

function Button(props) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button className={styles.button}>
                <Image src={props.image} alt="" width="75px" height="75px" />
            </button>
        </a>
    )
}

export default function SocialMedias(props) {
    return (
        <div className={styles.container}>
            {buttons.map(data => Button(data))}
        </div>
    )
}
