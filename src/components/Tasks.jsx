import { ChevronRightIcon, TrashIcon } from "lucide-react"

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
    // const tasks = props.tasks
    return <ul className="space-y-4 p-6 t bg-slate-200 rounded-md shadow mt-5">{tasks.map((task) => (
        <li key={task.id} className="flex">
        <button 
        onClick={() => onTaskClick(task.id)} 
        className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.isCompleted && 'line-through'}`}
        >
            {task.title}
            </button>   
        <button className="bg-slate-400 p-2 rounded-md ml-2 text-white">
            <ChevronRightIcon /> 
        </button>
        <button onClick={() => onDeleteTaskClick(task.id)}
        className="bg-slate-400 p-2 rounded-md ml-2 text-white">
            <TrashIcon />
        </button>
        </li>

    ))}
    </ul>
}

export default Tasks