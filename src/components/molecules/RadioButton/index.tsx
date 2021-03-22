import { useState } from "react";
import { CheckboxInput } from "../../atom";
import styles from "./RadioButton.module.css";
import { IProps } from "./interface";

export const RadioButton = ({ text, disabled, onChange }: IProps) => {
	const [isActive, setActive] = useState(false);

	const _handleClick = () => {
		if (!disabled) {
			if (onChange) onChange(!isActive);
			setActive(!isActive);
		}
	};

	return (
		<div className={styles.outer} onClick={_handleClick}>
			<CheckboxInput isChecked={isActive} disabled={disabled} />
			<p>{text}</p>
		</div>
	);
};
