import React from 'react'
import { getCompletedTasks } from '../../../utils/allTask'
import { Task } from '../../../components/Task'

export default async function Page() {
    const tasks = await getCompletedTasks()

    return (
    <div>
        <h2>Tareas finalizadas</h2>
        <div>
        {tasks.map((task)=><Task task={task} key={task.id}/>)}
      </div>
    </div>)
}