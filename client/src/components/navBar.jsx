import {Link} from 'react-router-dom'


const NavBar= () =>{ 
    return(
        <div>
        <nav>
            <Link to='accueilPage'>home </Link>
            <Link to='connectingPage'>connexion</Link>
        </nav>
        </div>
    )
}

export default NavBar