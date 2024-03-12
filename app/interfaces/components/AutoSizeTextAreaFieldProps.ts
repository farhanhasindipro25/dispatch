export interface AutoSizeTextAreaFieldProps {
  name: string;
  id: string;
  type?: string | undefined;
  value?: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  minRows?: number;
  maxRows?: number;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
