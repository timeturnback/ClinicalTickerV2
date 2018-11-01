import * as api from "./sqlite3api"
import * as t from './actionTypes';

export function checkDatabase(errorCB)
{
	return (dispatch) => {
		dispatch({type: t.DATA_LOADING});
		api.checkDatabase(function(success)
			{
				if (success) 
					{
						dispatch({type: t.DATA_AVAILABLE});
					}
				else if (error) errorCB(error);
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

export function getSheetBySheetName(sheetname,successCB,errorCB)
{
	api.getSheetBySheetName(sheetname, function(success,data,error)
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

export function saveResult(sheet,score,successCB,errorCB)
{
	api.saveResult(sheet,score,function(success,error){
		if (success) successCB()
		else if (error) errorCB(error);
	})
}

export function getRecents(errorCB)
{
	return (dispatch) =>{
		api.getRecents(function(success,index,data,error)
		{
			if (success) 
				{	
					if (index == 0) getSheetBySheetName(data.SheetName,
						(data2)=>
						dispatch({type: t.RECENT_TAB1_AVAILABLE, data: data2}),
						errorCB);
					if (index == 1) getSheetBySheetName(data.SheetName,
						(data2)=>
						dispatch({type: t.RECENT_TAB2_AVAILABLE, data: data2}),
						errorCB);
					if (index == 2) getSheetBySheetName(data.SheetName,
						(data2)=>
						dispatch({type: t.RECENT_TAB3_AVAILABLE, data: data2}),
						errorCB);
				}
			else if (error) errorCB(error);
		})
	}
}

export function searchRecord(searchstring,successCB,errorCB)
{
	api.searchRecord(searchstring,function(success,data,error)
	{
		if (success) 
			{
				successCB(data);
			}
		else if (error) errorCB(error);
	})
}
