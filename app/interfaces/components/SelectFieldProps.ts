import React from "react";

export interface SelectFieldProps {
  label: string;
  name: string;
  id: string;
  defaultValue?:
    | { label: string; value: string }
    | Array<{ label: string; value: string }>;
  className?: string;
  options: Array<{ label: string; value: string }>;
  onChange?: (selectedOption: unknown, actionMeta: unknown) => void;
  placeholder?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  value?:
    | { label: string; value: string }
    | Array<{ label: string; value: string }>;
  errors?: string | string[];
  isMulti?: boolean;
  isClearable?: boolean;
}
