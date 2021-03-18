import styles from "./Announcements.module.css";

export const Announcements = () => {
    return (
        <div className={styles.outer}>
            <p>Kosningin lokar kl 12 á morgun</p>
            <img src={"/images/close.svg"} />
        </div>
    );
};
