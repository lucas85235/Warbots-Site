import styles from '../styles/Gameplay.module.css'
import { useEffect, useState } from 'react'
import Image from 'next/image'

function Gameplay() {

    const [selected, setSelected] = useState(0)

    const imageList = [
        "/screenshots/menu.png",
        "/screenshots/game.png",
        "/screenshots/office.png",
    ]

    const Buttons = () => {
        return (
            <div>
                {imageList.map((value, key) =>
                    <button
                        key={key}
                        className={`${styles.indicatorsItem} ${key == selected ? styles.active : ""}`}
                        onClick={() => setSelected(key)}>
                    </button>
                )}
            </div>
        )
    }

    const Next = () => {
        var i = (selected - 1) < 0 ? imageList.length - 1 : selected - 1;
        setSelected(i)
    }

    const Prev = () => {
        var i = (selected + 1) >= imageList.length ? 0 : selected + 1;
        setSelected(i)
    }

    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }

    return (
        <div className={styles.container}>
            
            <div className={styles.div}>
                <h1 className={styles.h1}>Gameplay</h1>
                <p className={styles.textStyle}>
                    Each robot is made up of 5 parts: the head, the body, the right arm, the left arm, and the legs. These are the parts that will define your Warbot&apos;s stats and attacks. These parts are NFTs, which can be purchased, traded and sold by the player community.
                </p>
                <p className={styles.textStyle}>
                    Warbots adopts a game model called “play-to-earn”, that is, play to win. The player will be able to face both PvE and PvP modes to be rewarded with In-game Tokens! These Tokens can be used both within the game, for the acquisition of new parts and upgrades, as well as being withdrawn by the user.
                </p>
            </div>

            <div className={styles.carousel}>
                <div className={styles.carouselinner}>
                    <Image className={styles.carouselItem} src={imageList[selected]} layout="fill" objectFit='contain' alt={"Screenshots"} loader={myLoader}/>
                </div>

                <button className={styles.controlNext} onClick={Next}>
                    <span className={styles.nextIcon}></span>
                </button>
                <button className={styles.controlPrev} onClick={Prev}>
                    <span className={styles.prevIcon}></span>
                </button>

                <div className={styles.carouselIndicators}>
                    {Buttons()}
                </div>
            </div>

        </div>
    )
}

export default Gameplay;