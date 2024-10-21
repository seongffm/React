import React, {useState} from 'react'

let cScore = 0;
let uScore = 0;

const Ex04 = () => {

    // 일반 변수는 값이 바뀔 때 화면에 적용이 안된다!!!
    // let comDice = 1;

    // comDice = 10;
    // state 변수는 값이 바뀔 때 화면에 적용이 된다!!
    // state 함수가 실행이 된다 --> 재렌더링 된다(state 제외)
    const [comDice, setComDice] = useState(1);
    const [userDice, setUserDice] = useState(1);
    const [comScore, setComScore] = useState(0);
    const [userScore, setUserScore] = useState(0);
    // 승자 state
    const [win, setWin] = useState('');

  function stratCk() {
    // 이미지를 랜덤하게 바꿔줘야 한다!!
    // comDice = parseInt(Math.random()*6) + 1;
    let comRan = parseInt(Math.random()*6) + 1;
    setComDice(comRan);
    // console.log(comDice);
    let userRan = parseInt(Math.random()*6) + 1;
    setUserDice(userRan);

    if (userRan > comRan) {
        setUserScore(userScore + 1);
        uScore++;
    } else if (comRan > userRan) {
        setComScore(comScore + 1);
        cScore++
    }

    if (uScore == 10) {
        setWin('사용자');
    } else if (cScore == 10) {
        setWin('컴퓨터')
    }
  }


  return (
    <div>
      <h1>DICE GAME</h1>
      <button onClick={stratCk}>Start</button>

      <div className="dice">
        <img src={'./img/dice' + comDice + '.png'}></img>
        <h1>Com Score : {comScore}</h1>
      </div>
      <div className="dice">
        <img src={'./img/dice' + userDice + '.png'}></img>
        <h1>User Score : {userScore}</h1>
      </div>

      <h1>결과 : {win}</h1>
    </div>
  );
};

export default Ex04;