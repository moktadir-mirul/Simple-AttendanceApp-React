import { memo } from "react";


function CounterButton({ clickHandler }) {
   
    console.log('Btn Rendering');
    return(
        <div className="btnArea">
                <button className="btn-white"
                onClick={clickHandler}>Increase By 1</button>
        </div>
    )
}

export default memo(CounterButton);