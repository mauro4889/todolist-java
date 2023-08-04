import { cache } from 'react'

export const newTask = cache(async (data) => {
    try {
        const response = await fetch('http://localhost:8080/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Asegúrate de establecer el tipo de contenido correcto según tu API
            },
            body: JSON.stringify(data), // Aquí puedes enviar los datos en el cuerpo de la solicitud
        });
    } catch (error) {
        return error
    }
    return console.log("Tarea creada")
})