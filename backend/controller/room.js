import Room from "../models/roomModel.js";

export const getRooms =  async (req, res) => {
    try {
        const listRooms = await Room.find()
        res.status(200).json(listRooms);
    } catch (error) {
        res.status(404).json({message: error.message })
    }  
}

export const getOneRoom = async (req, res) => {
    try {
        const myRoom = await Room.findOne({name: req.params.name})
        res.status(200).json(myRoom);
    } catch (error) {
        res.status(404).json({message: error.message })
    } 
}

export const createRoom = async (req, res) => {
    try {
        const newRoom = await Room.create({ id: req.body.id, name: req.body.name, description: req.body.description, price: req.body.price, capacity: req.body.capacity, image:req.body.image })
        res.status(200).json(newRoom)
    } catch (error) {
        res.status(404).json({message: error.message })
    }    
}

export const updateRoom = async (req, res) => {
    try {
        const updatedRoom =  await Room.findOneAndUpdate({name:req.params.name},{name:req.body.name})
        res.status(200).json(updatedRoom)
    } catch (error) {
        res.status(404).json({message: error.message })
    }   
}

export const deleteRoom = async (req, res) => {
    try {
        const deletedRoom = await Room.deleteOne({name: req.params.name})
        res.status(200).json(deletedRoom)
    } catch(error) {
        res.status(404).json({message: error.message })
    }  
}