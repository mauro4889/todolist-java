
export async function getData() {
    try {
        const res = await fetch("http://localhost:8080/api/tasks", { cache: 'no-store' });
        const data = await res.json()
        return data
    } catch (error) {
        return error
    }
}
