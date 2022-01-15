import {
    climaCity,
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
        
        default: return state;
    }
}

export default reducer