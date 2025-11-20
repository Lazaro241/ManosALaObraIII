import './App.css'
import AddTareaInput from './components/AddTareaInput'
import MainLayout from './components/MainLayout'
import TablaTareas from './components/TablaTareas'
import {useState} from 'react'

function App() {
  const [tareas, setTareas] = useState([])

  const agregarTarea = (textoTarea) => {
    if(textoTarea.trim() !== "") {
      const nuevaTarea = { id: Date.now(), texto: textoTarea, completada: false }
      setTareas([...tareas, nuevaTarea])
    }
  }

  const eliminarTarea = (idTarea) => {
    setTareas(tareas.filter(tarea => tarea.id !== idTarea))
  }

  const marcarCompleto = (idTarea) => {
    setTareas(tareas.map(tarea => 
      tarea.id === idTarea 
        ? { ...tarea, completada: !tarea.completada }
        : tarea
    ))
  }

  return (
    <div>
      <MainLayout titulo="Lista de tareas de Lázaro" >
        <AddTareaInput onAgregar = {agregarTarea} />
        <TablaTareas tareas = {tareas} onEliminar = {eliminarTarea} onCompletar = {marcarCompleto}/>
      </MainLayout>
    </div>
  )
}

export default App