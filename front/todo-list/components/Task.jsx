'use client'

import { completeTask } from "../utils/allTask";

export const Task = ({ task }) => {
    const { id } = task

    function handleClick() {
        deleteTask(id)
        window.location.reload();
    }

    const finishTask = async () => {
        console.log('tarea')
        completeTask(id)
    }

    async function deleteTask(id) {
        try {
            const response = await fetch(`http://localhost:8080/api/tasks/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                return console.log('Tarea eliminada');
            } else {
                console.log('Error al eliminar la tarea');
            }
        } catch (error) {
            console.log(error);
        }
    }


    const fechaFormateada = task.dateCreated.join('-');

    return (
        <div className="container-sm list-group list-group-horizontal d-flex justify-content-between">
            <h3> {task.name} </h3>
            <h5> {task.description} </h5>
            <p>  {fechaFormateada} </p>
            <div className="btn-group btn-group-sm grid column-gap-2 p-1">
                <button className="btn btn-success" onClick={finishTask}>O</button>
                <button className="btn btn-danger" onClick={handleClick}>X</button>
            </div>
        </div>
    )
}
