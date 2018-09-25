import * as t from './actionTypes';

let initialState = {
	isDataLoading: false,
	isDataAvailable: false,
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.DATA_LOADING:
        {
        	return {...state, isDataLoading: true}
        }

        case t.DATA_AVAILABLE:
    	{
        	return {...state, isDataLoading: false, isDataAvailable: true}
    	}

        default:
            return state;
    }
};

export default homeReducer;