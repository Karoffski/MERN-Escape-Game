import axios from "axios";
import React, { useEffect, useState } from "react";
//import { useParams } from 'react-router-dom';

const DisplayReservations = () => {

    const [reservationData, setReservation] = useState([]);

    const getReservationData = () => {
    return axios
        .get(`http://localhost:4000/reservations`)
        .then((res)=>{setReservation(res.data)})
        .catch((err)=>console.error(err))
    }

    useEffect(() => {
        getReservationData()
    })

    return (
        <div>
        {reservationData.map((reservations) => {
            return (
                <div>
                    <p><b></b> {reservations._id}</p>
                    <p><b>Number of Players:</b> {reservations.numberPlayers}</p>
                    <p><b>First Names:</b> {reservations.firstNames}</p>
                    <p><b>Last Names:</b> {reservations.lastNames}</p>
                    <p><b></b> {reservations.userId}</p>
                    <p><b></b> {reservations.roomId}</p><br></br>
                </div>
            )
        })}
        </div>
    )
}

export default DisplayReservations;