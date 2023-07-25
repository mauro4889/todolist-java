

export const Task = ({task}) => {
    return (
        <div>
            <h3> {task.name} </h3>
            <h5> {task.description} </h5>
            <p> {task.dateCreated} </p>
        </div>
    )
}
