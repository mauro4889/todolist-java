'use client'

import { completeTask, deleteTask } from "../utils/allTask";


export const Card = ({ task }) => {
    const { id } = task
    const fechaFormateada = task.dateCreated.join('-');

    function handleClick() {
        deleteTask(id)
        window.location.reload();
    }

    const finishTask = async () => {
        completeTask(id)
        window.location.reload();
    }
    return (
        <div className="card text-white bg-primary mb-3">
            <div className="card-header"> <h4>{task.name}</h4> </div>
            <div className="card-body">
                <small className="card-title"> {task.description} </small>
                <p className="card-text"> {fechaFormateada} </p>
            </div>
            <div className="btn-group btn-group-sm grid column-gap-2 mx-5 mb-1">
                <button className="btn btn-outline-success border-0" onClick={finishTask}><i className="bi bi-check-circle fs-3"></i></button>
                <button className="btn btn-outline-danger border-0" onClick={handleClick}><i className="bi bi-x-circle fs-3"></i></button>
            </div>
            <style jsx>{`
        .card {
            max-width: 20rem;}
      `}</style>
        </div>
    )
}