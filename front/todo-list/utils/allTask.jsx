
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

export const completeTask = async (id) => {
    try {
        const response = await fetch(`http://localhost:8080/api/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ completed: true })
        });

        if (response.ok) {
            console.log('Tarea finalizada');
        } else {
            console.log('Error al finalizar la tarea');
        }
    } catch (error) {
        console.log(error);
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

export const deleteTask = async (id) => {
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