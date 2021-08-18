export default function Select(props) {
    return (
        <>
            <label htmlFor={props.name} className={props.stylelabel}>{props.label}</label>
            <select id={props.name} name={props.name} className={props.styleinput} {...props}>
                {props.options.map(option => {
                    return <option key={Math.random()}>{option}</option>
                })}
            </select>
        </>
    )
}