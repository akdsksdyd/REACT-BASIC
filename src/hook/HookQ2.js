import { useRef, useState } from "react";


const HookQ2 = () => {

    /* 
    실습
    1. state는 {todo: '', list: []} 로 관리
    2. 할 일 목록을 작성하고 클릭시, list에 인풋에 입력값을 추가하고
    map을 통해서 화면을 그린다.
    3. 등록된 이후 ref를 활용해서 input태그에 포커싱.
    */

    const [data, setData] = useState({todo: '', list: []});
    const todoRef = useRef('');

    const handleChange = (e) => {
        setData({...data, ["todo"]: e.target.value});
    }
    
    const handleClick = () => {
        setData({...data, ["todo"]: '', ["list"]: data.list.concat(data.todo)});
        todoRef.current.focus();
    }
    const newArr = data.list.map((item,index) => <li key={index}>{index+1}. {item}</li>);

    const handleKey = (e) => {
        if(e.keyCode === 13)handleClick();
    }

    return(
        <>
            <h3>ref로 할 일 목록 만들기</h3>
            <input type="text" name="todo" placeholder="할일목록" onChange={handleChange} ref={todoRef} value={data.todo} onKeyUp={handleKey}/>
            <button type="button" onClick={handleClick}>등록하기</button>
            <ul>
                {newArr}
            </ul>
        </>
    )

}

export default HookQ2;