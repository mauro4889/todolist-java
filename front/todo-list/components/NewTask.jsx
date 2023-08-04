"use client"
import { useForm } from "react-hook-form"
import { newTask } from "../utils/newTask"

export const NewTask = () => {
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async data => {
        const { name, description } = data
        await newTask(data)
        window.location.reload();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="container-sm list-group list-group-horizontal grid column-gap-3 mt-5">
            <input type="text" {...register("name", { required: true, maxLength: 20 })
            } />
            <input type="text" {...register("description", { required: true, maxLength: 20 })
            } />
            <button type="submit" className="btn btn-outline-success">Aceptar</button>
            <button className="btn btn-outline-danger" onClick={()=> reset()}>Cancelar</button>
        </form>
    )
}
