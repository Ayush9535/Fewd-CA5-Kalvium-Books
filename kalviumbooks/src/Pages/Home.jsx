import React from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import { FaStar } from "react-icons/fa";


const Home = () => {

  const [data , setData] = React.useState([])
  const [searchVal , setsearchVal] = React.useState("")

  let fetchData = async() =>{
    try{
      let data = await axios.get("https://reactnd-books-api.udacity.com/books" ,{headers : { 'Authorization': 'whatever-you-want' }})
      setData(data.data.books)
    }catch (error) {
      console.log(error)
    }
  }
  React.useEffect(()=>{
    fetchData()
  } , [])
  
  let filteredData = data.filter((ele)=>(ele.title.includes(searchVal)))

  return (
    <div>
        <Navbar setsearchVal={setsearchVal} />
        <div className='grid grid-cols-5 w-[80%] m-auto my-20 gap-y-10'>
          {filteredData.map((ele , i)=>{
            return (
              <div className='m-auto my-0 cursor-pointer' key={i}>
                <img src={ele.imageLinks.smallThumbnail} className='w-44 h-60'/>
                <h3 className='text-l w-44 my-2'>{ele.title}</h3>
                <div className='text-gray-600 flex'>
                  <h4 className='mr-5 flex items-center gap-1'>{ele.averageRating == undefined ? 4.5 : ele.averageRating} <FaStar /></h4>
                  <h4>Free</h4>
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Home
