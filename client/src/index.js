import React from 'react';
import { createRoot} from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/navBar.jsx'
import DisplayRoom from './components/accueilPage.jsx';
import ConnexionForm from './components/connectingPage.jsx';
import InscriptionForm from './components/inscriptionPage.jsx';
import ClientSpace from './components/clientSpace.jsx';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement)
root.render(
  <BrowserRouter>
    <Routes>       
      <Route path='/' element={<NavBar/>}>
        <Route path='connectingPage' element={<ConnexionForm/>}/>
        <Route path='inscriptionPage' element={<InscriptionForm/>}/>
        <Route path='accueilPage' element={<DisplayRoom/>}/>
        <Route path='clientSpace' element={<ClientSpace/>}/>
      </Route>  
    </Routes>
  </BrowserRouter>
)
