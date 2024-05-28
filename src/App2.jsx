import { useReducer } from "react";

const counterReducer = (stateValue, action) => {
    switch(action.type) {
        case "Add": {
            return stateValue + action.value;
        }
        case "Deduct": {
            return stateValue - action.value;
        }
    }
}

const themeConfig = (theme, action) => {
    switch(action.type) {
        case 'Change_bg': {
            return {
                ...theme,
                bgColor: action.payload
            }
        }
        case 'Change_text': {
            return {
                ...theme,
                textColor: action.payload
            }
        }
        default: {
            return theme;
        }
    }
}

const App2 = () => {
    const [counter, dispatchCounterAction] = useReducer(counterReducer, 1);
    const [theme, dispatchThemeAction] = useReducer (themeConfig, {bgColor: "Brown", textColor: "white"})

    return (
        <div style={{
                        backgroundColor: theme.bgColor,
                        color: theme.textColor,
                        height: '100vw',
                        paddingTop: '100px'
                    }}>
            <div  className="bg-Area">
                <div className="bg-Color">
                    <button className="btnAll" onClick={() => dispatchThemeAction({type: 'Change_bg', payload: 'Green'})}>BG Green</button>
                    <button className="btnAll" onClick={() => dispatchThemeAction({type: 'Change_bg', payload: 'Red'})}>BG Red</button>
                    <button className="btnAll" onClick={() => dispatchThemeAction({type: 'Change_bg', payload: 'Blue'})}>BG Blue</button>
                    <button className="btnAll" onClick={() => dispatchThemeAction({type: 'Change_bg', payload: 'Yellow'})}>BG Yellow</button>
                </div>
                <div className="text-Color">
                <button className="btnAll" onClick={() => dispatchThemeAction({type: 'Change_text', payload: 'Black'})}>BG Black</button>
                <button className="btnAll" onClick={() => dispatchThemeAction({type: 'Change_text', payload: 'Gray'})}>BG Gray</button>
                <button className="btnAll" onClick={() => dispatchThemeAction({type: 'Change_text', payload: 'White'})}>BG White</button>
                <button className="btnAll" onClick={() => dispatchThemeAction({type: 'Change_text', payload: 'Tomato'})}>BG Tomato</button>
                </div>
            </div>
            <div className="counter-part">
                <p style={{fontSize: "30px",}} className="para-1">The number of count is {counter}</p>
                <button className="btnAll" onClick={() => dispatchCounterAction({type: "Add", value: 1})}>Increase By 1</button>
                <button className="btnAll" onClick={() => dispatchCounterAction({type: "Add", value: 5})}>Increase By 5</button>
                <button className="btnAll" onClick={() => dispatchCounterAction({type: "Add", value: 10})}>Increase By 10</button>
                <button className="btnAll" onClick={() => dispatchCounterAction({type: "Deduct", value: 1})}>Decrease By 1</button>
                <button className="btnAll" onClick={() => dispatchCounterAction({type: "Deduct", value: 5})}>Decrease By 5</button>
                <button className="btnAll" onClick={() => dispatchCounterAction({type: "Deduct", value: 10})}>Decrease By 10</button>
            </div>
        </div>
    )
}

export default App2;