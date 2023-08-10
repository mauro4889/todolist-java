
export async function deleteTask({ id }) {
    try {
      const response = await fetch(`http://localhost:8080/api/tasks/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        console.log('Tarea eliminada');
      } else {
        console.log('Error al eliminar la tarea');
      }
    } catch (error) {
      console.log(error);
    }
}
