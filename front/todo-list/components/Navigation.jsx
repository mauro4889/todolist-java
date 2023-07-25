import Link from "next/link"

export const Navigation = () => {
    return (
        <div>
            <ul>
                <li><Link href='/task'>Tareas</Link></li>
                <li><Link href='/taskfinished'>Tareas finalizadas</Link></li>
            </ul>
        </div>
    )
}
