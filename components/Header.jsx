import styles from '../styles/Header.module.css'
import Button from './Button';

const links = [
    {
        label: `Whitelist`,
        href: `https://forms.gle/XHGCCr3h6BvmfnHb6`,
        target: `_blanck`
    },
];

const Header = () => (
    <header className={styles.image}>

        <div className={styles.div}>

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

            <div className={styles.button}>
                <a href={links[0].href} target={links[0].target}>
                    <Button primary>{links[0].label}</Button>
                </a>
            </div>

        </div>

    </header>
);

export default Header;
