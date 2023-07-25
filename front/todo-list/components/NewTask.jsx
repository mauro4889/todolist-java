"use client"
import { useForm } from "react-hook-form"
import { newTask } from "../utils/newTask"

export const NewTask = () => {
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async data => {
        const { name, description } = data
        console.log(data)
        await newTask(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("name", { required: true, maxLength: 20 })
            } />
            <input type="text" {...register("description", { required: true, maxLength: 20 })
            } />
            <button type="submit">Aceptar</button>
            <button onClick={()=> reset()}>Cancelar</button>
        </form>
    )
}
