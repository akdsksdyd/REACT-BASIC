import { useState } from "react";


const EventComponentQ2 = () => {

    // const [data, setData] = useState('');
    // const [result, setResult] = useState('');
    // const handleChange = (e) => {
    //     setData(e.target.value);
    // }

    // const addBtn = () => {
    //     setResult(data);
    //     setData('');
    // }

    const [form, setForm] = useState({data:'', result:''});
    const handleChange = (e) => {
        // const copy = {...form, [e.target.name] : e.target.value};
        //data는 사용자의 입력값으로, result는 유지
        setForm({data: e.target.value, result: form.result});
    }

    const handleClick = () => {
        //data='', result=data값
        setForm({data:'', result:form.data});
    }

    return(
        <>
            <h3>인풋데이터 핸들링(실습)</h3>
            <small>
                클릭 시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리
                <br/>
                힌트는? 아마도 state는 두개가 필요할듯?
            </small>
            <br/>
            
            <input type="text" name="wirte" onChange={handleChange} value={form.data}/>
            <button type="button" onClick={handleClick}>추가하기</button>

            <h3>결과</h3>
            {form.result}
        </>
    )

}

export default EventComponentQ2;