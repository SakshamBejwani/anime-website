import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Title from './Title'
import {useState, useEffect} from 'react'
import { getAllTitles } from '../../api/Titles'

function Home() {
    const dataArr =[]
    const [anime, setAnime] = useState([])
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState("")

    useEffect(() => {
        getAllTitles(getAllTitlesCallback)
    }, [])

    const getAllTitlesCallback =(response)=>{
        // console.log('response' , response)
        if(response.status === 200){
            response.json().then(data=>{
                dataArr.push(data.data)
                // console.log('Final data pack',data)
                setAnime(dataArr[0])
                // console.log('Anime list', anime)
                setLoading(false)
            })       
        }
    }
    
  return (
    <>
        <Navbar/>
        <div class="container py-5">
            <div class="row d-flex flex-wrap">
                {(loading?(
                <>
                    <div class="col d-flex align-items-center justify-content-center">
                            <h6>Loading.....</h6>
                    </div>
                </>
                ):(
                <>
                    <div class="container px-5">
                        <input class="form-control text-center fw-bold py-2 " type="text" placeholder="Search" aria-label="Search" 
                    onChange={(e)=> {setFilter(e.target.value)}}></input>
                    </div>
                    

                    {anime.filter((item) => {
                        if(filter=="")
                        {
                            return item
                        }
                        else if (item.title.toLowerCase().includes(filter.toLowerCase()))
                        {
                            return item
                        }
                        else if (item.synopsis.toLowerCase().includes(filter.toLowerCase()))
                        {
                            return item
                        }
                        // else if (item.episodes.toLowerCase().includes(filter.toLowerCase()))
                        // {
                        //     return item
                        // }
                    }).map((item, index)=>
                        
                            <Title
                            row={item} index={index}/>
                        
                       
                    )} 
                    
                </>))}
               
                
            </div>
        </div>
        
    </>
  )
}

export default Home