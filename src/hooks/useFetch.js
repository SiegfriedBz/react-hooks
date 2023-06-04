import { useAsync } from "./useAsync"

const fetchOptions = {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
}

export function useFetch(url, options={}, dependencies=[]) {
    return useAsync(() => {
        return fetch(url, { ...fetchOptions, ...options })
        .then(res => {
            if(res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        })}, dependencies)
}
