import {
    climaCity,
    deleteClimaCity,
} from './actions';

const initialState = {
    clima: null,
    climasCities: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case climaCity: return {
            ...state,
            clima: action.payload,
            climasCities: [action.payload, ...state.climasCities]
        }

        case deleteClimaCity: return {
            ...state,
            climasCities: state.climasCities.filter((e, i) => action.index !== i || e.id !== action.payload)
        }
        
        default: return state;
    }
}

export default reducer