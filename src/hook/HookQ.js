import { useEffect, useRef, useState } from "react";


const HookQ = () => {

    /* 
    1. 컴포넌트가 마운트 된 이후 한번만 id태그에 포커스를 준다.

    2. id, pw는 state로 관리
    로그인 버튼 클릭 시 공백이라면 공백인 태그에 포커스
    로그인 버튼 클릭 시 공백이 아니라면 경고창으로 id와 pw를 출력
    */

    const idTag = useRef();
    const pwTag = useRef();

    useEffect(() => {
        idTag.current.focus();
    }, []);

    const [data, setData] = useState({id: '', pw: ''});

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleCilck = () => {
        if(data.id === ''){
            idTag.current.focus();
        }else if(data.pw === ''){
            pwTag.current.focus();
        }else alert(`id: ${data.id}  pw: ${data.pw}`);
    }

    return(
        <>
            <h3>훅 실습</h3>
            <input type="text" name="id" placeholder="아이디" 
            ref={idTag} onChange={handleChange} value={data.id}/>
            
            <input type="password" name="pw" placeholder="비밀번호" 
            ref={pwTag} onChange={handleChange} value={data.pw}/>
            
            <button type="button" onClick={handleCilck}>로그인</button>
        </>
    )

}

export default HookQ;