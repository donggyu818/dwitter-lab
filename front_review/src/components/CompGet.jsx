import React, {useState, useEffect} from 'react';
import { getFetchData } from '../util/fetchDatas.js';

export default function CompGet() {
    const [list, setList] = useState([]);
    useEffect(() => {   // useEffect 는 async 를 못 붙임.
        const fetchData = async() => {
            const jsonData = await getFetchData(`/api/get`);
            setList(jsonData.fruits);
        }
        fetchData();    // 화살표 함수는 호이스팅이 안 되어서 밑에서 출력
    }, []);

    console.log('list ===> ', list);

    return (
        <div style={{width:"1000px", margin:"auto"}}>
            <h1>GET :: Fruits List</h1>
            <table border="1" style={{width: "70%"}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Emoji</th>
                    </tr>
                </thead>
                <tbody>
                    { list?.map( (fruit, idx) => 
                        <tr key={idx} style={{textAlign:"center"}}>
                            <td>{fruit.name}</td>
                            <td>{fruit.color}</td>
                            <td>{fruit.emoji}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

