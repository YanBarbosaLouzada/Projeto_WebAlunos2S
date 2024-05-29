import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from '../../Redux/Slice/UserSlice'
import { useNavigate } from 'react-router-dom'
import "./LoginPage.css";

function LoginPage() {
    const [user, setUser] = useState({ name: "", password: "" }); // usuario  começa vazio
     
    const dispatch = useDispatch(); // banco do navegador
    const navigate = useNavigate(); // biblioteca de navegação

    const loginUser = (e) => { 
        e.preventDefault(); // nao deixa a pagina att enquanto estivermos esta funçao
        dispatch(userActions.setName(user.name)); // guarde no banco de dados do navegador o nome
        dispatch(userActions.toggleLogged());//
        navigate("/");
    }

    return (
        <div className='loginPage'> 
            <form id="formUser" onSubmit={loginUser}>
                <label htmlFor='nameUser' className='margin-form'> {""} Nome</label>
                <input type='text' value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })}></input>
                
                <label htmlFor='passwordUser' className='margin-form'> {""} Senha</label>
                <input type='password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}></input>

                <button type='submit' id='buttonForm' className='margin-form'> Logar </button>
            </form>
        </div>
    )
}

export default LoginPage;