export default function Input(props) {
  return (
    <>
      <label
        htmlFor={props.name}
        className={props.stylelabel}
        hidden={props.hidden}
      >
        {props.label}
      </label>
      <input
        id={props.name}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        className={props.styleinput}
        onChange={props.onChange}
        hidden={props.hidden}
        {...props}
      />
    </>
  );
}
