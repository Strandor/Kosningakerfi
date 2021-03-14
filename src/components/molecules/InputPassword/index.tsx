import { TitleHeader } from "../..";
import { IProps } from "./interface";
import styles from "./InputText.module.css";

export const InputPassword = ({ id, text, onChange }: IProps) => {
  return (
    <>
      <TitleHeader>{text}</TitleHeader>
      <input
        id={id}
        type={"password"}
        className={styles.input}
        placeholder={text}
        onChange={onChange}
      />
    </>
  );
};
