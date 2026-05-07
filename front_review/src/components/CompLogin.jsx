import React, {useState, useRef} from 'react';
import { postFetchData } from '../util/fetchDatas.js';

export default function CompLogin() {
    const idRef = useRef(null);
    const passwordRef = useRef(null);
    const initForm = {id:'', password:''}
    const [form, setForm] = useState(initForm);

    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});                      
    }
    console.log(form);
    
    const handleFormSubmit = async(e) => {
            e.preventDefault();
    
            if(idRef.current.value === '') {
                alert('아이디를 입력해주세요');
                idRef.current.focus();
            } else if(passwordRef.current.value === '') {
                alert('비밀번호를 입력해주세요');
                passwordRef.current.focus();
            } else {
                console.log('서버전송 --->', form);
                const jsonData = await postFetchData('/users/login', form);
                jsonData.result ? alert("로그인 성공!!") : alert('아이디 혹은 비밀번호가 다릅니다');
            }
        }

    return (
        <div style={{width:"1000px", margin:"auto"}}>
            <h1>Post :: 로그인 폼</h1>
            <form onSubmit={handleFormSubmit}>
                <ul>
                    <li>
                        <label htmlFor="id">아이디</label>
                        <input type="text" name="id" id="id" ref={idRef} value={form.id} onChange={handleFormChange} />
                    </li>
                    <li>
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" name="password" id="password" ref={passwordRef} value={form.password} onChange={handleFormChange} />
                    </li>
                    <li>
                        <button type='submit'>로그인</button>
                        <button type='button' onClick={() => {setForm(initForm)}}>다시쓰기</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

