import * as api from "./sqlite3api"
import * as t from './actionTypes';

export function checkDatabase()
{
	return (dispatch) => {
		dispatch({type: t.DATA_LOADING});
		api.checkDatabase(function(success)
			{
				if (success) dispatch({type: t.DATA_AVAILABLE})
			});
	};
}

export function getChecklists(category,errorCB)
{
	return (dispatch) => {
		api.getChecklists(category, function(success,data,error)
		{
			if (success) dispatch({type: t.CHECKLISTS_AVAILABLE, data: data});
			if (error) errorCB(error);
		})
	}
}