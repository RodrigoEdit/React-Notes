import { useState, useContext } from "react";
import { TareaContext } from "../context/TareaContext";
function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, seTdes] = useState("");
  const { createTarea } = useContext(TareaContext);

  const handle = (e) => {
    e.preventDefault();
    createTarea({
      title,
      descripcion,
    });
    setTitle("");
    seTdes("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handle} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => seTdes(e.target.value)}
          value={descripcion}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button
        className="bg-indigo-500 px-3 text-white py-1"
        >Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
