export interface InputProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}
