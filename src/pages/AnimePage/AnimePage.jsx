import React, { useEffect, useState } from 'react'
import useApiAnimeData from '../../hooks/getAPIDATA';
import AnimaCard from '../../components/AnimeCard/AnimaCard';
import Popup from '../../components/Popup/Popup';
import "./AnimePage.css"

function AnimePage() {
    const [animeName, setAnimeName] = useState("one punch");
    const [animeDigitado, setAnimeDigitado] = useState("one punch")
    const { animeData, loading, error } = useApiAnimeData(animeName);
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState({ message: "", color: "" });

    const hadleInputChange = (e) => {
        setAnimeDigitado(e.target.value);
    }

    function BuscarOAnime() {
        setAnimeName(animeDigitado);
    }

    useEffect(() => {
        if (!loading) {
            if (error) {
                showAndHidePopup(`Error: ${error}`, "warning");
            } else {
                showAndHidePopup("Animes coletados com sucesso", "success");
            }
        }
    }, [loading, error, animeData]);

    function showAndHidePopup(message, color) {
        setPopupContent({ message, color });
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3500);
    }


    return (
        <div className='form-anime'>
            {/* novo */}
            <div className='form'> 
                <input type="text" placeholder='Enter anime name' value={animeDigitado} onChange={hadleInputChange}></input>
                <button onClick={() => BuscarOAnime()}>Pesquisar</button>
            </div>


            {loading && <div> Loading... </div>}
            {error && <div>Error:{error} </div>}

            {Array.isArray(animeData) ? (<div className='anime-cards'>{animeData.map((a) => (<AnimaCard key={a.mal_id}{...a}></AnimaCard>))}</div>
            ) : (animeData && <div> Sem nenhum anime </div>)}

            {showPopup ? (<Popup message={popupContent.message} color={popupContent.color} />) : null}

        </div>
    )
}

export default AnimePage;