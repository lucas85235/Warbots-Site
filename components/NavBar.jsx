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

function CreateButtons() {
    return (
        <div>
            {secondaryLinks.map(data =>
                <Button href={data.href} primary={data.primary} target={data.target}>
                    {data.label}
                </Button>
            )}
        </div>
    )
}

export default function RenderMenu() {
    return (
        <div className={styles.image}>
            {CreateButtons()}
        </div>
    )
}
