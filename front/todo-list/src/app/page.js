import { NewTask } from "../../components/NewTask";
import { Task } from "../../components/Task";

async function getData() {
  const res = await fetch("http://localhost:8080/api/tasks");
  const data = await res.json()
  return data
}
export default async function Home() {
  const tasks = await getData();
  return (
    <div>
      <h1>To do List</h1>
      <NewTask/>
      <div>
        {tasks.map((task)=><Task task={task}/>)}
      </div>
    </div>
  );
}
