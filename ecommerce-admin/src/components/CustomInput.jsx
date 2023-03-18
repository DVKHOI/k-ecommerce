import React from "react";

const CustomInput = (props) => {
  const { type, label, i_id, i_class, name, val, onCh, onBlr } = props;
  return (
    <div className="form-floating mt-3 w-100">
      <input
        type={type}
        name={name}
        value={val}
        onChange={onCh}
        onBlur={onBlr}
        className={`form-control  ${i_class}`}
        id={i_id}
        placeholder={label}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default CustomInput;
