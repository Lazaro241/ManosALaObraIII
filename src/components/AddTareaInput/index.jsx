import TextInput from '../TextInput'
import Button from '../Button'
import {useState} from 'react'

const AddTareaInput = ({onAgregar}) => {
    const [texto, setTexto] = useState('')

    const handleSubmit = () => {
        onAgregar(texto);
        setTexto('');
    }

    return (
        <div className="grupo-entrada">
            <TextInput 
                style = "primary"
                placeholder = "Agregar nueva tarea"
                value = {texto}
                onChange = {(e) => {setTexto(e.target.value)}}    
            />
            <Button 
                variant = "primary"
                onClick = {handleSubmit}
            >Agregar</Button>
        </div>
    )
}

export default AddTareaInput;