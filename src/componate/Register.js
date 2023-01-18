import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { RegisterSchema } from "../RegisterSchema";

const inValue = {
    name: '',
    email: '',
    password: '', 
    c_password: ''
}

function getData() {
    let datas = window.localStorage.getItem("MyData")
    if (datas == null) {
        return []
    } else {
        return JSON.parse(datas)
    }
}

function Register() {

    const [submitData, setSubmitData] = useState(getData())
    const [ShowPassword, setShowPassword] = useState(false)
    const { values, handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({

        initialValues: inValue,
        validationSchema: RegisterSchema,
        onSubmit: (values, action) => {

            const newData = values;

            setSubmitData([...submitData, newData])
            action.resetForm('');
        }
    })

    useEffect(() => {
        window.localStorage.setItem("MyData", JSON.stringify(submitData))
        window.localStorage.setItem("Data", "Null Null")
    }, [submitData])

    const PasswordCall = () => {
        setShowPassword(!ShowPassword)
    }

    const ClearItem = () => {
        window.localStorage.clear('')
        window.localStorage.removeItem("Data");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label >
                    Name :
                </label>
                <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                {
                    touched.name && errors.name ?
                        <span>
                            {
                                errors.name
                            }
                        </span> : ''
                }

                <br />
                <br />

                <label>
                    Email :
                </label>
                <input type="text" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                {
                    touched.email && errors.email ?
                        <span>
                            {
                                errors.email
                            }
                        </span> : ''
                }

                <br />
                <br />

                <label>
                    Password :
                </label>
                <input type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                {
                    touched.password && errors.password ?
                        <span>
                            {
                                errors.password
                            }
                        </span> : ''
                }

                <br />
                <br />

                <label>
                    Confirm Password :
                </label>
                <input type="password" name="c_password" value={values.c_password} onChange={handleChange} onBlur={handleBlur} />
                {
                    touched.c_password && errors.c_password ?
                        <span>
                            {
                                errors.c_password
                            }
                        </span> : ''
                }

                <br />
                <br />

                <input type="submit" />
                <button type="button" onClick={() => {ClearItem()}} >Clear</button>

            </form>

            <br />
            <br />

            <h1>
                Data List :-
            </h1>
            <ul>
                {
                    submitData.map((data, i) => {
                        // console.log(data);
                        return (
                            <li className="row" key={i}>
                                <span className="col-1">
                                    {
                                        i + 1
                                    }
                                </span>
                                <span className="col-3">
                                    {
                                        data.name
                                    }
                                </span>
                                <span className="col-5">
                                    {
                                        data.email
                                    }
                                </span>
                                <span className="col-3">
                                    <input type={ShowPassword ? "text" : 'password'} disabled="disabled" value={data.password} style={{ border: 0, backgroundColor: 'transparent' }} />
                                    <button onClick={PasswordCall}><i class="bi bi-eye"></i> ? <i class="bi bi-eye-slash"> : ''</i></button>
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Register;