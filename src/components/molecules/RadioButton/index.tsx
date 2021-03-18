import { useState } from "react";
import { CheckboxInput } from "../../atom";
import styles from "./RadioButton.module.css";
import { IProps } from "./interface";

export const RadioButton = ({ text }: IProps) => {
    const [isActive, setActive] = useState(false);

    const _handleClick = () => {
        setActive(!isActive);
    };

    return (
        <div className={styles.outer} onClick={_handleClick}>
            <CheckboxInput isChecked={isActive} />
            <p>{text}</p>
        </div>
    );
};
