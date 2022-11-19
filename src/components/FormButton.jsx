function FormButton(props) {
    return (
        <button type={props.type} disabled={props.isDisabled} className={`btn`}>
            {props.children}
        </button>
    )
}

export default FormButton
