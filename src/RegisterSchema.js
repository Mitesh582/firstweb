import * as Yup from 'yup';

export const RegisterSchema = Yup.object({
    name : Yup.string().min(3).required("Please Enter Your Name"),
    email : Yup.string().required("Please Enter Your Email"),
    password : Yup.string().max(6).required("Please Enter Your Password"),
    c_password : Yup.string().oneOf([Yup.ref("password")], "Password Much Match").required()

})