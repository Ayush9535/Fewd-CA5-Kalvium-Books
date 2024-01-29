import React  from 'react'
import Navbar from '../Components/Navbar'
import {Link , useNavigate} from "react-router-dom"
import logo from "../assets/Logo.png"


const RegistrationForm = () => {

  const navigate = useNavigate()

  let inputValues = {
    name : "",
    email : "",
    password : "",
    confirmPass : ""
  }

  let errorMessages = {
    name : "",
    email : "",
    password : "",
    confirmPass : ""
  }

  const [inputVals , setInputVals] = React.useState(inputValues)
  const [errors , seterros] = React.useState(errorMessages)

  let handleChange = (e) =>{
    setInputVals((prev) => ({...inputVals , [e.target.name] : e.target.value}))
    console.log(inputVals)
  }

  let handleSubmit = (e) =>{
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

    seterros(obj1)
    
    // console.log()
    if (Object.keys(obj1).length == 0){
      navigate("/")
    }
  }
  
  // console.log(errors)

  return (
    <div>
        {/* <Navbar/> */}
        <div className='w-full mt-20'>
          <Link to={'/'}>
            <div className="flex justify-center items-center">
              <img src={logo} className="w-[4.5vw] mr-2"/>
              <h3 className="text-[3vw] text-gray-600 font-medium">Kalvium Books</h3>
            </div>
          </Link> 

          <form onSubmit={handleSubmit} className=' flex items-center m-auto flex-col w-[40vw]'>
            <h1 className='text-[1.5vw] my-4'>Create an Account</h1>

            <div className='mt-6'>
              <input onChange={handleChange} type="text" className='w-[25vw] p-2 text-l border-2 border-black rounded' placeholder='Enter Name' name="name"/>
              <div className='text-red-600 self-start'>{errors.name}</div>
            </div>

            <div className='mt-6'>
              <input onChange={handleChange} type="email" className='w-[25vw] p-2 text-l border-2 border-black rounded' placeholder='Enter Email' name="email"/>
              <div className='text-red-600 self-start'>{errors.email}</div>
            </div>
            
            <div className='mt-6'>
              <input onChange={handleChange} type="password" className='w-[25vw] p-2 text-l border-2 border-black rounded' placeholder='Enter Password' name="password"/>
              <div className='text-red-600 self-start'>{errors.password}</div>
            </div>
            
            <div className='mt-6'>
              <input onChange={handleChange} type="password" className='w-[25vw] p-2 text-l border-2 border-black rounded' placeholder='Confirm Password' name="confirmPass"/>
              <div className='text-red-600 self-start'>{errors.confirmPass}</div>
            </div>

            <div className='mt-6'>
              <input type="submit" className='w-[25vw] p-2 text-xl bg-sky-400 rounded cursor-pointer' value={"Sign Up"}/>
            </div>

          </form>
        </div>

    </div>
  )
}

export default RegistrationForm
