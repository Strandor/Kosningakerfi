import { TitleHeader } from "../../";
import { IProps } from "./interface";
import styles from "./InputText.module.css";

export const InputText = ({ id, text, onChange }: IProps) => {
	return (
		<>
			<TitleHeader>{text}</TitleHeader>
			<input
				id={id}
				type={"text"}
				className={styles.input}
				placeholder={text}
				onChange={onChange}
			/>
		</>
	);
};
