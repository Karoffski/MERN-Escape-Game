import express from 'express';
import { createRoom, listRoom, showOneRoom, updateRoom, deleteOneRoom } from '../controller/user.js';
const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.get('/', async (req, res) => {
    let toys = await listRoom()
    res.json(toys);
})

router.get('/:name', async (req, res) => {
    let toyName = await showOneRoom(req.params.name)
    res.json(toyName)
})

router.post('/', async (req, res) => {
    const newToy = await createRoom(req.body)
    res.send('ok')
})

router.put('/:name', async (req, res) => {
    console.log(req.params.name);
    let updateOneToy = await updateRoom(req.params.name,req.body.name)
    }
);

router.delete('/:id', function (req, res) {
    let deleteOne= deleteOneRoom(req.params.id)
})

export default router;