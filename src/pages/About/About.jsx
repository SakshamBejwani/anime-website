import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {useEffect, useState} from 'react'
import { getAnimeById } from '../../api/Titles'

function About(props) {
    const animeID = props.match.params.animeID;
    const[animeData, setAnimeData] = useEffect([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAnimeById(animeID, getAnimeByIdCallback)
    }, [])

    const getAnimeByIdCallback =(response)=>{
        // console.log('response' , response)
        if(response.status === 200){
            response.json().then(data=>{
                setAnimeData(data)
                console.log('Anime by id data',animeData)
                setLoading(false)
            })       
        }
    }

  return (
    <>
        <Navbar />
    </>
  )
}

export default About