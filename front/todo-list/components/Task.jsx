import { deleteTask } from "../utils/allTask";


export const Task = ({ task }) => {
    
    const fechaFormateada = task.dateCreated.join('-');

    return (
        <div className="container-sm list-group list-group-horizontal d-flex justify-content-between">
            <h3> {task.name} </h3>
            <h5> {task.description} </h5>
            <p>  {fechaFormateada} </p>
            <div className="btn-group btn-group-sm grid column-gap-2 p-1">
                <button className="btn btn-success">O</button>
                <button className="btn btn-danger" onClick={deleteTask(task.id)}>X</button>
            </div>
        </div>
    )
}
