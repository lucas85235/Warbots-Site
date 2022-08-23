import styles from '../styles/NavBar.module.css'
import Button from './Button';

// CONTENT
// Download do Jogo (Download Game)
// Endereço do Contrato (Contract Address)
// Marketplace (Marketplace)
// Whitepaper (Whitepaper)

const links = [
    {
        label: "Home",
        href: "/",
        target: "_self",
    },
];

const secondaryLinks = [
    {
        label: "Play Demo",
        href: "https://darksardinha.itch.io/warbots",
        target: "_blanck",
    },
    {
        label: "Whitepaper",
        href: "https://lucas85235.gitbook.io/warbots-whitepaper/",
        target: "_blanck",
    },
    {
        label: "Whitelist",
        href: "https://forms.gle/XHGCCr3h6BvmfnHb6",
        target: "_blanck",
        primary: true
    },
];

function CreateButtons(listLinks) {
    return (
        <div>
            {listLinks.map(data =>
                <Button href={data.href} primary={data.primary} target={data.target}>
                    {data.label}
                </Button>
            )}
        </div>
    )
}

export default function RenderMenu() {
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.items}>

                    <div className={styles.divLeft}>
                        <div className={styles.divLeftLogo}>
                            <img src="/warbots-logo.png" alt="" width="97px" height="53px"/>
                        </div>
                        <div className={styles.divButtons}>
                            <div className={styles.buttonsList}>
                                {CreateButtons(links)}
                            </div>
                        </div>
                    </div>

                    <div className={styles.divButtons}>
                        <div className={styles.buttonsList}>
                            {CreateButtons(secondaryLinks)}
                        </div>
                    </div>

                </div>
            </div>            
        </nav>

    )
}
