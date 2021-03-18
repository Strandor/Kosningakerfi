import { IProps } from "./interface";

export const CheckboxInput = ({ isChecked }: IProps) => {
    return <input type="checkbox" checked={isChecked} />;
};
