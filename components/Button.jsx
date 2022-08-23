import styles from '../styles/Button.module.css'

const Button = ({ href, target, primary, modifier, children, ...rest }) => {
    const buttonStyle = primary
        ? styles.primary
        : styles.secondary;

    return (
        <a href={href} target={target}>
            <button type="button" className={`${styles.base} ${buttonStyle} ${modifier}`} {...rest}>
                {children}
            </button>
        </a>
    );
};

export default Button;
