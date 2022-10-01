import styles from '../styles/Header.module.css'
import Button from './Button';

const links = [
    {
        label: `Whitelist`,
        href: `https://forms.gle/XHGCCr3h6BvmfnHb6`,
        target: `_blanck`
    },
];

function CreateButtons(listLinks) {
    return (
        <div className={styles.buttonPos}>
            {listLinks.map(data =>
                <Button href={data.href} target={data.target} key={data.label} primary modifier={styles.customButton}>
                    {data.label}
                </Button>
            )}
        </div>
    )
}

const Header = () => (
    <header className={styles.image}>

        {/* <div className={styles.div}>

            <h1 className={styles.text}>
                <span className={styles.span}>Join us </span>
                    and play with your <br/> Warbots
                <span className={styles.span}> NFTs</span>
            </h1>

            <div className={styles.description}>
                <p className={styles.descriptionText}>
                    Warbots is a fast and fun pvp combat card game
                </p>
            </div>

        </div> */}

        <div className={styles.buttonContainer}>
            {CreateButtons(links)}
        </div>

    </header>
);

export default Header;
