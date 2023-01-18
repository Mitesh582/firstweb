import React, {useState} from "react";

function FormHandle(){

    const [name, setName] = useState('')
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mobile, setMobile] = useState('')
    
    const changeName = (e) => {


        // console.log(e.target.value);
        setName(e.target.value);
        setFullname(e.target.value);
    }

    const changeEmail = (e) => {


        // console.log(e.target.value);
        setEmail(e.target.value);
    }

    const changePassword = (e) => {


        // console.log(e.target.value);
        setPassword(e.target.value);
    }

    const changeMobile = (e) => {


        // console.log(e.target.value);
        setMobile(e.target.value);
    }

    const submitData = (e) => {
        e.preventDefault();
        // console.log(fullname);

        // alert(`Hello ${fullname}`);
        document.getElementById("name").innerHTML = `Name : ${name}`
        
        document.getElementById("email").innerHTML = `Email : ${email}`

        document.getElementById("password").innerHTML = `Password : ${password}`

        document.getElementById("mobile_no").innerHTML = `Mobile Number : ${mobile}`

    }

    return(
        <>
            <form onSubmit={(e) => {submitData(e)}}>
                <h1>
                    Form
                </h1>
                <label >
                    Name :
                </label>
                <input type="text" name="name" onChange={(e) => {changeName(e)}}/>
                <p id="name"></p>

                <label >
                    Email :
                </label>
                <input type="email" name="email" onChange={(e) => {changeEmail(e)}}/>
                <p id="email"></p>

                <label >
                    Password :
                </label>
                <input type="password" name="password" onChange={(e) => {changePassword(e)}}/>
                <p id="password"></p>

                <label >
                    Mobile Number :
                </label>
                <input type="tel" name="mobile" onChange={(e) => {changeMobile(e)}}/>
                <p id="mobile_no"></p>

                <br />
                <br />
                <input type="submit" />
            </form>
        </>
    )
}

export default FormHandle;