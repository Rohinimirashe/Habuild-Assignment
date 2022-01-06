import { CIRCLE, CROSS, EMPTY } from "../../constants";
import "./index.css";

const ResultScreen = ({ winner, resetGame }) => {
  return (
    <div className="result__screen">
      <h1>
        {winner === EMPTY && "Its a Tie"}
        {winner === CIRCLE && "Circle Won The Game"}
        {winner === CROSS && "Cross Won The Game"}
      </h1>

      <button className="btn__reset" onClick={() => resetGame()}>
        Reset Game
      </button>
    </div>
  );
};

export default ResultScreen;
