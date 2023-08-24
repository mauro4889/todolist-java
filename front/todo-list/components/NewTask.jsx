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
        <form onSubmit={handleSubmit(onSubmit)} className="container list-group list-group-horizontal-md mt-5 row-sm column-gap-1 row-gap-1 justify-content-md-center">
            <input type="text" {...register("name", { required: true, maxLength: 20 })
            } />
            <input type="text" {...register("description", { required: true, maxLength: 100 })
            } />
            <div className="btn-group btn-group-sm grid column-gap-1">
                <button type="submit" className="btn btn-outline-success">Aceptar</button>
                <button className="btn btn-outline-danger" onClick={() => reset()}>Cancelar</button>
            </div>
        </form>
    )
}
