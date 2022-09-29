import styles from '../styles/Button.module.css'
import Link from 'next/link';

const Button = ({ href, target, primary, modifier, children, ...rest }) => {
    const buttonStyle = primary
        ? styles.primary
        : styles.secondary;

    return (
        <Link href={href ? href : "/"} passHref>
            <a target={target} rel="noopener noreferrer">
                <button type="button" className={`${styles.base} ${buttonStyle} ${modifier}`} {...rest}>
                    {children}
                </button>                
            </a>
        </Link>
    );
};

export default Button;
