import React from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import { FaStar } from "react-icons/fa";


const Home = () => {

  const [data , setData] = React.useState([])
  const [searchVal , setsearchVal] = React.useState("")
  const [isLoading , setLoading] = React.useState(true)

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

  React.useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },1500)
  },[])
  
  let filteredData = data.filter((ele)=>(ele.title.includes(searchVal)))

  return (
    <div>
        <Navbar setsearchVal={setsearchVal} />
        
        {isLoading ? ( <div className='w-[48px] h-[48px] border-[5px] border-slate-200 border-b-red-600 rounded-[50%] m-auto mt-10 animate-spin'></div>) : (
        <div className='grid grid-cols-5 w-[80%] m-auto my-20 gap-y-20'>
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
        </div>)}
    </div>
  )
}

export default Home
