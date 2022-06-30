import React from 'react';
import { createRoot} from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/navBar.jsx'
import DisplayRoom from './components/accueilPage.jsx';
import ConnexionForm from './components/connectingPage.jsx';
import InscriptionForm from './components/inscriptionPage.jsx';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement)
root.render(
  <BrowserRouter>
    <NavBar/>
    <Routes>       
      <Route path='/' element={<DisplayRoom/>}/>
      <Route path='connectingPage' element={<ConnexionForm/>}/>
      <Route path='connectingPage/inscriptionPage' element={<InscriptionForm/>}/>  
    </Routes>
  </BrowserRouter>
)
