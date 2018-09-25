import * as t from './actionTypes';

let initialState = {
	isDataLoading: false,
	isDataAvailable: false,
	isChecklistsAvailable: false,
	checklists: [],
    currentchecklist: {},
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

        case t.CHECKLISTS_LOADING:
        {
            checklists = [];
            return {...state, isChecklistsAvailable: false, checklists: checklists}
        }

    	case t.CHECKLISTS_AVAILABLE:
    	{
            const { data } = action;
        	return {...state, isChecklistsAvailable: true, checklists: data}
    	}

        case t.CHECKLIST_AVAILABLE:
        {
            const { data } = action;
            return {...state, isChecklistAvailable: true, currentchecklist: data}
        }

        default:
            return state;
    }
};

export default homeReducer;