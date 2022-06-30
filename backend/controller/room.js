import Room from "../models/roomModel.js";

export function createRoom(name){
    
    const Room = new Room({name})
   
    const result = Room.save()
    
    return result
}

export async function listRoom(){
    const roomList = await Room
      .find()
    
      return roomList
}

export async function showOneRoom(name){
    const myRoom = await Room
    
    .findOne({name:name})
    
    return myRoom
}
export async function updateRoom(name,body){
    const myRoomUpdated = await Room
    
    .findOneAndUpdate({name:name},{name:body})

    return myRoomUpdated
}


export async function deleteOneRoom(name){
    const myRoomDeleted = await Room
    
    .deleteOne({name:name})

    return myRoomDeleted
}