import Reservation from "../models/reservationModel.js";

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
        const myReservation = await Reservation.findOne({_id: req.params.id})
        res.status(200).json(myReservation);
    } catch (error) {
        res.status(404).json({message: error.message })
    } 
}

export const createReservation = async (req, res) => {
    try {
        const newReservation = await Reservation.create({ firstName:req.body.firstName, lastName: req.body.lastName, birthday: req.body.birthday, numberPlayers: req.body.numberPlayers, userId: req.body.userId, roomId: req.body.roomId})
        res.status(200).json(newReservation)
    } catch (error) {
        res.status(404).json({message: error.message })
    }    
}

export const updateReservation = async (req, res) => {
    try {
        const updatedReservation =  await Reservation.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(updatedReservation)
    } catch (error) {
        res.status(404).json({message: error.message })
    }   
}

export const deleteReservation = async (req, res) => {
    try {
        const deletedReservation = await Reservation.deleteOne({_id: req.params.id})
        res.status(200).json(deletedReservation)
    } catch(error) {
        res.status(404).json({message: error.message })
    }  
}