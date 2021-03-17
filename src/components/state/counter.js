import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0)


    function sum(){
        setCount(count+1)
    }

    function subtract(){
        setCount(count-1)
    }
    
    return (
        <div>
            <h1>Counter</h1>
            { count }


        <button onClick={ sum }>Add</button>
        <button onClick={ subtract }>Subtract</button>
        </div>
    )
}


export default Counter;