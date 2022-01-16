import React from 'react';
import {redondeo} from '../card/Card';
import { useSelector } from 'react-redux';
import s from './Cards.module.css';

const Cards = () => {

    const climasCities = useSelector(state => state.climasCities)

    return (
        <div className={s.containerFather}>
            <div className={s.container}>
                {
                    climasCities && climasCities.map((e, i) => 
                        
                        <div key={i} id={i} className={s.info}>
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
                    )
                }
            </div>
        </div>
    );
}

export default Cards;