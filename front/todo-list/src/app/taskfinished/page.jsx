import { getCompletedTasks } from '../../../utils/allTask'
import { CardFinished } from '../../../components/CardFinished'

export default async function Page() {
    const tasks = await getCompletedTasks()

    return (
    <div>
        <h2 className='my-5 text-center'>Tareas finalizadas</h2>
        <div className="row gap-2 justify-content-center">
        {tasks.map((task)=><CardFinished task={task} key={task.id}/>)}
      </div>
    </div>)
}