import { Card } from "../../components/Card";
import { NewTask } from "../../components/NewTask";
import { getActiveTasks } from "../../utils/allTask";
import 'bootstrap-icons/font/bootstrap-icons.css'



export default async function Home() {
  const tasks = await getActiveTasks()

  return (
    <div className="container">
      <h1 className="text-center mt-4">To do List</h1>
      <NewTask />
      <div className="container">
        <h2 className="mb-4 text-center mt-5">Tareas pendientes</h2>
        <div className="row gap-2 justify-content-center">
          {tasks.map((task) => <Card task={task} key={task.id} className='col-md-4'/>)}
        </div>
      </div>
    </div>
  );
}

