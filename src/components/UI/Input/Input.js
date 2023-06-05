import React, { useRef, useImperativeHandle } from "react";
import styels from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const active = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: active,
    };
  });

  return (
    <div
      className={`${styels.control} ${
        props.isValid === false ? styels.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type || "number"}
        id={props.id || toString(Date.now()).slice(-10)}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        autoComplete={props.autoComplete || "something"}
        name={props.name || "i-n-p-u-t"}
      />
    </div>
  );
});

export default Input;
