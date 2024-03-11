"use client";
import Select from "react-select";
import React from "react";
import { SelectFieldProps } from "@/app/interfaces/components/SelectFieldProps";

const SELECT_LABEL_STYLES =
  "appearance-none block text-sm font-medium text-gray-700";

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    borderColor: state.isFocused ? "rgb(124, 58, 237)" : provided.borderColor,
    boxShadow: state.isFocused
      ? "0 0 0 2px rgb(124, 58, 237)"
      : provided.boxShadow,
    border: state.isFocused ? "none" : provided.border,
    paddingTop: "3px",
    paddingBottom: "5px",
  }),

  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor:
      (state.isFocused || state.isSelected) && !state.isMulti
        ? "rgb(124, 58, 237)"
        : provided.backgroundColor,
    color:
      (state.isFocused || state.isSelected) && !state.isMulti
        ? "white"
        : "rgb(139, 92, 246)",
    "&:hover": {
      backgroundColor: "rgb(139, 92, 246)",
      color: "white",
      cursor: "pointer",
    },
    overflow: "hidden",
    fontSize: "14px",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "rgb(124, 58, 237)",
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: "white",
  }),
  input: (provided: any) => ({
    ...provided,
    "input:focus": {
      boxShadow: "none",
    },
  }),
};

export default function SelectField(props: SelectFieldProps) {
  const {
    label,
    name,
    id,
    defaultValue,
    options,
    onChange,
    placeholder,
    value,
    isMulti = false,
    isClearable = false,
    ...otherProps
  } = props;

  return (
    <div
      className="flex w-full flex-col gap-1"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <label htmlFor={id} className={SELECT_LABEL_STYLES}>
        {label}
      </label>

      <Select
        name={name}
        id={id}
        value={value}
        styles={customStyles}
        classNamePrefix="select2-selection"
        placeholder={placeholder}
        options={options}
        noOptionsMessage={() => "No options"}
        isMulti={isMulti}
        onChange={onChange}
        isClearable={isClearable}
        defaultValue={defaultValue}
        {...otherProps}
      />
    </div>
  );
}
