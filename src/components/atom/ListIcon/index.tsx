import { useState } from "react";
import { IProps } from "./interface";
import styles from "./ListIcon.module.css";

export const ListIcon = ({ title, icon, children, onIconPress }: IProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={styles.outer}>
                {children && (
                    <div
                        className={`${styles.arrow_container} ${
                            isOpen && styles.arrow_container_open
                        }`}
                    >
                        <img
                            src="/images/arrow-right.svg"
                            onClick={() => setIsOpen(!isOpen)}
                        />
                    </div>
                )}
                <p className={styles.title}>{title}</p>
                {icon && (
                    <img
                        className={styles.icon}
                        src={icon}
                        onClick={onIconPress}
                    />
                )}
            </div>
            {isOpen && children && (
                <div className={styles.dropdown}>{children}</div>
            )}
        </>
    );
};
