import Reservation from "../models/userModel.js";

export const getReservations =  async (req, res) => {
    try {
        const listReservations = await Reservation.find()
        res.status(200).json(listReservations);
    } catch (error) {
        res.status(404).json({message: error.message })
    }  
}

export const getOneReservation = async (req, res) => {
    try {
        const myReservation = await Reservation.findOne({name: req.params.name})
        res.status(200).json(myReservation);
    } catch (error) {
        res.status(404).json({message: error.message })
    } 
}

export const createReservation = async (req, res) => {
    try {
        const newReservation = await Reservation.create({ id: req.body.id, name: req.body.name, description: req.body.description, price: req.body.price, capacity: req.body.capacity, image:req.body.image })
        res.status(200).json(newReservation)
    } catch (error) {
        res.status(404).json({message: error.message })
    }    
}

export const updateReservation = async (req, res) => {
    try {
        const updatedReservation =  await Reservation.findOneAndUpdate({name:req.params.name},{name:req.body.name})
        res.status(200).json(updatedReservation)
    } catch (error) {
        res.status(404).json({message: error.message })
    }   
}

export const deleteReservation = async (req, res) => {
    try {
        const deletedReservation = await Reservation.deleteOne({name: req.params.name})
        res.status(200).json(deletedReservation)
    } catch(error) {
        res.status(404).json({message: error.message })
    }  
}