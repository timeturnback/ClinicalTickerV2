import Expo , { SQLite, FileSystem, Asset } from 'expo';
import { AsyncStorage } from "react-native"
import * as c from "../../config/constants";

export async function checkDatabase(callback)
{	
	try {
	    const value = await AsyncStorage.getItem('DATA_VERSION');
	    if (value !== null) {
	      if (value != c.APP_DATA_VERSION)
	      {
	      	console.log('wrong version download');
	      	downloadDatabase(callback);
	      } else 
	      {
	      	callback(true);
	      }
	    }
	    else 
	    	{
	      		console.log('first time download');
				try {
				    await AsyncStorage.setItem('DATA_VERSION',c.APP_DATA_VERSION.toString());
				} catch (error) {
				 	alert(error.message);
				}
				const db = SQLite.openDatabase('dummie.db');
				db.transaction(tx => tx.executeSql('',
					[],
					(_,{rows})=>{console.log('success');},
					(_,error)=>{downloadDatabase(callback);}
					));
	    		
	    	}
	   } catch (error) {
			alert(error.message);
	   }
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
	database = SQLite.openDatabase(c.APP_DATABASE_LOCAL_NAME);
	database.transaction(
		tx => {
			tx.executeSql("select * from LISTTABLE where category like '%" + category + "%'",
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
	database = SQLite.openDatabase(c.APP_DATABASE_LOCAL_NAME);
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

export function getNextSheet(sheetname, callback)
{
	database = SQLite.openDatabase(c.APP_DATABASE_LOCAL_NAME);
	database.transaction(
		tx => {
			tx.executeSql("select * from LISTTABLE where tablename = '" + sheetname + "'",
				[],
				(_,{rows}) => {
					callback(true,rows._array[0],null);
				},
				(_,error)=>{
					callback(false,null,error);
				}),
			null,
			null
			}
		);
}



export function getHistory(callback)
{
	database = SQLite.openDatabase(c.USER_DATABASE_LOCAL_NAME);
	database.transaction(
		tx => {
			tx.executeSql("select * from History limit 20",
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