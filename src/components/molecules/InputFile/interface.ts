export interface IProps {
  id: string;
  text: string;
  onChange: (event: React.ChangeEvent) => void;
  setFieldValue: (field: string, value: any) => void;
}
