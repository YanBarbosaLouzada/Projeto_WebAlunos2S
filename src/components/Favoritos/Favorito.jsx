import React, { useEffect } from 'react'
import "./Favorito.css"
import AnimeCard from '../AnimeCard/AnimaCard'
import { useSelector } from 'react-redux';
import { useLoaderData, useNavigate } from 'react-router-dom'

function Favorito() {
    const { data } = useLoaderData();
    const isLogged = useSelector((state) => state.user.isLogged);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogged === false) {
            navigate("/login");
        }
    }, []);
    return (
        <div className='container'>
            <div className='anime-cards'>
                {data.map((a) => (<AnimeCard key={a.mal_id} {...a} />))}
            </div>
        </div>
    )
}

export default Favorito