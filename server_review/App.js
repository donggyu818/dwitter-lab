// 1. express 라이브러리, 미들웨어 임포트
import express from 'express';
import cors from 'cors';
// const express = require('express');      -- type = commonjs 일 때

// 2. express 객체 생성
const PORT = 9000;
const app = express();

// 3. 미들웨어 추가
app.use(express.json());    // body 로 넘어온 JSON 문자열을 파싱
app.use(express.urlencoded({extended : false}));
app.use(cors());

// 4. 라우팅
app.get("/api/get", (req, res, next) => {
    const fruits = [
        { "name" : "apple", "color" : "red", "emoji" : "🍎" },
        { "name" : "banana", "color" : "yellow", "emoji" : "🍌" },
        { "name" : "lemon", "color" : "yellow", "emoji" : "🍋" }
    ]
    // res.send('서버 실행 테스트');
    res.json({"fruits" : fruits});  // fruits 가 배열 타입이고 json 은 객체 타입이므로 {} 로 감싸서 넘김.
});

app.get("/api/products", (req, res, next) => {
    const products = [
        {
            "pid": "P0001",
            "name": "갸또 쇼콜라",
            "price": 43000,
            "img": "/images/product1.jpg"
        },
        {
            "pid": "P0002",
            "name": "쉭쎄",
            "price": 20000,
            "img": "/images/product2.jpg"
        },
        {
            "pid": "P0003",
            "name": "초코 구운과자 묶음",
            "price": 13000,
            "img": "/images/product3.jpg"
        },
        {
            "pid": "P0004",
            "name": "통팥앙금빵",
            "price": 2500,
            "img": "/images/product4.jpg"
        },
        {
            "pid": "P0005",
            "name": "브라우니",
            "price": 20800,
            "img": "/images/product5.jpg"
        }
    ]
    res.json({"products" : products});
});
app.get("/api/products/:pid", (req, res, next) => { // 변화하는 값은 : 로 주면 됨. 이 경우 넘어오는 형태는 param = {'pid':'P0001'}
    // console.log(req.params.pid);
    res.json({"result": `${req.params.pid}의 상세정보`});
});

app.post("/api/post", (req, res, next) => {
    console.log('form data ===> ', req.body.formData);
    res.json({"result": true});
});

// 5. 서버 시작
app.listen(PORT, () => {
    console.log(`서버 실행 ===> ${PORT}`);
});