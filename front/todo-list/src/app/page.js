'use client'
import { useEffect, useState } from "react";
import { NewTask } from "../../components/NewTask";
import { Task } from "../../components/Task";
import { getData } from "../../utils/allTask";


export default async function Home() {
  const [isTasks, setIsTasks] = useState();
  
  const tasks = await getData();

  useEffect(()=>{
    setIsTasks(tasks)
  },[])
  
  return (
    <div>
      <h1>To do List</h1>
      <NewTask/>
      <div>
        {isTasks.map((task)=><Task task={task}/>)}
      </div>
    </div>
  );
}
