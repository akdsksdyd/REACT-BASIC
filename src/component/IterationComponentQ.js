import { useState } from "react";


/* 
이미지를 가져오는 방법
1. 외부 서버에서 경로를 참조받는방법(가장 일반적인 방법)
2. src폴더 밑에 img파일 참조가능(선호하진않음)
3. public폴더 밑에 넣는 경우 이미지를 바로 참조 가능
*/


// import img2 from '../img/img2.png'; 2번방법
const IterationComponentQ = () => {

    const arr = [
        {src : '/img/img1.png', title : '아이폰10', price: 1000},
        {src : '/img/img2.png', title : '아이폰11', price: 2000},
        {src : '/img/img3.png', title : '아이폰12', price: 3000},
        {src : '/img/img4.png', title : '아이폰13', price: 4000},
    ]

    const newArr = arr.map(item => 
        <div key={item.src}>
            <img src={item.src} alt={item.title} width="100" onClick={() => clickImg(item.src)}/>
            <p>상품: {item.title}</p>
            <p>가격: {item.price}</p>
        </div>
    );
    
    const [content, setContent] = useState({src: '/img/img1.png'});
    const clickImg = (a) => {
        setContent({src: a});
    }

    return(
        <>
            <h3>이미지 데이터 반복하기</h3>
            {/* <img src="https://raw.githubusercontent.com/yopy0817/data_example/master/img/img1.png" alt="제목" width="100"/> */}
            {/* <img src={img2} alt="제목" width="100"/> 2번방법*/}
            {/* <img src={'img/img1.png'} alt="제목" width="100"/> */}

            {/* 반복 할 요소의 모형 */}

            <div>
                <img src={content.src}/>
            </div>

            <div style={{display: "flex", justifyContent: "space-around"}}>
                {newArr}
            </div>
        </>
    )

}

export default IterationComponentQ;