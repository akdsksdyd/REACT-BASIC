import { useEffect, useReducer } from "react";
import { myReducer } from './HookReducerComponent';

//리듀서 선언(현재의 state, 업데이트에 필요한 정보)
/*
const myReducer = (state, action) => {

    //action은 객체
    // console.log(state);
    // console.log(action);
    if(action.type === 'increase'){
        state = {value: state.value + 1};
    }else if(action.type === 'decrease'){
        state = {value: state.value - 1};
    }else if(action.type === 'reset'){
        state = {value: 0};
    }
    return state;
}
*/

const HookReducer = () => {

    const[state, func] = useReducer(myReducer, {value: 0});
    /*
    useEffect(() => {
        func({type: 'reset'});
    }, [])
    console.log(state);
    */

    const up = () => {
        func({type: 'increase'});
    }

    return(
        <>
            <button onClick={up}>증가</button>
            <button onClick={() => func({type: 'decrease'})}>감소</button>
            <button onClick={() => func({type: 'reset'})}>초기화</button>
            결과 {state.value}
        </>
    )

}

export default HookReducer;