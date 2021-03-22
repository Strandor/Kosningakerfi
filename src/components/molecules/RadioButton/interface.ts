import { ChangeEvent } from "react";

export interface IProps {
	text: string;
	disabled?: boolean;
	onChange?: (value: boolean) => any;
}
