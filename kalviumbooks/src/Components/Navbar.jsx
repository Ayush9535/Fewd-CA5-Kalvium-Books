import logo from "../assets/Logo21.png"
import {Link} from "react-router-dom"
import { IoIosSearch } from "react-icons/io";

const Navbar = ({setsearchVal}) => {

  let handleChange = (e) =>{
    setsearchVal(e.target.value)
  }

  return (
    <div className="flex justify-between items-center w-[100%] py-5 pl-10 pr-[5vw] bg-[#38BDF8] md:pl-15 lg:pl-20">
      <Link to={'/'}>
      <div className="flex items-center text-center">
        <img src={logo} className="w-[45px] mr-2"/>
        <div>
          <h3 className="text-[25px] text-red-600 font-medium relative top-1 hidden md:block lg:block">Kalvium</h3>
          <h3 className="text-[25px] text-red-600 font-medium relative bottom-1 hidden md:block lg:block">Books</h3>
        </div>
      </div></Link> 

      <div className="flex justify-center items-center shadow-[0_0_5px_1px_gray] h-[7vh] px-5 rounded bg-white">
        <IoIosSearch className="bg-white text-gray-600" size={"30px"}/>
        <input type="text" className="w-[40vw] px-5 outline-none" placeholder="Search Books" onChange={handleChange}/>
      </div>

      <Link to={"/register"}><button className="py-2 sm:px-[1vw] lg:px-[4vw] border-2 border-red-600 hover:text-red-600 hover:bg-white font-bold bg-red-600 text-white">Register</button></Link>
    </div>
  )
}

export default Navbar
