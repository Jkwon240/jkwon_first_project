function GameInput({ input, setInput, onGuess }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // Enter 입력 시 새로고침 방지
    onGuess(); // App에서 정의된 guess 처리 함수 실행
  };

  return (
    <form onSubmit={handleSubmit} className="game-input-form">
      <input
        type="text"
        maxLength={4}
        value={input}
        placeholder="4자리 숫자"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">입력</button>
    </form>
  );
}

export default GameInput;
