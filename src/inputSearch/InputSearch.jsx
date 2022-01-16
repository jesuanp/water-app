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
                <form onSubmit={handleSubmit} className={s.form} >
                    <input className={s.input} type="text" placeholder="Busca una ciudad" ref={refText} />
                    <button className={s.btn} type='submit'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default InputSearch;