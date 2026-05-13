import db from '../db/connection.js';

export const getHeader = async() => {
    const sql = `select header from portfolio`;
    const [results, fields] = await db.execute(sql, []);
    return await results[0].header;     // 여기도 await 붙음.
}