import { CounterMemo } from "../Components/CounterMemo";
import { useState, useCallback } from "react";
import CounterButton from "../Components/CounterButton";


export const CounterApp = () => {
    const [counter, setCounter] = useState(0);
    const increaseHandler = useCallback(() => {
        setCounter((currValue) => {
            return currValue + 1;
        });
    }, [])
    const decreaseHandler = useCallback(() => {
        setCounter((currValue) => {
            return currValue - 1;
        })
    }, [])
    return (
        <div>
            <CounterMemo />
                <h1 className="posthd">The value of counter is {counter}</h1>
            <CounterButton clickHandler={increaseHandler} />
            <CounterButton clickHandler={decreaseHandler}/>
        </div>
    )
}