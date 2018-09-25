import { SQLite } from 'expo';
import * as c from './constants'

export const database = SQLite.openDatabase(c.APP_DATABASE_LOCAL_NAME);