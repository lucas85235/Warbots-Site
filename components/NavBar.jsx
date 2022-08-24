import { useState } from 'react';
import Image from 'next/image'
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
        target: "_blank",
    },
    {
        label: "Whitepaper",
        href: "https://lucas85235.gitbook.io/warbots-whitepaper/",
        target: "_blank",
    },
    {
        label: "Whitelist",
        href: "https://forms.gle/XHGCCr3h6BvmfnHb6",
        target: "_blank",
        primary: true
    },
];

function CreateButtons(listLinks) {
    return (
        <div>
            {listLinks.map(data =>
                <Button href={data.href} primary={data.primary} target={data.target} key={data.label}>
                    {data.label}
                </Button>
            )}
        </div>
    )
}

function MenuButton({ toggleMenu, showMenu }) {
    return (
        <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={showMenu}
            onClick={toggleMenu}
            className={styles.mobileButton}
        >
            <span className={styles.srOnly}>Open menu</span>
            {showMenu ? (
                <svg
                    className={styles.svgLength}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    width={24}
                    height={24}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                <svg
                    className={styles.svgLength}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    width={24}
                    height={24}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            )}

        </button>
    )
}

function MobileMenu() {
    return (
        <div className={styles.mobile}>
            <div className={styles.mobileList1}>
                {links.map((link) => (
                    <a href={link.href} target={link.target} className={styles.mobileButton} key={link.label}>
                        {link.label}
                    </a>
                ))}
            </div>

            <div className={styles.mobileList2}>
                <div className={styles.mobileList2Div}>
                    {secondaryLinks.map((link) => (
                        <a
                            key={`mobile-${link.label}`}
                            href={link.href}
                            target={link.target}
                            className={styles.mobileButton}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function RenderMenu() {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);

    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.items}>

                    <div className={styles.divLeft}>
                        <div className={styles.divLeftLogo}>
                            <Image src="/warbots-logo.png" alt="" width="97px" height="53px" />
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

                    <div className={styles.divToggle}>
                        <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
                    </div>

                </div>
            </div>
            {showMenu ? <MobileMenu /> : null}
        </nav>

    )
}
