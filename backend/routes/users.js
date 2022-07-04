import express from "express";
const router = express.Router();
import {createUser, getUsers, getOneUser, updateUser, deleteUser} from '../controller/user.js';

router.get('/', getUsers);
router.get(':name', getOneUser);
router.post('/', createUser);
router.patch('/:name', updateUser);
router.delete('/:name', deleteUser);

export default router;