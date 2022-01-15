import React, {useRef} from 'react';
import {getClimaCity} from '../redux/actions';
import {useDispatch} from 'react-redux';
import s from './InputSearch.module.css';

const InputSearch = () => {

    const dispatch = useDispatch();

    var refText = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getClimaCity(refText.current.value));
        refText.current.value = ''
        refText.current.focus()
    }

    return (

        <div>
            <div className={s.container}>
                <form onSubmit={handleSubmit}>
                    <input className={s.input} type="text" placeholder="Busca una ciudad" ref={refText} />
                    <button className={s.btn} type='submit'>Buscar</button>
                </form>
            </div>
        </div>
    )
}

export default InputSearch;