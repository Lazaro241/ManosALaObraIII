import CheckboxInput from "../CheckboxInput"
import Button from "../Button"

const ItemTarea = ({tarea, onEliminar, onCompletar}) => {
    return (
        <tr style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
            <td><CheckboxInput marca = {onCompletar} tarea = {tarea}/></td>
            <td>{tarea.texto}</td>
            <td>
              <Button variant="danger" onClick={() => onEliminar(tarea.id)}>Eliminar</Button>
            </td>
          </tr>
    )
}

export default ItemTarea;