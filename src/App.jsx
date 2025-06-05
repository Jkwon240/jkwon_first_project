import { useState } from "react";
import "./App.css";
import { generateAnswer } from "./utils/generateAnswer";
import GameInput from "./GameInput";
import ResultList from "./ResultList";
import GameOver from "./GameOver"; // ✅ import 추가

function App() {
  const [answer, setAnswer] = useState(generateAnswer());
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false); // ✅ 성공 여부
  const maxAttempts = 10;

  const handleGuess = () => {
    if (gameOver) return;

    if (
      input.length !== 4 ||
      new Set(input).size !== 4 ||
      /[^0-9]/.test(input)
    ) {
      alert("서로 다른 숫자 4자리를 입력해주세요!");
      return;
    }

    const inputArr = input.split("").map(Number);
    let strike = 0;
    let ball = 0;

    inputArr.forEach((digit, idx) => {
      if (digit === answer[idx]) strike++;
      else if (answer.includes(digit)) ball++;
    });

    const newResult = { guess: input, strike, ball };
    const updatedResult = [...result, newResult];

    setResult(updatedResult);
    setInput("");

    if (strike === 4) {
      setIsWin(true);
      setGameOver(true);
    } else if (updatedResult.length >= maxAttempts) {
      setIsWin(false);
      setGameOver(true);
    }
  };

  const handleReset = () => {
    setAnswer(generateAnswer());
    setInput("");
    setResult([]);
    setGameOver(false);
    setIsWin(false);
  };

  return (
    <div className="container">
      <h1>⚾ 숫자 야구게임 (4자리)</h1>

      {gameOver ? (
        <GameOver isWin={isWin} answer={answer} onReset={handleReset} />
      ) : (
        <>
          <GameInput input={input} setInput={setInput} onGuess={handleGuess} />
          <ResultList result={result} />
          <p>남은 시도: {maxAttempts - result.length}회</p>
        </>
      )}
    </div>
  );
}

export default App;
