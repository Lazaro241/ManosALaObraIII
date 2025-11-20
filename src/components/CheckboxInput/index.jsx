const CheckboxInput = ({marca, tarea}) => {
    return (
        <input 
            type="checkbox"
            checked={tarea.completada}
            onChange={() => marca(tarea.id)}
        />
    );
}

export default CheckboxInput;