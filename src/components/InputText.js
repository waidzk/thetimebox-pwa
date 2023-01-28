import React from "react";

export default function InputText(props) {
  const { placeholder, ref, prefix, name, onChange, value } = props;

  return (
    <>
      <span className="mr-1">{prefix}</span>
      <input
        type="text"
        value={value}
        ref={ref}
        placeholder={placeholder}
        name={name}
        className="bg-transparent outline-none w-full"
        onChange={onChange}
      />
    </>
  );
}
