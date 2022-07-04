import User from "../models/userModel.js";

export const getUsers =  async (req, res) => {
    try {
        const listUsers = await User.find()
        res.status(200).json(listUsers);
    } catch (error) {
        res.status(404).json({message: error.message })
    }  
}

export const getOneUser = async (req, res) => {
    try {
        const myUser = await User.findOne({name: req.params.name})
        res.status(200).json(myUser);
    } catch (error) {
        res.status(404).json({message: error.message })
    } 
}

export const createUser = async (req, res) => {
    try {
        const newUser = await User.create({ id: req.body.id, name: req.body.name, description: req.body.description, price: req.body.price, capacity: req.body.capacity, image:req.body.image })
        res.status(200).json(newUser)
    } catch (error) {
        res.status(404).json({message: error.message })
    }    
}

export const updateUser = async (req, res) => {
    try {
        const updatedUser =  await User.findOneAndUpdate({name:req.params.name},{name:req.body.name})
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(404).json({message: error.message })
    }   
}

export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.deleteOne({name: req.params.name})
        res.status(200).json(deletedUser)
    } catch(error) {
        res.status(404).json({message: error.message })
    }  
}