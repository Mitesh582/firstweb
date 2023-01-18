import React, { useEffect, useState } from "react";

function Tab() {

    const [type, setType] = useState("Users");
    const [items, setItems] = useState([]);

    let changeTab = (t) => {

        setType(t);
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setItems(json))
    },[type])

    return (
        <>
            <div>
                <button onClick={() => changeTab("Users")}>Users</button>
                <button onClick={() => changeTab("Posts")}>Posts</button>
                <button onClick={() => changeTab("Comments")}>Comments</button>
                <button onClick={() => changeTab("Albums")}>Albums</button>
            </div>

            <h1> {type} </h1>

            {items.map((item) =>{
                return(
                    <p>
                        {JSON.stringify(item)}
                    </p>
                )
            })

            }
        </>
    )
}

export default Tab;