import { useState, useEffect } from "react"


export const useFetch = (initValue, url) => {
    const [data, setData] = useState(initValue);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then((result) => {
            setData(result)
            setIsLoading(false)
            setErrorMessage('')
        })
        .catch((error) => {
            setErrorMessage(error.message)
            setIsLoading(false)
            setData(initValue)
        })
    }, [])

    return {
        data,
        isLoading,
        errorMessage
    }

}