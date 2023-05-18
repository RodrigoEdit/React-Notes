import { TareaContext } from "../context/TareaContext";
import { useContext } from "react";

function taskCard({ tarea }) {
  const { deleteTarea } = useContext(TareaContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{tarea.title}</h1>
      <p className="text-gray-500 text-sm">{tarea.descripcion}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTarea(tarea.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default taskCard;

//ejemplo con padre y hijo
{
  /* <TareaContext>
      <div>
        <h1>{tarea.title}</h1>
        <p>{tarea.descripcion}</p>
        <button onClick={() => deleteTarea(tarea.id)}>Eliminar Tarea</button>
      </div>
    </TareaContext> */
}
