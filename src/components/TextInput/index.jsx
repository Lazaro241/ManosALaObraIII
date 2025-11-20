const TextInput = ({value, style, placeholder, onChange}) => {
    const inputStyle = {
        primary: "barraAddTarea"
    }

    return (
        <input
            type="text"
            className={inputStyle[style]}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    );
}

export default TextInput;
