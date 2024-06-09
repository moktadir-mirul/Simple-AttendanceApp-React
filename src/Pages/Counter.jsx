import { useCounter } from "../CustomHook/useCounter"


export const CounterApp = () => {
    const{counter, increaseHandler, decreaseHandler} = useCounter();
    return (
        <div>
                <h1 className="posthd">The value of counter is {counter}</h1>
                <button className="btn-white"
                onClick={() => increaseHandler(1)}>Increase By 1</button>
                <button className="btn-white"
                onClick={() => increaseHandler(5)}>Increase By 5</button>
                <button className="btn-white"
                onClick={() => increaseHandler(10)}>Increase By 10</button>
                <button className="btn-white"
                onClick={() => decreaseHandler(1)}>Decrease By 1</button>
                <button className="btn-white"
                onClick={() => decreaseHandler(5)}>Decrease By 5</button>
                <button className="btn-white"
                onClick={() => decreaseHandler(10)}>Decrease By 10</button>
        </div>
    )
}