import * as t from './actionTypes';

let initialState = {
	isDataLoading: false,
	isDataAvailable: false,
    recentItem1: {},
    recentItem2: {},
    recentItem3: {}
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

        case t.RECENT_TAB1_AVAILABLE:
        {
            const {data} = action;
            return {...state, recentItem1: data}
        }

        case t.RECENT_TAB2_AVAILABLE:
        {
            const {data} = action;
            return {...state, recentItem2: data}
        }

        case t.RECENT_TAB3_AVAILABLE:
        {
            const {data} = action;
            return {...state, recentItem3: data}
        }

        default:
            return state;
    }
};

export default homeReducer;