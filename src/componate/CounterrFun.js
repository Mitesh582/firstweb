import React, { useEffect,useState } from "react";

function CounterrFun(){

    const [count, setCount] = useState(0);

    useEffect (() => {

        document.title = ` Click ${count}`;
    })

    return(
        <>
            <h1>
                Hello {count}
            </h1>
            
            <button onClick={() => setCount(count+1)}>Click {count}</button>
        </>
    )
}

export default CounterrFun;