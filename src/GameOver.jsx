function GameOver({ isWin, answer, onReset }) {
  return (
    <div className="game-over">
      <h2>{isWin ? "🎉 홈런! 정답입니다!" : "💥 GAME OVER!"}</h2>
      <p>
        정답은 <strong>{answer.join("")}</strong> 였습니다.
      </p>
      <button onClick={onReset}>🔄 다시 시작</button>
    </div>
  );
}

export default GameOver;
