export async function deleteTask(){
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