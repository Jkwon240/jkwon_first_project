function ResultList({ result }) {
  return (
    <ul className="result-list">
      {result.map((item, index) => (
        <li key={index}>
          {item.guess} → {item.strike}S {item.ball}B
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
