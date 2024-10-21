import React, {useState} from 'react';
import '../App.css';

const Ex03 = () => {

//   const [ranNum, setRanNum] = useState(parseInt(Math.random() * 3) + 1);

  // 랜덤하게 컴퓨터가 생성해주는 숫자 : ranNum state 생성
  const [ranNum, setRanNum] = useState();
  // 내가 누른 버튼의 숫자 : inputNum state 생성
  const [inputNum, setInputNum] = useState();

  const btnCk = (e) => {
    // console.log('btn ck function');

    // // 랜덤한 수 1 ~ 3
    // console.log('ranNum', parseInt(Math.random() * 3) + 1);

    // 내가 선택한 수
    // console.log('inputNum', e);
    // setRanNum(ranNum);
    setRanNum(parseInt(Math.random() * 3) + 1);
    setInputNum(e.target.innerText);

  };

  /*
  랜덤게임을 만들어보자
    - 랜덤하게 컴퓨터가 생성해주는 숫자 : ranNum state 생성
    - 내가 누른 버튼의 숫자 : inputNum state 생성
    - 버튼을 눌렀을 때 실행할 함수 : btnCk 함수 생성

        STEP1) 랜덤한 숫자를 뽑아준다. => ranNum에 적용
        STEP2) 사용자가 누른 버튼의 내용을 감지해서 inputNum에 적용
        STEP3) ranNum와 inputNum를 비교해서, 같다면 '정답입니다~' / 아니라면 '땡!'
  */

  return (
    <div className='div-center'>
        <h1>🎼 랜덤 게임 🎼</h1>
        <div>
            <button onClick={btnCk}>1</button>
            <button onClick={btnCk}>2</button>
            <button onClick={btnCk}>3</button>
        </div>

        <div>
            <hr></hr>
            <span>내가 누른 숫자 : {inputNum}</span>
            <br></br>
            <span>컴퓨터 숫자 : {ranNum}</span>
            <br></br>
            {/* ranNum과 inputNum의 비교는 이곳에서 할 것 => 삼항연산자 */}
            { ranNum == inputNum ?
          <p>정답입니다~</p>
          :
          <p>땡!</p>
        }
        </div>
    </div>
  );
};

export default Ex03;