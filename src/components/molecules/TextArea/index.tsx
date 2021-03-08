import { TitleHeader } from "../../";
import { IProps } from "./interface";
import styles from "./InputText.module.css";

export const TextArea = ({ text, id, onChange }: IProps) => {
  return (
    <>
      <TitleHeader>{text}</TitleHeader>
      <textarea
        id={id}
        className={styles.input}
        rows={10}
        onChange={onChange}
      />
    </>
  );
};
