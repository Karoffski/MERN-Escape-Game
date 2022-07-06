import axios from "axios";
import React, { useEffect, useState } from "react";
//import { useParams } from 'react-router-dom';

const DisplayReservations = () => {

    const [reservationData, setReservation] = useState([]);

    const getReservationData = () => {
    return axios
        .get(`http://localhost:4000/reservations`)
        .then((res)=>{
        setReservation(res.data)
    })
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
                    <p>{reservations._id}</p>
                    <p>{reservations.numberPlayers}</p>
                    <p>{reservations.firstName}</p>
                    <p>{reservations.lastName}</p>
                    <p>{reservations.birthday}</p>
                    <p>{reservations.userId}</p>
                    <p>{reservations.roomId}</p>
                </div>
            )
        })}
        </div>
    )
}

export default DisplayReservations;