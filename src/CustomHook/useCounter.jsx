import { useState, useCallback } from "react";

export const useCounter = () => {
    const [ counter, setCounter] = useState(0);

    const increaseHandler = useCallback((value) => {
        setCounter((currValue) => {
            return currValue + value;
        });
    }, [])
    const decreaseHandler = useCallback((value) => {
        setCounter((currValue) => {
            return currValue - value;
        })
    }, [])

    return {
        counter,
        increaseHandler,
        decreaseHandler
    }
}