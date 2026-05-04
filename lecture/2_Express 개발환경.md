## 1. Express 개발환경

  
#### (1) Express 패키지 설치
```
1️⃣ 서버 폴더 생성
    예) mkdir node-server   (이름은 원하는 대로)

2️⃣ 폴더 초기화
    예) cd node-server
        npm init --yes

3️⃣ express 설치
    예) npm i express
        npm i nodemon -save-dev

4️⃣ package.json 확인
- type 을 module 로 수정
- scripts 에 "start" : "nodemon app" 추가

{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module",
  "dependencies": {
    "express": "^5.2.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.14"
  }
}

```