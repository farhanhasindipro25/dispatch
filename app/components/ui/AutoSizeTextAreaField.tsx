"use client";
import cn from "@/app/common/helpers/UtilsKit";
import { AutoSizeTextAreaFieldProps } from "@/app/interfaces/components/AutoSizeTextAreaFieldProps";
import ReactTextareaAutosize from "react-textarea-autosize";

const TEXTAREA_LABEL_STYLES = "block text-sm font-medium text-neutral-300";
const TEXTAREA_BOX_STYLES =
  "resize-none pl-3 pr-8 py-2 block w-full appearance-none rounded-md border border-neutral-300 placeholder-neutral-500 shadow-sm text-sm font-normal focus:border-primary-500 focus:outline-none focus:ring-primary-500";

export default function AutoSizeTextAreaField(
  props: AutoSizeTextAreaFieldProps
) {
  const {
    name,
    id,
    type = "text",
    value,
    label,
    placeholder,
    defaultValue,
    className,
    minRows = 1,
    maxRows = 5,
    onChange,
    onInput,
    onBlur,
    ...otherProps
  } = props;

  const TEXTAREA_FIELD_STYLES = cn(TEXTAREA_BOX_STYLES, className);
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className={TEXTAREA_LABEL_STYLES}>
        {label}
      </label>
      <ReactTextareaAutosize
        placeholder={placeholder}
        minRows={minRows}
        maxRows={maxRows}
        name={name}
        id={id}
        value={value}
        className={TEXTAREA_FIELD_STYLES}
        defaultValue={defaultValue}
        onChange={onChange}
        onInput={onInput}
        onBlur={onBlur}
        {...otherProps}
      />
    </div>
  );
}
