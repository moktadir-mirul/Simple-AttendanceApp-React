import { CounterMemo } from "../Components/CounterMemo";
import { useSelector, useDispatch } from "react-redux";


export const CounterApp = () => {
    const counter = useSelector((storeState) => storeState.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <CounterMemo />
                <h1 className="posthd">The value of counter is {counter}</h1>
                <button className="btn-white"
                onClick={() => dispatch({type: "Increse", payload: 1 })}>Increase By 1</button>
                <button className="btn-white"
                onClick={() => dispatch({type: "Increse", payload: 5})}>Increase By 5</button>
                <button className="btn-white"
                onClick={() => dispatch({type: "Increse", payload: 10})}>Increase By 10</button>
                <button className="btn-white"
                onClick={() => dispatch({type: "Decrese", payload: 1})}>Decrease By 1</button>
                <button className="btn-white"
                onClick={() => dispatch({type: "Decrese", payload: 5})}>Decrease By 5</button>
                <button className="btn-white"
                onClick={() => dispatch({type: "Decrese", payload: 10})}>Decrease By 10</button>
        </div>
    )
}