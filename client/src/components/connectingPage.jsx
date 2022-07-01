import {Link} from 'react-router-dom'

const ConnexionForm= ()=>{
    return(
        <div>
            <form action="">
                <input type="text" placeholder="username"/>
                <input type="text" placeholder="password"/>
                <button type="submit">se connecter</button>
                <Link to='/inscriptionPage'>pas encore inscrit? cliquez ici </Link>
            </form>
        </div>
    )
}

export default ConnexionForm