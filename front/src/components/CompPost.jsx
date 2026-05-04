import React, {useState, useEffect, useRef} from 'react';

export default function CompPost() {
    const [data, setData] = useState('');
    const nameRef = useRef(null);           // 서버 전송 데이터
    const [name, setName] = useState({});   // 폼 입력 데이터
    const handlePost = async() => {
        const url = 'http://localhost:9000/api/post';
            const response = await fetch(url, {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(name)      // post 로 받으려면 body 추가 가능하고 이때 json 을 문자로 바꿔서 보냄.
            });    // 비동기 함수
            const jsonData = await response.json();
            setData(jsonData.result);
    }
    const handleChange = () => {
        setName({"name": nameRef.current.value});
    }
    


    /*
    useEffect( () => {
        const fetchData = async() => {
            const url = 'http://localhost:9000/api/post';
            const response = await fetch(url, {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({"name" : "홍길동"})      // post 로 받으려면 body 추가 가능하고 이때 json 을 문자로 바꿔서 보냄.
            });    // 비동기 함수
            const jsonData = await response.json();
            setData(jsonData.result);
        }
        fetchData();
    }, []);
    */

    return (
        <div>
            <input type="text" name='name' value={name.name} ref={nameRef} onChange={handleChange} ></input>
            <button onClick={handlePost}>전송</button>
            <h2>Post 방식으로 전송된 결과 : {data}</h2>
        </div>
    );
}

