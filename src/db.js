import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: 'sql3.freesqldatabase.com',
    user: 'sql3722180',
    password: 'ppvWY22daI',
    port: 3306,
    database: 'sql3722180'
})