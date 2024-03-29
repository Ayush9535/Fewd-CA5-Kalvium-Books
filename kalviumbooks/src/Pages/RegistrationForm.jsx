import React  from 'react'
import {Link} from "react-router-dom"
import logo from "../assets/Logo21.png"
import { BiShow } from "react-icons/bi";
import {toast  , ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const RegistrationForm = () => {

  // initial val of state for inputValues state 
  let inputValues = {
    name : "",
    email : "",
    password : "",
    confirmPass : ""
  }

  // initial val of state for errorsmessages state 
  let errorMessages = {
    name : "",
    email : "",
    password : "",
    confirmPass : ""
  }

  // Defining all needed states
  const [inputVals , setInputVals] = React.useState(inputValues)
  const [errors , seterros] = React.useState(errorMessages)

  // creating reference for password and confirmPassword inputs
  const pass = React.useRef()
  const confirmPass = React.useRef()

  // functions to handle show hide toggle for passwords 
  let handletoggle = () =>{
    pass.current.type == "text" ? pass.current.type = "password" : pass.current.type = "text"
  }

  let handleconfirmPass = () =>{
    confirmPass.current.type == "text" ? confirmPass.current.type = "password" : confirmPass.current.type = "text"
  }

  // function to save input values in inputVals State 
  let handleChange = (e) =>{
    setInputVals((prev) => ({...prev , [e.target.name] : e.target.value}))
  }

  // Function to handle submit i.e check for validation of data 
  let handleSubmit = (e) =>{
    
    // to prevent the default behaviour of form of reloading the page after submitting and form disappearing 
    e.preventDefault()

    let obj1 = {}

    // Name Validation
    if (inputVals.name == ""){
      obj1.name = "Name is Required..!!"
    }
    else if (/[0-9]/.test(inputVals.name)){
      obj1.name = "Name should not contain numbers..!!"
    }
    else if (inputVals.name.length < 3){
      obj1.name = "Name should contain more than 3 letters..!!"
    }
    else if (inputVals.name.length > 30){
      obj1.name = "Name should contain less than 30 letters..!!"
    }

    // email validation 
    if (inputVals.email == ""){
      obj1.email = "Email is Required..!!"
    }
    else if (!/^\S+@\S+$/i.test(inputVals.email)){
      obj1.email = "Enter Valid Email..!!"
    }

    // Password Validation 
    if (inputVals.password == ""){
      obj1.password = "Password is Required..!!"
    }
    else if ( !/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(inputVals.password)){
      obj1.password = "Password must contain 1 special character..!!"
    }
    else if (inputVals.password.length < 10){
      obj1.password = "Password must be 10 letters long..!!"
    }

    // Confirm Password Validation 
    if (inputVals.confirmPass == ""){
      obj1.confirmPass = "Password is Required..!!"
    }
    else if (inputVals.password != inputVals.confirmPass){
      obj1.confirmPass = "Passwords does not match..!!"
    }

    // setting all the errors messages to show 
    seterros(obj1)
    
    // if all data is correct then submit the form and show registraion Successfully
    if (Object.keys(obj1).length == 0){
      console.log(inputVals)
      showToast()
    }
  }  
  
  // making toast to show after submission of form 
  const showToast = () => {
    toast.success('Registration Successfully', {
      position: "top-center",
      autoClose:500
    });
  };

  return (
    <div>
        <div className='w-full mt-20'>

          {/* Logo of website linked to home page */}
          <Link to={'/'}>
            <div className="flex justify-center items-center">
              <img src={logo} className="w-[4vw] mr-2"/>
              <h3 className="text-[3.5vw] text-red-600 font-medium relative bottom-1">Kalvium Books</h3>
            </div>
          </Link> 

          {/* Registration Form  */}
          <form onSubmit={handleSubmit} className=' flex items-center m-auto flex-col w-[40vw]'>
            <h1 className='text-[1.5vw] my-4'>Create an Account</h1>
            
            {/* input box for name with error message div  */}
            <div className='mt-6'>
              <input onChange={handleChange} type="text" className='w-[25vw] p-2 text-l border-2 border-black rounded' placeholder='Enter Name' name="name"/>
              <div className='text-red-600 self-start'>{errors.name}</div>
            </div>

            {/* input box for email with error message div  */}
            <div className='mt-6'>
              <input onChange={handleChange} type="email" className='w-[25vw] p-2 text-l border-2 border-black rounded' placeholder='Enter Email' name="email"/>
              <div className='text-red-600 self-start'>{errors.email}</div>
            </div>
            
            {/* input box for password with error message div  */}
            <div className='mt-6'>
              <div className='flex items-center'>
              <input onChange={handleChange} type="password" ref={pass} className='w-[23.5vw] p-2 text-l border-y-2 border-l-2 border-black rounded-l outline-none' placeholder='Enter Password' name="password"/>
              <BiShow onClick={handletoggle} size={"1.5vw"} className='border-y-2 border-black h-[2.8vw] border-r-2 rounded-r '/>
              </div>
              <div className='text-red-600 self-start'>{errors.password}</div>
            </div>
            
            {/* input box for confirm password with error message div  */}
            <div className='mt-6'>
              <div className='flex items-center'> 
                <input onChange={handleChange} type="password" ref={confirmPass} className='w-[23.5vw] p-2 text-l border-y-2 border-l-2 border-black rounded-l outline-none' placeholder='Confirm Password' name="confirmPass"/>
                <BiShow onClick={handleconfirmPass} size={"1.5vw"} className='border-y-2 border-black h-[2.8vw] border-r-2 rounded-r'/>
              </div>
              <div className='text-red-600 self-start'>{errors.confirmPass}</div>
            </div>
            
            {/* sign up button  */}
            <div className='mt-6'>
              <input type="submit" className='w-[25vw] p-2 text-xl bg-sky-400 rounded cursor-pointer' value={"Sign Up"}/>
            </div>

          </form>
        </div>

        {/* Toast div  */}
        <ToastContainer />
    </div>
  )
}

export default RegistrationForm
