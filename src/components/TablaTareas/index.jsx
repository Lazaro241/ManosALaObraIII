import ItemTarea from "../ItemTarea"

const TablaTareas = ({tareas, onEliminar, onCompletar}) => {
    return (
        <table className="tabla">
        <thead>
          <tr>
            <th>Completado</th>
            <th>Tarea</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody className="checkboxTarea">
          {tareas.length === 0 ? (
            <tr>
                <td colSpan="3" style={{ textAlign: 'center', padding: '1rem' }}>
                  No hay tareas pendientes
                </td>
              </tr>
          ) : (
            tareas.map((tarea) => (
              <ItemTarea tarea={tarea} onEliminar={onEliminar} onCompletar={onCompletar} />
            ))
          )}
            
        </tbody>
      </table>
    )
}

export default TablaTareas