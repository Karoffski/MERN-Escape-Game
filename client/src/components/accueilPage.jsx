import axios from "axios";
import React,{useEffect, useState} from "react";

const DisplayRoom=() =>{
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
            {images.map((image)=>{
                        return (
                        <img src={image.url} alt="" key={image.id} />
                        )
                    })}
            
        </div>
    )
}

export default DisplayRoom