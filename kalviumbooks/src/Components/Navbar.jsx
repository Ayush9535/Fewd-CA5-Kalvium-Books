import logo from "../assets/Logo21.png"
import {Link} from "react-router-dom"
import { IoIosSearch } from "react-icons/io";

const Navbar = ({setsearchVal}) => {

  let handleChange = (e) =>{
    setsearchVal(e.target.value)
  }

  return (
    <div className="flex justify-between items-center w-[100%] py-5 pl-8 pr-[5vw] mt-2">
      <Link to={'/'}>
      <div className="flex items-center text-center">
        <img src={logo} className="w-[2.8vw] mr-2"/>
        <div>
          <h3 className="text-[1.5vw] text-red-600 font-medium relative top-1">Kalvium</h3>
          <h3 className="text-[1.5vw] text-red-600 font-medium relative bottom-1">Books</h3>
        </div>
      </div></Link> 

      <div className="flex justify-center items-center shadow-[0_0_5px_1px_gray] h-[7vh] px-5 rounded">
        <IoIosSearch className="bg-white text-gray-600" size={"1.5vw"}/>
        <input type="text" className="w-[40vw] px-5 outline-none" placeholder="Search Books" onChange={handleChange}/>
      </div>

      <Link to={"/register"}><button className="py-2 hover:border-2 hover:border-red-600 hover:text-red-600 hover:bg-white px-[4vw] font-bold bg-red-600 text-white">Register</button></Link>
    </div>
  )
}

export default Navbar
