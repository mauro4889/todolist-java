'use client'

export const CardFinished = ({ task }) => {
    const fechaFormateada = task.dateCreated.join('-');
    return (
        <div className="card text-white bg-primary mb-3">
            <div className="card-header"> {task.name} </div>
            <div className="card-body">
                <h4 className="card-title"> {task.description} </h4>
                <p className="card-text"> {fechaFormateada} </p>
            </div>
            <style jsx>{`
        .card {
            max-width: 20rem;}
      `}</style>

        </div>
    )
}