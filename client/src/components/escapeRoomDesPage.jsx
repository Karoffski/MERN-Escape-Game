import axios from "axios";
import React,{useEffect, useState} from "react";
import { useParams } from 'react-router-dom';

const DisplayOneRoom=() =>{
    
    let params = useParams()

    useEffect(()=>{
        getData()
       },[])

    const [roomData, setData]= useState([])
    
    const getData=()=>{
    return axios
        .get(`http://localhost:4000/rooms/${params.id}`)
        .then((res)=>{
        setData(res.data)
    })
        .catch((err)=>console.error(err))
   }

return (
    <div>
        <h1>{roomData.name}</h1>
        <img src={roomData.image}></img>
        <p>{roomData.description}</p>
        <p>{roomData.ageLimit}</p>
        <p>{roomData.capacity}</p>
        <h1>Créneaux disponibles</h1>
        <p>Pas de créneaux disponibles ***importer créneaux de réservations***</p>
    </div>
)

}

export default DisplayOneRoom;