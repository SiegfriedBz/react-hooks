import { useAsync } from './hooks/useAsync'

export function AsyncComponent() {

    const { value, loading, error } = useAsync(() => {
        return new Promise((resolve, reject) => {
            const success = true
            setTimeout(() => {
                if (success) {
                    resolve("Hello World")
                } else {
                    reject("Oh no")
                }
            }, 1000)
        })
    })

    return (
        <div>
            {loading ? 
            <h1>Loading...</h1>
            : <h1>{value}</h1>
            }
            <h1>{error}</h1>
        </div>
    )
}