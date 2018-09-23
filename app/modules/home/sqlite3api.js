import Expo , { SQLite, FileSystem, Asset } from 'expo';
import { database } from "../../config/sqlite3";
import * as c from "../../config/constants";

export function checkDatabase(callback)
{
	database.transaction(
      	tx => {
	        tx.executeSql('select Version from INFO', 
	        	[], 
	        	(_, { rows }) =>{
	          		let versiondata = rows._array[0];
	          		if (versiondata.Version !== c.APP_DATA_VERSION) 
	          			{
	        				console.log("wrong version download");
	          				downloadDatabase(callback);
	          			} else callback(true);
	          		},
	        	(_,error) => {
	        		console.log("no database download");
	        		downloadDatabase(callback);
	        		});
		    },
		    null,
		    null
    );
}

export function downloadDatabase(callback)
{
	FileSystem.downloadAsync(
	  Asset.fromModule(require('../../assets/data/pnt2data.db')).uri,
	  FileSystem.documentDirectory + 'SQLite/' + c.APP_DATABASE_LOCAL_NAME
	)
	  .then(({ uri }) => {
	    console.log('Finished downloading to ', uri);
	    callback(true);
	  })
	  .catch(error => {
	    console.error(error);
	  });
}

export function getChecklists(category, callback)
{
	database.transaction(
		tx => {
			tx.executeSql("select * from LISTTABLE where category = '" + category + "'",
				[],
				(_,{rows}) => {
					callback(true,rows._array,null);
				},
				(_,error)=>{
					callback(false,null,error);
				}),
			null,
			null
			}
		);
}

export function getChecklist(sheetname, callback)
{
	database.transaction(
		tx => {
			tx.executeSql("select * from " + sheetname,
				[],
				(_,{rows}) => {
					callback(true,rows._array,null);
				},
				(_,error)=>{
					callback(false,null,error);
				}),
			null,
			null
			}
		);
}