import { memo } from "react";


export const CounterMemo = memo(() => { 
    console.log('Counter Heading rendering')
    return (
        <div>
                    <h1 className="posthd" style={{color:'darkblue'}}>A Basic Counter App</h1>
                    <p style={{margin: "0 auto", color:"brown", textAlign:"justify", width:"400px", height:"auto"}}>This is a simple basic counter app. By this app, you can increase the value  of the counter, or you can decrease the value of counter by clicking the button. Every time you click, the counter will re-render and the value will change.</p>
        </div>
    )
})