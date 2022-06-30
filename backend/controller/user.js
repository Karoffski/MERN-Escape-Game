import Room from "../models/roomModel.js";

export async function createRoom(name){
    
    const Toy = await new Toys(name)
   
    const result = await Toy.save()
    
    return result
}

export async function listRoom(){
    const roomList = await Toys
      .find()
    
      return roomList
}

export async function showOneRoom(name){
    const myRoom = await Toys
    
    .findOne({name:name})
    
    return myRoom
}
export async function updateRoom(name,body){
    const myRoomUpdated = await Toys
    
    .findOneAndUpdate({name:name},{name:body})

    return myRoomUpdated
}


export async function deleteOneRoom(name){
    const myRoomDeleted = await Toys
    
    .deleteOne({name:name})

    return myRoomDeleted
}