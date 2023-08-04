import { NewTask } from "../../components/NewTask";
import { Task } from "../../components/Task";
import { getActiveTasks } from "../../utils/allTask";



export default async function Home() {  
  const tasks = await getActiveTasks()
  
  return (
    <div>
      <h1 className="text-center mt-4">To do List</h1>
      <NewTask/>
      <div>
        <h2 className="mb-4 text-center mt-5">Tareas pendientes</h2>
        {tasks.map((task)=><Task task={task} key={task.id}/>)}
      </div>
    </div>
  );
}

