import React from "react";
import {useSelector} from 'react-redux';
import s from './Card.module.css';

export const redondeo = (num1) => {
    let redondeado = num1 - 273.15;
    redondeado -= 1;
    redondeado = redondeado.toString();
    return redondeado.slice(0, 4);
}

const Card = () => {

    const clima = useSelector(state => state.clima);

    return (
        <div className={s.container}>
            <br />
            <br />

            <div className={s.card}>
                <div className={s.titulo}>
                    <span>Clima de la ciudad</span>
                </div>
                {clima &&  <div className={s.info}>
                    <div className={s.divInfo}>
                        <span className={s.nameCity}>{clima && clima.name}</span>

                        <div className={s.tempImg}>
                            <span >{clima && redondeo(clima.main.temp)}°</span>
                            <img className={s.img} src={`https://openweathermap.org/img/w/${clima.weather[0].icon}.png`} alt="imagen del clima actual" />
                        </div>
                        <span>sensación de: {clima && redondeo(clima.main.feels_like)}</span>
                    </div>
                    <br />
                    <div className={s.maxMinHum}>
                        <div className={s.divSpan}>
                            <span>max:</span>
                            <span>{`${clima && redondeo(clima.main.temp_max)}°`}</span>
                        </div>

                        <div className={s.divSpan}>
                            <span>min:</span>
                            <span>{`${clima && redondeo(clima.main.temp_min)}°`}</span>
                        </div>

                        <div className={s.divSpan}>
                            <span>Humedad:</span>
                            <span>{`${clima && clima.main.humidity}%`}</span>
                        </div>

                        <div className={s.divSpan}>
                            <span>viento:</span>
                            <span>{`${clima && clima.wind.speed} m/s`}</span>
                        </div>

                    </div>
                </div>}
            </div>
            <br />
        </div>
    );
}

export default Card;