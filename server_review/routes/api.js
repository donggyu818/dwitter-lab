import express from 'express';
// import { getFruits, getProducts, getProductDetail, postFormData } from '../controller/apiController.js';
import * as controller from '../controller/apiController.js';   // 너무 길어지면 이렇게 한 번에 가져올 수 있음.

const router = express.Router();    // 함수 X. 첫 글자 대문자이므로 클래스. 클래스는 생성자 함수를 지정해야 함. 그거임.

// 실제 호출 주소 '/api/get'
router.get("/get", controller.getFruits);      // 함수 형태지만 괄호를 안 줌. 값을 가져오기 위함이 아니라 함수 자체를 넘길 거라서.
router.get("/products", controller.getProducts);
router.get("/products/:pid", controller.getProductDetail);
router.post("/post", controller.postFormData);

export default router; // 함수가 아니므로 export default function () ... 로 사용 못함. 아래에서 export 언급해줌.