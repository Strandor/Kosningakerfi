import { IProps } from "./interface";

export const CheckboxInput = ({ isChecked, disabled, onChange }: IProps) => {
	return (
		<input
			type="checkbox"
			checked={isChecked}
			disabled={disabled}
			onChange={onChange ? () => onChange(isChecked) : undefined}
		/>
	);
};
