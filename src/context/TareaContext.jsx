import { createContext, useState, useEffect } from "react";
import { tareas as data } from "../data/tasks";
export const TareaContext = createContext();

export function TareaContextProvider(props) {
  const [tareas, setTareas] = useState([]);
  //useState Arriba
  function createTarea(task) {
    setTareas([
      ...tareas,
      {
        title: task.title,
        id: tareas.length,
        descripcion: task.descripcion,
      },
    ]);
  }
  function deleteTarea(taskId) {
    setTareas(tareas.filter((tarea) => tarea.id !== taskId));
  }

  useEffect(() => {
    setTareas(data);
  }, []);
  return (
    <TareaContext.Provider
      value={{
        tareas,
        deleteTarea,
        createTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
}

{
  /* {props.children}  por si quieres tener un elemento padre*/
}
