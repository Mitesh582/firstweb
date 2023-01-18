import React, {useState} from "react";

function HandleFrom(){

    const [data, setData] = useState({
        name :'',
        email :'',
        password :'',
        mobile_no :''
    })

    const [submitData, setSubmitData] = useState([])

    const handleInput = (e) => {
        // console.log(e.target.value);
        const formname = e.target.name
        const value = e.target.value
        // console.log(formname);
        setData({...data, [formname] : value})
        
    }
    
    const submitForm = (e) => {
        e.preventDefault();
        const newData = data;
        setSubmitData([...submitData, newData])

        setData({
            name :'',
            email :'',
            password :'',
            mobile_no :''
        })
    }

    // console.log(data);
    return(
        <>
        <h1>
            From
        </h1>
        <form onSubmit={submitForm}>
            <label>
                Name :
            </label>
            <input type="text" name="name" onChange={handleInput} value={data.name}/>
            <br />

            <label>
                Email :
            </label>
            <input type="email" name="email" onChange={handleInput} value={data.email}/>
            <br />

            <label>
                Password :
            </label>
            <input type="password" name="password" onChange={handleInput} value={data.password}/>
            <br />

            <label>
                Mobile No :
            </label>
            <input type="tel" pattern="[0-9]{10}" name="mobile_no" onChange={handleInput} value={data.mobile_no}/>

            <br />
            <br />
            <input type="submit"/>
        </form>

        {
            submitData.map((d, i) => {

                return(
                    <div key={i} id={i}>
                        <table width={500} cellPadding={5} cellSpacing={10}>
                            <tr>
                                <td>{i + 1}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.password}</td>
                                <td>{d.mobile_no}</td>
                            </tr>
                        </table>
                    </div>
                )
            })
        }
        </> 
    )
}

export default HandleFrom;