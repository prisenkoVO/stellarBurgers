import styles from './loader.module.scss'

export const Loader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.loader}>
                <div className={styles.loader__bar}></div>
                <div className={styles.loader__bar}></div>
                <div className={styles.loader__bar}></div>
                <div className={styles.loader__bar}></div>
                <div className={styles.loader__bar}></div>
                <div className={styles.loader__ball}></div>
            </div>
        </div>
    );
}