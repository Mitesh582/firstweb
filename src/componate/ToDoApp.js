import React, { useState } from 'react'
// import { useFormik } from 'formik'
import './ToDoApp.css'

function ToDoApp() {
    const [items, setItems] = useState("");
    const [addlist, setAddlist] = useState([]);
    
    const handleChange = (e) => {
        setItems(e.target.value);
    }

    const addtodo = () => {
        setAddlist((olditems) => {
            return [...olditems, items ]
        });
        setItems("");
    }

    const deletItems = (id) => {

        const newarr = addlist.filter((v,i) => {
                return i !== id;
            })
            setAddlist(newarr);
    }

    const ClearAll = (items) => {

        // console.log(">>>>>",items);
        setAddlist((olditems) => {
            return [...olditems && items ? ( !! items  )  : '' ]
        });
        // setItems("");

    }
    

    return (
        <div className="wrapper">
            <h1> ToDoApp </h1>
            <div className="task-input">
                <input type="text" placeholder="Add a New Task List" onChange={handleChange} value={items} />
                <button type='submit' onClick={ ( !! items  ) ? addtodo : ''}>Add</button>


                <ol>
                    {
                        addlist.map((v, i) => {
                            return (
                                <>
                                    <li key={i} id={i} onSelect={deletItems}>{v}
                                        <i className="bi bi-trash3" onClick={() => deletItems(i)}></i>
                                    </li>   
                                </>
                            )
                        })
                    }
                </ol>
            </div>
            <div className="controls">
                <button className="clear-btn" onClick={() => {ClearAll()}}>Clear All</button>
            </div>
        </div>

    )
}

export default ToDoApp;