import React from 'react';
import {redondeo} from '../card/Card';
import {useSelector, useDispatch} from 'react-redux';
import s from './Cards.module.css';
import {deleteClima, getClimaCity} from '../redux/actions';

const Cards = () => {

    const dispatch = useDispatch()

    const climasCities = useSelector(state => state.climasCities)

    const deleteClimaCity = (id, index) => {
        dispatch(deleteClima(id ,index))
    }

    const searchCity = (city) => {
        dispatch(getClimaCity(city))
    } 

    return (
        <div className={s.containerFather}>

            {climasCities.length > 1 && <span className={s.historial}>Historial</span>}

            <div className={s.container}>
                {
                    climasCities && climasCities.map((e, i) => 
                        
                        i !== 0 && <div className={s.card}>

                            <button onClick={()=>deleteClimaCity(e.id, i)} className={s.btnDelete}><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/><path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/></svg>
                            </button>

                            <div key={i} id={i} className={s.info} onClick={()=>searchCity(e.name)}>


                                <div className={s.nameCity}>
                                    <span>{e.name}</span>
                                </div>

                                <div className={s.temperaturas}>
                                    <div className={s.tempImg}>
                                        <span>{redondeo(e.main.temp)}°</span>
                                        <img className={s.img} src={`https://openweathermap.org/img/w/${e.weather[0].icon}.png`} alt="imagen del clima actual" />
                                    </div>

                                    <div className={s.minMax}>
                                        <span>max {`${redondeo(e.main.temp_max)}°`}</span>
                                        <span>min {`${redondeo(e.main.temp_min)}°`}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Cards;