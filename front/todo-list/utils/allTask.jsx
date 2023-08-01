'use client'
export async function getData() {
    const res = await fetch("http://localhost:8080/api/tasks");
    const data = await res.json()
    return data
}