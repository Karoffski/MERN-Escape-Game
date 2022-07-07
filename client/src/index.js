import React from 'react';
import { createRoot} from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/navBar.jsx'
import DisplayRooms from './components/rooms.jsx';
import ConnexionForm from './components/connectingPage.jsx';
import InscriptionForm from './components/inscriptionPage.jsx';
import ClientSpace from './components/clientSpace.jsx';
import DisplayOneRoom from './components/room.jsx';
import DisplayReservations from './components/reservations.jsx';
import ReserveRoom from './components/reservation.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement)

root.render(
  <BrowserRouter>
    <Routes>       
      <Route path='/' element={<NavBar/>} >
        <Route path='connectingPage' element={<ConnexionForm/>} />
        <Route path='inscriptionPage' element={<InscriptionForm/>} />
        <Route path='rooms' element={<DisplayRooms/>} />
        <Route path='rooms/:id' element={<DisplayOneRoom/>} />
        <Route path='reservation' element={<ReserveRoom/>} />
        <Route path='reservations' element={<DisplayReservations/>} />
        <Route path='clientSpace' element={<ClientSpace/>} />
      </Route>  
    </Routes>
  </BrowserRouter>
)