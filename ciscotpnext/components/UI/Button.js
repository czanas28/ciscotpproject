export default function Button(props) {
  return (
    <button
      className={props.style}
      id={props.name}
      name={props.name}
      onClick={props.onClick}
      value={props.value}
      
    >
      {props.label}
    </button>
  );
}
