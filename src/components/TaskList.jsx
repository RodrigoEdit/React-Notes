import TaskCard from "./taskCard";
import {useContext} from 'react';
import {TareaContext} from '../context/TareaContext';


function TaskList() {
  const {tareas} = useContext(TareaContext)

  if (tareas.length === 0) {
    return <h1 className="text-white text-4xl text-bold text-center">No hay tareas aun</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tareas.map((tarea) => (
        <TaskCard key={tarea.id} tarea={tarea} />
      ))}
    </div>
  );
}

export default TaskList;
