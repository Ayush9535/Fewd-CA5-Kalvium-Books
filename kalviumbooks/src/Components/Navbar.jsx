import logo from "../assets/Logo.png"
import {Link} from "react-router-dom"
import { IoIosSearch } from "react-icons/io";

const Navbar = ({setsearchVal}) => {

  let handleChange = (e) =>{
    setsearchVal(e.target.value)
  }

  return (
    <div className="flex justify-between items-center w-[100%] py-5 pl-5 pr-[5vw] mt-2">
      <Link to={'/'}>
      <div className="flex items-center">
        <img src={logo} className="w-[3vw] mr-2"/>
        <h3 className="text-2xl text-gray-600 font-medium">Kalvium Books</h3>
      </div></Link> 

      <div className="flex justify-center items-center shadow-lg h-[7vh] px-5 rounded">
        <IoIosSearch className="bg-white text-gray-600" size={"1.5vw"}/>
        <input type="text" className="w-[40vw] px-5 outline-none" placeholder="Search Books" onChange={handleChange}/>
      </div>

      <Link to={"/register"}><button className="py-2 border-2 border-black text-red-600 px-[4vw]">Register</button></Link>
    </div>
  )
}

export default Navbar
