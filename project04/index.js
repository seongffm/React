import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

// =======================[STEP 1. state 관리]======================

// 1) useState 개념
// import App from './example/Ex01'

// 2) useState 실습 : 좋아요
// import App from './example/Ex02'

// 3) useState 실습 : 랜덤게임
// import App from './example/Ex03'

// 4) useState 실습 : 주사위
// import App from './example/Ex04';
// import App from './example/Ex04_teacher'
// import App from './example/Ex04_useEffect'

// 5) useEffect 기초
// import App from './example/Ex05';

// 6) Input 태그 다루기
// import App from './example/Ex06';
// import App from './example/Ex06_todolist';
// import App from './example/Ex06_todolist_useRef';
// import App from './example/Ex06_todolist_map';

// 7) Map, filter 다루기
// import App from './example/Ex07';

// 8) Todo List
// import App from './example/Ex08';
// import App from './example/Ex08_e';
// import App from './example/Ex08_teacher';

// ========================[STEP 2. 데이터 관리=======================

// 9) 양방향 데이터 전달
// import App from './example/Ex09'

// 10) Context 사용해 보기
// import App from './example/Ex10'
// import App from './example/Ex10_useContext'
// import App from './example/Ex10_div'
// import App from './example/Ex10_teacher'

// 11) Context 사용법
// import App from './example/Ex11'

// 12) useEffect로 open API 데이터 관리
// import App from './example/Ex12'

// 13) useEffect를 활용해서 날씨 데이터를 출력해보자.
// import App from './example/Ex13'
import App from './example/Ex13_teacher'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
