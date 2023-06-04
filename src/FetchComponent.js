import React, { useState } from 'react'
import { useFetch } from './hooks/useFetch'

export const FetchComponent = () => {
    const [id, setId] = useState(1)

    const { value, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {}, [id])

    return (
        <div>
            <button
                onClick={() => setId(currentId => currentId + 1)}
            >Update id
            </button>
            {loading && <h1>Loading...</h1>}
            {!loading && value?.title && <h1>{value.title}</h1>}
            {error?.message && <h1>{error.message}</h1>}
        </div>
    )
}
