import { TitleHeader } from "../../atom";
import { IProps } from "./interface";

export const InputFile = ({ text, id, onChange }: IProps) => {
  return (
    <>
      <TitleHeader>{text}</TitleHeader>
      <input type="file" id={id} accept="image/*" onChange={onChange} />
    </>
  );
};
