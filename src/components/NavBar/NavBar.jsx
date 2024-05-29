import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './NavBar.css'
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../Redux/Slice/UserSlice';
import { FaUserCircle } from 'react-icons/fa';


function NavBar() {

    const isLogged = useSelector((state) => state.user.isLogged); 
    const name = useSelector((state) => state.user.name);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const deslogar = () => {
        dispatch(userActions.toggleLogged());
        dispatch(userActions.setName(""));
        navigate('/');
    };
    return (
        <nav id='navbar'>
            <div id="left-links">
                <div><Link to='/'>Home</Link></div>
                <div><Link to='/anime'>Animes</Link></div>
                <div><Link to='/favorito'>Favorito</Link></div>
                <div><Link to='/notes'>Notes</Link></div>
            </div>  
            {isLogged ? (
                <div id='infos'>
                    <div> <FaUserCircle color="cyan" fontSize={22} /><div />
                        <span id="nomeDoUser">{name}</span>
                        <div id="deslogarButton" onClick={() => deslogar()}> Deslogar </div>
                    </div>
                </div>
            ) : (
                <div id="right-links">
                    <div><Link to='/login'>Login</Link></div>
                </div>
            )}

        </nav>
    );
}

export default NavBar