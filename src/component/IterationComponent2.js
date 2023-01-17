import { useState } from "react";


const IterationComponent2 = () => {

    //1.반복 할 데이터 (state로 관리)\
    const arr = [
        {id: 1, topic: 'hello'},
        {id: 2, topic: 'bye'},
        {id: 3, topic: 'see you'}
    ]

    const [list, setList] = useState(arr);

    //2. map함수를 이용해서 li태그로 생성
    //함수를 전달하는 것이 아닌 호출.
    const newList = list.map(item => 
        <li key={item.id} onDoubleClick={() => handleRemove(item.id) }>
            {item.topic}
        </li>)

    //3. 인풋데이터 관리
    const [data, setData] = useState('');
    const handleChange = e => {
        setData(e.target.value);
    }
    
    //4. 추가하기 버튼 클릭 시 input의 값을 list의 마지막에 추가
    const handleClick = e => {
        let obj = {id: list[list.length-1].id +1, topic: data}
        // list.push(obj); //state를 직접 변경하면 x
        let newArr = list.concat(obj); //원본 리스트를 수정하는 것이 아닌
        //list에 obj가 합쳐진 새로운 배열을 반환
        setList(newArr); //state 변경
        setData(''); //input값 초기화
    }

    //5. 삭제기능
    /* 
    arrowFunction은 익명함수를 대체하기 때문에 호이스팅이 되지 않는다.
    따라서 밑의 구문은 밖에따로 만들어주거나 해서 사용해야하는데,
    삭제를 할 때, id값을 삭제 해야하기 때문에 위에서 함수를 전달해서 실행하는 것이 아니라
    밑에 만들어둔 함수를 호출하는 방식으로 사용한다.
    이벤트 안에서 함수를 호출로 연결하는 방법
    onClick={ () => 함수호출 }
    */
    const handleRemove = (a) => { 
        // console.log(a); //키
        //filter - 콜백의 리턴이 true인 값을 가지고 새로운 배열생성
        const newList = list.filter(item => item.id !== a);
        setList(newList);
    }

    return(
        <>
            <h3>목록 추가하기</h3>
            <input type="text" onChange={handleChange} value={data}/>
            <button type="button" onClick={handleClick}>추가하기</button>
            <ul>
                {newList}
            </ul>
        </>
    )

}

export default IterationComponent2;