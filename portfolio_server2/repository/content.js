import pool from '../db.js';

export const getHome = async() => {
    const sql = `select home from portfolio;`;
    const [results] = await pool.execute(sql, []);
    return await results[0].home;
}
export const getAbout = async() => {
    const sql = `select about from portfolio;`;
    const [results] = await pool.execute(sql, []);
    return await results[0].about;
}
export const getSkills = async() => {
    const sql = `select skills from portfolio;`;
    const [results] = await pool.execute(sql, []);
    return await results[0].skills;
}
export const getTestimonials = async() => {
    const sql = `select testimonials from portfolio;`;
    const [results] = await pool.execute(sql, []);
    return await results[0].testimonials;
}
export const getWork = async() => {
    const sql = `select work from portfolio;`;
    const [results] = await pool.execute(sql, []);
    return await results[0].work;
}
export const getProject = async(pid) => {
    const sql = `select work from portfolio;`;
    const [results] = await pool.execute(sql, []);
    const projects = await results[0].work.projects;
    return projects.find((project) => 
        project.pid === pid);      // map 과 filter 도 가능은 하지만 이 둘은 배열로 만들어지기 때문에 이후 작업이 추가로 들어감.
}