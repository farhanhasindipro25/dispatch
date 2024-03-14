import cn from "@/app/common/helpers/UtilsKit";
import { TextInputFieldProps } from "@/app/interfaces/components/TextInputFieldProps";
import React from "react";

const INPUT_LABEL_STYLES =
  "appearance-none block text-sm font-semibold text-neutral-300";
const INPUT_BOX_STYLES =
  "appearance-none block w-full text-sm rounded-md text-gray-700 border border-gray-300 p-3 placeholder-neutral-500 shadow-sm focus:border-2 focus:border-violet-500 focus:outline-none focus:ring-violet-500 active:border-violet-500 cursor-text";

export default function TextInputField(props: TextInputFieldProps) {
  const {
    type = "text",
    name,
    id,
    label,
    placeholder,
    className,
    value,
    onChange,
    defaultValue,
    ...otherProps
  } = props;

  const INPUT_FIELD_STYLES = cn(INPUT_BOX_STYLES, className ?? "");
  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={id} className={INPUT_LABEL_STYLES}>
        {label}
      </label>
      <input
        type={type}
        defaultValue={defaultValue}
        id={id}
        name={name}
        placeholder={placeholder}
        className={INPUT_FIELD_STYLES}
        value={value}
        onChange={onChange}
        {...otherProps}
      />
    </div>
  );
}
