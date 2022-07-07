import express from "express";
const router = express.Router();
import {createUser, getUsers, updateUser, deleteUser, getOneUserByEmail, getOneUserById} from '../controller/user.js';

router.get('/', getUsers);
router.get('/:id', getOneUserById);
router.get('/:email', getOneUserByEmail);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;