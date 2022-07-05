import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const DisplayOneRoom=() =>{

useEffect(()=>{
    getData()
    }
)

let params = useParams()

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
        <img src={roomData.image} alt=""></img>
        <p><b>Description:</b> {roomData.description}</p>
        <p><b>Limite d'âge:</b> {roomData.ageLimit}</p>
        <p><b>Capacité:</b> {roomData.capacity}</p>
        <h1>Créneaux disponibles:</h1>
        <p>Pas de créneaux disponibles ***importer créneaux de réservations***</p>
    </div>
)

}

export default DisplayOneRoom;