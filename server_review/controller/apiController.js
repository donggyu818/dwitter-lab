import * as repository from '../repository/apiRepository.js';

export const getFruits = (req, res, next) => {
    const fruits = repository.getFruits();
    // res.send('서버 실행 테스트');
    res.json({"fruits" : fruits});  // fruits 가 배열 타입이고 json 은 객체 타입이므로 {} 로 감싸서 넘김.
}

export const getProducts = (req, res, next) => {
    const products = repository.getProducts();      // 배열 / 객체가 아닌 일반 함수이기 때문에 괄호 붙음.
    res.json({"products" : products});
}

export const getProductDetail = (req, res, next) => { // 변화하는 값은 : 로 주면 됨. 이 경우 넘어오는 형태는 param = {'pid':'P0001'}
    // console.log(req.params.pid);
    res.json({"result": `${req.params.pid}의 상세정보`});
}

export const postFormData = (req, res, next) => {
    console.log('form data ===> ', req.body.formData);
    res.json({"result": true});
}