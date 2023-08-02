import { NewTask } from "../../components/NewTask";
import { Task } from "../../components/Task";
import { getData } from "../../utils/allTask";



export default async function Home() {  
  const tasks = await getData()
  
  return (
    <div>
      <h1>To do List</h1>
      <NewTask/>
      <div>
        {tasks.map((task)=><Task task={task} key={task.id}/>)}
      </div>
    </div>
  );
}

