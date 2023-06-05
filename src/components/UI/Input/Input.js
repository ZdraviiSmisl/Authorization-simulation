import styels from "./Input.module.css";

const Input = (props) => {
  return (
    <div
      className={`${styels.control} ${
        props.isValid === false ? styels.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
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
};

export default Input;
