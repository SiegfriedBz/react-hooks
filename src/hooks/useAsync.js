
import { useState, useCallback, useEffect } from 'react'

export function useAsync(callback, dependencies = []) {
    const [value, setValue] = useState(undefined)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(undefined)

    const memoizedCallback = useCallback(() => {
        setLoading(true)
        setError(undefined)
        setValue(undefined)
        callback()
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false))
    }, dependencies)

    useEffect(() => {
        memoizedCallback()
    }, [memoizedCallback])

    return { value, loading, error }
}
