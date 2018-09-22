import * as t from './actionTypes';

let initialState = {
	data_loading: false,
	data_available: false
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.DATA_LOADING:
        {
        	return {...state, data_loading: true}
        }

        case t.DATA_AVAILABLE:
    	{
        	return {...state, data_loading: false, data_available: true}
    	}

        default:
            return state;
    }
};

export default homeReducer;