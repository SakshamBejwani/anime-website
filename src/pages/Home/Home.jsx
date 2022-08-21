import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Title from './Title'
import {useState, useEffect} from 'react'
import { getAllTitles } from '../../api/Titles'

function Home() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllTitles(getAllTitlesCallback)
    }, [])

    const getAllTitlesCallback =(response)=>{
        console.log('response' , response)
        if(response.status === 200){
            response.json().then(data=>{
                setData(data.data.data)
                console.log('Final data pack',data)
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
                    {data}
                    {/* {data.map((item, index)=>
                        
                            <Title
                            row={item} index={index}/>
                        
                       
                    )}  */}
                    
                </>))}
               
                
            </div>
        </div>
        
    </>
  )
}

export default Home