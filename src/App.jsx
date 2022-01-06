import { useState, useEffect } from "react";
import { CIRCLE, EMPTY, CROSS } from "./constants";

import Square from "./components/Square";

import "./App.css";
import ResultScreen from "./components/ResultScreen";

const App = () => {
  const [positions, setPositions] = useState([
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
  ]);
  const [player, setPlayer] = useState(CIRCLE);
  const [winner, setWinner] = useState(null);

  const detectWinner = () => {
    if (
      positions[0] == CIRCLE &&
      positions[1] == CIRCLE &&
      positions[2] == CIRCLE
    )
      return CIRCLE;
    if (
      positions[3] == CIRCLE &&
      positions[4] == CIRCLE &&
      positions[5] == CIRCLE
    )
      return CIRCLE;
    if (
      positions[6] == CIRCLE &&
      positions[7] == CIRCLE &&
      positions[8] == CIRCLE
    )
      return CIRCLE;

    if (
      positions[0] == CIRCLE &&
      positions[3] == CIRCLE &&
      positions[6] == CIRCLE
    )
      return CIRCLE;
    if (
      positions[1] == CIRCLE &&
      positions[4] == CIRCLE &&
      positions[7] == CIRCLE
    )
      return CIRCLE;
    if (
      positions[2] == CIRCLE &&
      positions[5] == CIRCLE &&
      positions[8] == CIRCLE
    )
      return CIRCLE;

    if (
      positions[0] == CIRCLE &&
      positions[4] == CIRCLE &&
      positions[8] == CIRCLE
    )
      return CIRCLE;
    if (
      positions[2] == CIRCLE &&
      positions[4] == CIRCLE &&
      positions[6] == CIRCLE
    )
      return CIRCLE;

    if (positions[0] == CROSS && positions[1] == CROSS && positions[2] == CROSS)
      return CROSS;
    if (positions[3] == CROSS && positions[4] == CROSS && positions[5] == CROSS)
      return CROSS;
    if (positions[6] == CROSS && positions[7] == CROSS && positions[8] == CROSS)
      return CROSS;

    if (positions[0] == CROSS && positions[3] == CROSS && positions[6] == CROSS)
      return CROSS;
    if (positions[1] == CROSS && positions[4] == CROSS && positions[7] == CROSS)
      return CROSS;
    if (positions[2] == CROSS && positions[5] == CROSS && positions[8] == CROSS)
      return CROSS;

    if (positions[0] == CROSS && positions[4] == CROSS && positions[8] == CROSS)
      return CROSS;
    if (positions[2] == CROSS && positions[4] == CROSS && positions[6] == CROSS)
      return CROSS;

    if (positions.every((position) => position != EMPTY)) return EMPTY;

    return null;
  };
  const playerTurn = (position) => {
    const updatedPositions = [...positions];
    updatedPositions[position] = player;

    setPlayer((prevPlayer) => (prevPlayer === CIRCLE ? CROSS : CIRCLE));
    setPositions(updatedPositions);
  };

  const resetGame = () => {
    setPositions([
      EMPTY,
      EMPTY,
      EMPTY,
      EMPTY,
      EMPTY,
      EMPTY,
      EMPTY,
      EMPTY,
      EMPTY,
    ]);
    setWinner(null);
    setPlayer(CIRCLE);
  };

  useEffect(() => {
    setWinner(detectWinner());
  });

  return (
    <div className="App">
      <h1 align="center" className="heading">
        Tick Tack Toe Game
      </h1>
      {winner ? (
        <ResultScreen resetGame={resetGame} winner={winner} />
      ) : (
        <div className="game__area">
          <Square position={0} value={positions[0]} playerTurn={playerTurn} />
          <Square position={1} value={positions[1]} playerTurn={playerTurn} />
          <Square position={2} value={positions[2]} playerTurn={playerTurn} />
          <Square position={3} value={positions[3]} playerTurn={playerTurn} />
          <Square position={4} value={positions[4]} playerTurn={playerTurn} />
          <Square position={5} value={positions[5]} playerTurn={playerTurn} />
          <Square position={6} value={positions[6]} playerTurn={playerTurn} />
          <Square position={7} value={positions[7]} playerTurn={playerTurn} />
          <Square position={8} value={positions[8]} playerTurn={playerTurn} />
        </div>
      )}
    </div>
  );
};

export default App;
