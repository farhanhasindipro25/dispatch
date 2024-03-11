import React from "react";

export interface TextInputFieldProps {
  type?: string;
  name: string;
  id: string;
  label: string;
  placeholder: string;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
}
