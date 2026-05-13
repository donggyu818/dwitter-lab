import express from 'express';
import cors from 'cors';
import header from './routes/header.js';
import content from './routes/content.js';
import footer from './routes/footer.js';

const PORT = 9000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app 라우팅 추가
app.use('/header', header);
app.use('/content', content);
app.use('/footer', footer);

app.listen(PORT, () => {
    console.log(`Server Start ====> ${PORT}`);
})