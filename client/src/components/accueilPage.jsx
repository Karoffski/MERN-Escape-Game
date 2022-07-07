import axios from "axios";
import React,{useEffect, useState,useContext} from "react";
import { UserContext } from "../userContext";

const DisplayRoom=() =>{
    const {user} = useContext(UserContext);
    useEffect(()=>{
        getImage()
       },[])
    const [images, setImages]= useState([])
    const getImage=()=>{
        return axios
        .get('https://jsonplaceholder.typicode.com/photos')
        .then((res)=>{
        setImages(res.data)})
        .catch((err)=>console.error(err))
   }
    return(
        <div>
                 
            
        </div>
    )
}

export default DisplayRoom