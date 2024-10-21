import React, { useState, useEffect } from 'react';

const Ex04 = () => {
    const [ran, setRan] = useState('./img/dice1.png');
    const [ran2, setRan2] = useState('./img/dice1.png');
    const [score, setScore] = useState('');
    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);

    useEffect(() => {
        const ranint = parseInt(Math.random() * 6) + 1;
        const ranint2 = parseInt(Math.random() * 6) + 1;

        setRan('./img/dice' + ranint + '.png');
        setRan2('./img/dice' + ranint2 + '.png');

        if (ranint > ranint2) {
            setNum(prevNum => prevNum + 1);
        } else if (ranint < ranint2) {
            setNum2(prevNum => prevNum + 1);
        }

        if (num === 10) {
            setScore('COM WIN');
        } else if (num2 === 10) {
            setScore('USER WIN');
        }
    }, [num, num2]);

    return (
        <div>
            <h1>DICE GAME</h1>
            <button>Start</button>

            <div className="dice">
                <img src={ran} alt="Dice 1" />
                <h1>Com Score : {num}</h1>
            </div>
            <div className="dice">
                <img src={ran2} alt="Dice 2" />
                <h1>User Score : {num2}</h1>
            </div>

            <h1>결과 : {score}</h1>
        </div>
    );
};

export default Ex04;
