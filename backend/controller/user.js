import User from "../models/userModel.js";

export const getUsers =  async (req, res) => {
    try {
        const listUsers = await User.find()
        res.status(200).json(listUsers);
    } catch (error) {
        res.status(404).json({message: error.message })
    }  
}

export const getOneUserByEmail = async (req, res) => {
    try {
        const myUser = await User.findById({email: req.params.email})
        res.status(200).json(myUser);
    } catch (error) {
        res.status(404).json({message: error.message })
    } 
}

export const getOneUserById = async (req, res) => {
    try {
        console.log("salut")
        const myUser = await User.findOne({email: req.params.email})
        res.status(200).json(myUser);
    } catch (error) {
        res.status(404).json({message: error.message })
    } 
}

export const createUser = async (req, res) => {
    try {
        const username = (req.body.firstName + req.body.lastName).toLowerCase()
        console.log(username);
        const newUser = await User.create({username: username, email: req.body.email, password: req.body.password, firstName: req.body.firstName, lastName: req.body.lastName, adress:req.body.adress, adressNumber: req.body.adressNumber, isAdmin: req.body.isAdmin })
        res.status(200).json(newUser)
    } catch (error) {
        res.status(404).json({message: error.message })
    }    
}

export const updateUser = async (req, res) => {
    try {
        const updatedUser =  await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(404).json({message: error.message })
    }   
}

export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.deleteOne({_id: req.params.id})
        res.status(200).json(deletedUser)
    } catch(error) {
        res.status(404).json({message: error.message })
    }  
}

export const registerUser = async (req, res) => {
    try {
        const takenUsername = await User.findOne({})
    } catch(error) {
        res.status(404).json({message: error.message })
    }  
}