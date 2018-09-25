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

export function getChecklists(category,successCB,errorCB)
{
	api.getChecklists(category, function(success,data,error)
		{
			if (success) 
				{
					successCB(data);
				}
			if (error) errorCB(error);
		})
}

export function getChecklist(sheetname,successCB,errorCB)
{
	api.getChecklist(sheetname, function(success,data,error)
	{
		if (success) 
			{
				successCB(data);
			}
		if (error) errorCB(error);
	})
}

export function getNextSheet(sheetname,successCB,errorCB)
{
	api.getNextSheet(sheetname, function(success,data,error)
	{
		if (success) 
			{
				successCB(data);
			}
		if (error) errorCB(error);
	})
}

export function getHistory(successCB,errorCB)
{
	api.getHistory(function(success,data,error)
	{
		if (success) 
			{
				successCB(data);
			}
		else if (error) errorCB(error);
	})
}

export function saveResult(sheet,score,errorCB)
{
	api.saveResult(sheet,score,function(error){
		if (error) errorCB(error);
	})
}
