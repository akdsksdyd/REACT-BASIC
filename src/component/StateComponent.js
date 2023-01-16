import { useState } from "react";


const StateComponent = () => {

    /* 
    state란 컴포넌트에서 변화하는 값을 의미
    state가 변경되면 컴포넌트 리렌더링을 시킨다.
    함수형 컴포넌트에서는 useState()를 이용
    */

    //함수형 컴포넌트
    // let data = useState('초기값');
    // console.log(data);

    //1st
    // let [data, setData] = useState('초기값');
    // console.log(data);
    // let a = data[0];
    // let b = data[1];

    //2nd
    let [data, setData] = useState('초기값');
    // console.log(data); //state값
    // console.log(setData); //state setter함수

    let func = () => setData('변경');
    let enter = () => setData('입장');
    let exit = () => setData('퇴장');

    //state는 여러개 일 수 있다.
    let [color, setColor] = useState('black');
    let red = () => setColor('red')
    let blue = () => setColor('blue')
    let yellow = () => setColor('yellow')

    //onClick에다 함수 바로 해도 되고 밖에서 함수생성후 호출도 가능.
    return(
        <>
            <h3 style={{color: color}}>state값: {data}</h3>
            <button onClick={func}>값변경하기</button>

            <button onClick={enter}>입장</button>
            <button onClick={exit}>퇴장</button>
            <hr/>

            <button onClick={red}>붉은색</button>
            <button onClick={blue}>푸른색</button>
            <button onClick={yellow}>그 사이 3초 그 짧은 색</button>
        </>
    )

}

export default StateComponent;