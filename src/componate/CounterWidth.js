import React, { useEffect, useState } from "react";

function CounterWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    let pageResize = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', pageResize)
    })

    return (
        <>
            <h1> Page Width : {width} </h1>
        </>
    )

}
export default CounterWidth;