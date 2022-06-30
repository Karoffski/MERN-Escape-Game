const port = 5000;
import express from 'express';
import cors from 'cors';
const app = express();
import mongoose from 'mongoose';
import roomsRoutes from "./routes/rooms.js";
//import usersRoutes from "./routes/users.js";
//import reservationsRoutes from "./routes/reservations.js";

app.use(cors({ origin: true, credentials: true}));
app.use(express.json({extended: true}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//app.use("/users", usersRoutes)
app.use("/rooms", roomsRoutes)
//app.use("/reservations", reservationsRoutes)


app.listen(port, () => {
  mongoose.connect('mongodb+srv://Admin:blablabla@cluster-matrice.twad4hy.mongodb.net/escapegame?retryWrites=true&w=majority')
        .then(()=>{console.log('Connected');})
        .catch(()=>{console.log('Fail');})
})