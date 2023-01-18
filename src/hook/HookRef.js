import { useRef, useState } from "react";


const HookRef = () => {
    
    //사용자 입력값 data, 화면에 출력값 result
    const [form, setForm] = useState({data: '', result: ''});
    
    const handleChange = (e) => {
        setForm({...form, data: e.target.value});
    }

    const handleClick = () => {
        setForm({data: '', result: form.data});

        //Ref의 사용
        // console.log(inputTag.current);
        // console.log(inputTag.current.value);
        inputTag.current.focus();

    }
    
    //특정 태그에 이름달기 useRef()
    //반환 된 이름을 사용 할 태그에 ref속성을 넣는다.
    const inputTag = useRef();
    
    return(
        <>
            내용: <input type="text" onChange={handleChange} value={form.data} ref={inputTag}/>
            <button type="button" onClick={handleClick}>등록하기</button>
            <br/>
            결과: {form.result}
        </>
    )

}

export default HookRef;