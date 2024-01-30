import React from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import { FaStar } from "react-icons/fa";


const Home = () => {

  // Defining states for fetched data , search value and isloading 
  const [data , setData] = React.useState([])
  const [searchVal , setsearchVal] = React.useState("")
  const [isLoading , setLoading] = React.useState(true)

  // function to fetch data from api 
  let fetchData = async() =>{
    try{
      let data = await axios.get("https://reactnd-books-api.udacity.com/books" ,{headers : { 'Authorization': 'whatever-you-want' }})
      setData(data.data.books)
    }catch (error) {
      console.log(error)
    }
  }

  // calling the function to fetch data 
  React.useEffect(()=>{
    fetchData()
  } , []) 

  // showing loader for some time 
  React.useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },1500)
  },[])
  
  // filtering data based on search value 
  let filteredData = data.filter((ele)=>(ele.title.toLowerCase().includes(searchVal.toLowerCase())))

  return (
    <div>
        {/* showing navbar  */}
        <Navbar setsearchVal={setsearchVal} />
        
        {/* conditional rendering based on isloading state  */}
        {isLoading ? ( 
          // showing loader 
        <div className='w-[48px] h-[48px] border-[5px] border-slate-200 border-b-red-600 rounded-[50%] m-auto mt-10 animate-spin'></div>
        ) : (
          // showing data 
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-[80%] m-auto my-20 gap-y-20'>
          
          {/* mapping the filtered data  */}
          {filteredData.map((ele , i)=>{
            return (
              <div className='m-auto my-0 cursor-pointer' key={i}>
                <div className='w-44 h-60 overflow-hidden'>
                  <img src={ele.imageLinks.smallThumbnail} className='w-44 h-60 hover:scale-[1.1] transition-all duration-300'/>
                </div>
                <h3 className='text-l w-44 my-2'>{ele.title}</h3>
                <div className='text-gray-600 flex'>
                  <h4 className='mr-5 flex items-center gap-1'>{ele.averageRating} ⭐</h4>
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
