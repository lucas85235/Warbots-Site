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

const RenderButtons = () => {
    return (
        <div >
            {buttons.map((data, key)=> {
                return (
                    <a key={key} href={data.link} target="_blank" rel="noopener noreferrer">
                        <button className={styles.button}>
                            <Image src={data.image} alt="" width="75px" height="75px" />
                        </button>
                    </a>                      
                )
            })}
        </div>
    )
}

export default function SocialMedias(props) {
    return (
        <div className={styles.container}>
            <RenderButtons/>
        </div>
    )
}
