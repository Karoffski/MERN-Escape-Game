import express from 'express';
import { createRoom, listRoom, showOneRoom, updateRoom, deleteOneRoom } from '../controller/room.js';
const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.get('/', (req, res) => {
    let room = listRoom()
    res.json(room);
})

router.get('/:name', async (req, res) => {
    let roomName = await showOneRoom(req.params.name)
    res.json(roomName)
})

router.post('/', async (req, res) => {
    const newRoom = createRoom(req.body)
    res.json(newRoom)
})

router.put('/:name', async (req, res) => {
    console.log(req.params.name);
    let updateOneRoom = await updateRoom(req.params.name,req.body.name)
    res.json(updateOneRoom)
    }
);

router.delete('/:id', function (req, res) {
    let deleteRoom= deleteOneRoom(req.params.id)
    res.json(deleteRoom)
})

export default router;