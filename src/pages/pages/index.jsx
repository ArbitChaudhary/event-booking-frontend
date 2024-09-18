import * as Yup from "yup"


export const signUpChema = Yup.object({
    email : Yup.string().email().required("Please enter your Email"),
    password : Yup.string().min(6).max(16).required("Please enter your password"),
    confirm_password : Yup.string().required().oneOf([Yup.ref('password'), null], 
    "Password must match")
})