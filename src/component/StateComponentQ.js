import { useState } from "react";


const StateComponentQ = () => {

    // ++, -- 로 state를 직접 수정하면 x
    const [count, setCount] = useState(0);
    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <>
            <h2>실습</h2>
            <h2>카운트: {count}</h2>

            <button onClick={increase}>증가</button>
            <button onClick={decrease}>감소</button>
            <button onClick={reset}>초기화</button>
        </>
    )

}

export default StateComponentQ;