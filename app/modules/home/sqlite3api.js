import Expo , { SQLite, FileSystem, Asset } from 'expo';
import moment from 'moment';
import { AsyncStorage } from "react-native"
import * as c from "../../config/constants";

export async function checkDatabase(callback)
{	
	const db = SQLite.openDatabase(c.USER_DATABASE_LOCAL_NAME);
		db.transaction(tx => tx.executeSql(`CREATE TABLE 'History' (
				'id'	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
				'SheetName'	TEXT NOT NULL,
				'TitleName' TEXT NOT NULL,
				'TotalScore'	INTEGER NOT NULL,
				'UserScore'	INTEGER NOT NULL,
				'Date'	TEXT NOT NULL
			)`));
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
				db.transaction(tx => tx.executeSql('',
					[],
					null,
					(_,error)=>{downloadDatabase(callback);}));
	    		
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

export function getSheetBySheetName(sheetname, callback)
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
			tx.executeSql("select * from History order by Date DESC limit 20",
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

export function getRecents(callback)
{
	database = SQLite.openDatabase(c.USER_DATABASE_LOCAL_NAME);
	database.transaction(
		tx => {
			tx.executeSql("select DISTINCT SheetName from History order by Date DESC limit 3",
				[],
				(_,{rows}) => {
					if (!(typeof rows._array[0] === 'undefined')) callback(true,0,rows._array[0],null);
					if (!(typeof rows._array[1] === 'undefined'))  callback(true,1,rows._array[1],null);
					if (!(typeof rows._array[2] === 'undefined'))  callback(true,2,rows._array[2],null);
				},
				(_,error)=>{
					callback(false,null,error);
				}),
			null,
			null
			}
		);
}

export function saveResult(sheet,score,callback)
{
	database = SQLite.openDatabase(c.USER_DATABASE_LOCAL_NAME);
	database.transaction(
		tx => {
        	tx.executeSql('insert into History (SheetName, TitleName, TotalScore, UserScore, Date) values (?, ?, ?, ?, ?)', 
        		[sheet.tablename,sheet.title,score.totalscore,score.userscore,moment().format('x')],
				(_,{rows})=>{
					callback(true,null);
				},
				(_,error)=>{
					callback(false,error);
				}),
			null,
			null
			}
		);
}