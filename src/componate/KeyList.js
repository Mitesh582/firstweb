import React, { useState } from "react";

function KeyList() {

    const [items, setItems] = useState([1, 2, 3])

    let addlist = () => {
        setItems([4, 6, 1, 2, 3])
    }

    return (
        <>
            <ul>
                {
                    items.map((item) => {
                        return (
                            <li key={item}>
                                {item}
                            </li>
                        )
                    })
                }
            </ul>

            <button onClick={() => { addlist() }}>
                Add List
            </button>
        </>

    )
}
export default KeyList;