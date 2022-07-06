import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const DisplayRooms= () => {
    useEffect(() => {
        getData()
    })

const [roomData, setData]= useState([])

const getData = () => {
    return axios
    .get('http://localhost:4000/rooms')
    .then((res)=>{
    setData(res.data)})
    .catch((err)=>console.error(err))
}

return(
    <div>
        {roomData.map((room) => {
                    return (
                        <div key={room._id}>
                            <h1>{room.name}</h1>
                            <Link to={`/rooms/${room._id}`}><img src={room.image} alt="" key={room._id} /></Link>
                       </div>
                    )
                }
            )
        }
    </div>
    )
}

export default DisplayRooms;