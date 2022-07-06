import express from "express";
const router = express.Router();
import {createUser, getUsers, getOneUser, updateUser, deleteUser} from '../controller/user.js';

router.get('/', getUsers);
router.get('/:email', getOneUser);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;