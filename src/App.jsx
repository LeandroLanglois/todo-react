import { useEffect, useState } from "react"
import AddTask from "./components/AddText"
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [] )
 
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
  }, [tasks]);

  function onTaskClick(taskid) {
    const newTasks = tasks.map(task => {
      if (task.id === taskid) {
        return { ...task, isCompleted: !task.isCompleted }
      }

      return task
    })
    setTasks(newTasks)
  }

  function onDeleteTaskClick(taskid) {
    const newTasks = tasks.filter(task => task.id !== taskid)
    setTasks(newTasks)
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false
    }
    setTasks([...tasks, newTask])
  }


  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text text-center mt-15">Gerenciador de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  )
}

export default App
