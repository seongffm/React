import logo from './logo.svg';
import './App.css';

// JSX 문법 : Javascript와 html을 구분없이 한번에 사용할 수 있는 문법
// 규칙1 : 사용자 정의 태그(컴포넌트)에서 출력하고자 하는 내용은 반드시 하위 태그로 묶여있어야 한다!!
// 규칙2 : 표현식 {}를 이용해서 Javascript에 있는 데이터를 출력(사용) 할 수 있다!
//  --> if, for 사용할 수 없다!!
// 규칙3 : JSX에서는 class라는 키워드 대신 className 이라는 키워드를 사용한다!!
// 규칙4 : JSX에서는 반드시 여는 태그와 닫는 태그가 존재한다
// <input>, <br>, <hr> 경우 닫는 태그도 포함해줘야 한다

function App() {

  // let name = '현정';

  // let myStyle = {
  //   backgroundColor : 'blac',
  //   color: 'red'
  // };

  let name2 = prompt("이름을 말해주세요!");

  let date = new Date();
  
  // 연
  let year = date.getFullYear();
  // 월
  let month = date.getMonth() + 1;
  // 일
  let day = date.getDate();

  let season = "";

  if (month == '3' || month == '4' || month == '5') {
    season = '봄';
  } else if (month == '6' || month == '7' || month == '8') {
    season = '여름';
  } else if (month == '9' || month == '10' || month == '11') {
    season = '가을';
  } else {
    season = '겨울';
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       {/* Edit <code>src/App.js</code> and save to reload. */}
    //       즐거운 REACT
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // // 출력하고자 하는 태그들이 무조건 하나로 묶여야 함!
    // <h1>
    //   <div>
    //     {/* 
    //       name에 있는 값이 '현정'이라면 '현정 React 첫시작'
    //       '현정'이 아니라면 '오늘은 칼퇴!!' 출력
    //      */}
    //     { name == '현정' ?
    //       <h1 className='myName'>{name} React 첫 시작</h1>
    //       :
    //       <h1>오늘은 칼퇴</h1>
    //     }
    //     {/*
    //     JSX에서 태그에 바로 스타일을 적용 시켜줄 때는 Javascript 객체 형식으로 적용해줘야 한다
    //     */}
    //     {/* <h1 className='myName'>{name} React 첫 시작</h1> */}
    //     {/* <h1 style={{backgroundColor:'black', color: 'red'}}>React 세번째 시작</h1> */}
    //     <h1 style={myStyle}>React 세번째 시작</h1>
    //     <input></input>
    //   </div>
    //   <div>
    //     <h1>React 첫 시작</h1>
    //     <h1>React 두번째 시작</h1>
    //   </div>
    // </h1>

    <div>
      <h1>JSX DATE 실습</h1>
      <h1>{year}.{month}.{day}</h1>
      <hr></hr>
      <p>{name2}님 지금은 {season}입니다. 좋은 하루 보내세요!</p>
    </div>
  );
}

export default App;