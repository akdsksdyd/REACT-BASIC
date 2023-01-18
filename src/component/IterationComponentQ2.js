import { useState } from "react";


const IterationComponentQ2 = () => {

    //1. select태그는 컴포넌트 반복으로 option태그 생성
    //2. data는 state로 관리하고 화면에 li태그로 반복
    //3. 셀렉트박스가 체인지되면, 이벤트 객체를 활용해 선택된 값만 필터링해서 보여주기
    //4. 숙제 : 검색 기능 만들기
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];
    
    const data = [
        {id: 1, type: 'Java', teacher: '이순신'},
        {id: 2, type: 'Java', teacher: '홍길자'},
        {id: 3, type: 'Javascript', teacher: '홍길동'},
        {id: 4, type: 'Oracle', teacher: '이순신'},
        {id: 5, type: 'Mysql', teacher: '이순신'},
        {id: 6, type: 'CSS', teacher: '박찬호'},
        {id: 7, type: 'HTML', teacher: 'coding404'},
    ];
    
    const createOption = select.map((item, index) => <option key={index}>{item}</option>);

    const [list, setList] = useState(data);
    const createLi = list.map(item => <li key={item.id}>{item.type}-{item.teacher}</li>);

    const handleChange = (e) => {
        let newList = data.filter(item => item.type === e.target.value);
        setList(newList);
    }

    const handleKey = (e) => {
        if(e.keyCode === 13)handleClick();
    }

    const [search, setSearch] = useState('');
    const searchInfo = (e) => {
        setSearch(e.target.value);
    }
    
    const handleClick = () => {
        let filterList = 
        data.filter(item => item.type.toLowerCase().includes(search) || item.teacher.toLowerCase().includes(search));
        setList(filterList);
    }

    return(
        <>
            <h3>컴포넌트 반복 실습-대소문자를 구분하지 않고 teacher, type에
                포함된 데이터만 필터링
            </h3>

            Search<input type="text" onChange={searchInfo} onKeyUp={handleKey} value={search}/>
            <button type="button" onClick={handleClick}>검색</button>
            <br/>
            과목찾기<select onChange={handleChange}>
                {createOption}
            </select>

            <ul>
                {createLi}
            </ul>
        </>
    )

}

export default IterationComponentQ2;