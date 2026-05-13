import pool from '../db.js';

export const getHeader = async() => {
    const sql = `select header from portfolio;`;
    const [results] = await pool.execute(sql, []);
    return await results[0].header;
}