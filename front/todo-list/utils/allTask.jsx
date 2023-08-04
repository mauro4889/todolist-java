
export async function getData() {
    try {
        const res = await fetch("http://localhost:8080/api/tasks", { cache: 'no-store' });
        const data = await res.json()
        return data
    } catch (error) {
        return error
    }
}

export const getActiveTasks = async () =>{
    try {
        const res = await fetch("http://localhost:8080/api/tasks/activetasks", { cache: 'no-store' });
        const data = await res.json()
        console.log(data)
        return data
    } catch (error) {
        return error
    }
}

export const getCompletedTasks = async () =>{
    try {
        const res = await fetch("http://localhost:8080/api/tasks/completedtasks", { cache: 'no-store' });
        const data = await res.json()
        return data
    } catch (error) {
        return error
    }
}

export async function deleteTask(id){
    console.log(id)
    try {
        const deleted = await fetch(`http://localhost:8080/api/tasks/${id}`, {
            method: 'DELETE'
        })
        if (deleted.ok){
            console.log('Tarea eliminada')
        } else{
            console.log('Error al eliminar la tarea')
        }
    } catch (error) {
        console.log(error)
    }
}