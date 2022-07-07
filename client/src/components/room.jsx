import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import Button from '@mui/material/Button';


const DisplayOneRoom = () => {

useEffect(() => {
    getRoomData()
})

let params = useParams()

const [roomData, setRoom] = useState([]);
//const [reservationData, setReservation] = useState([]);

const getRoomData = () => {
    return axios
        .get(`http://localhost:4000/rooms/${params.id}`)
        .then((res)=>{
        setRoom(res.data)
    }).catch((err)=>console.error(err))

    //     .get(`http://localhost:4000/reservations`)
    //     .then((res) => {
    //     setReservation(res.data)
    // }).catch((err)=>console.error(err))
}

return (
    <div>
        <h1>{roomData.name}</h1>
        <img src={roomData.image} alt=""></img>
        <p><b>Description:</b> {roomData.description}</p>
        <p><b>Limite d'âge:</b> {roomData.ageLimit}</p>
        <p><b>Capacité:</b> {roomData.capacity}</p>
        <h1>Créneaux disponibles:</h1>
        <p>Pas de créneaux disponibles</p>
        <Button><Link to='../reservation'>Réserver une salle</Link></Button>
    </div>
)

}

export default DisplayOneRoom;