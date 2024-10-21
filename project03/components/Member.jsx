// rafce + enter
import React from 'react'

/*
우리는 기존에 props라는 객체를 받아와서, props 안에 있는 속성 값을 꺼내서 사용을 했는데
    => props <- 앞에 붙어서 반복되는게 귀찮음
    => 비구조화할당!!
    => 객체 안에 있는 값을 추출해서 변수로 바로 선언해줄 수 있는 개념

    props라는 객체 대신, 안에 있는 속성을 꺼내서 사용
    기존 : (props)
        props.name <- 호출
    바뀐 문법 : ({name, team})
        name <- 호출
*/

const Member = ({name, team}) => {
  return (
    <div>
        <table border="1" align='center' width='400px' bordercolor='gold' bgcolor='yellow'>
            <h3>{team}</h3>
            <p>{name}</p>
        </table>
    </div>
  )
}

export default Member;


// props로 팀 작성하기
// import React from 'react'

// const Member = (props) => {
//   return (
//     <div>
//         <table border="1" align='center' width='400px' bgcolor='pink'>
//             <h3>{props.team}</h3>
//             <p>{props.name}</p>
//         </table>
//     </div>
//   )
// }

// export default Member;

// 팀 이름 작성하기
// function Member() {
//     return (
//         <div>
//             <h3>팀명 : 수빈팀</h3>
//             <p>이름 : 모현정</p>
//             <br></br>
//         </div>
//     );
// }

// export default Member;