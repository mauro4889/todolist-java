import Link from "next/link"

export const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid" >
                <ul className="navbar-nav me-auto">
                    <li className="nav-item ms-2" ><Link href='/'>Tareas</Link></li>
                    <li className="nav-item ms-4" ><Link href='/taskfinished'>Tareas finalizadas</Link></li>
                </ul>
            </div>
        </nav>
    )
}
