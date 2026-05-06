import React, {useState, useEffect} from 'react';
import { getFetchData } from '../util/fetchDatas.js';

export default function CompGetParam() {
    const [list, setList] = useState([]);
    const [result, setResult] = useState('');
    useEffect( () => {
        const fetchData = async () => {
            // const url = "http://localhost:9000/api/products";
            // const response = await fetch(url, {method : "GET"});
            // const jsonData = await response.json();
            const jsonData = await getFetchData('/api/products');
            setList(jsonData.products);
        }
        fetchData();
    }, [] );

    const handleProductDetail = async(product) => {
        // const url = `http://localhost:9000/api/products/${product.pid}`;
        // const response = await fetch(url, {method : "GET"});
        // const jsonData = await response.json();
        const jsonData = await getFetchData(`/api/products/${product.pid}`);
        // console.log(jsonData.result);
        setResult(jsonData.result);
    };

    return (
        <div style={{width:"1000px", margin:"auto"}}>
            <h1>GET :: Product List - {result}</h1>
            <ul style={{display: 'flex', gap: "10px", listStyle: "none"}}>
                {list?.map( (item) => 
                    <li key={item.pid}>
                        <img src={item.img} style={{width: "150px"}} onClick={() => {handleProductDetail(item)}} /> {/* 값 넘기려면 콜백함수 필요 */}
                        <p>{item.name}</p>
                        <p>{item.price}원</p>
                    </li>
                )}
            </ul>
        </div>
    );
}

