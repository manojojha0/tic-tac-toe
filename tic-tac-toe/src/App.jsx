import React, { useState, useEffect } from "react";
import Square from "./Square/Square";
import { io } from "socket.io-client";
import Swal from "sweetalert2";
import Navbar from "./Componets/Navbar";
import About from "./Componets/About";
import Blog from "./Componets/Blog";
import HowToPlay from "./Componets/HowToPlay";
import Play from "./Componets/Play";

const renderFrom = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const App = () => {
  const [gameState, setGameState] = useState(renderFrom);
  const [currentPlayer, setCurrentPlayer] = useState("circle");
  const [finishedState, setFinishetState] = useState(false);
  const [finishedArrayState, setFinishedArrayState] = useState([]);
  const [playOnline, setPlayOnline] = useState(false);
  const [waitingForOpponent, setWaitingForOpponent] = useState(false);
  const [socket, setSocket] = useState(null);
  const [playerName, setPlayerName] = useState("");
  const [opponentName, setOpponentName] = useState(null);
  const [playingAs, setPlayingAs] = useState(null);

  const checkWinner = () => {
    for (let row = 0; row < gameState.length; row++) {
      if (
        gameState[row][0] === gameState[row][1] &&
        gameState[row][1] === gameState[row][2]
      ) {
        setFinishedArrayState([row * 3 + 0, row * 3 + 1, row * 3 + 2]);
        return gameState[row][0];
      }
    }

    for (let col = 0; col < gameState.length; col++) {
      if (
        gameState[0][col] === gameState[1][col] &&
        gameState[1][col] === gameState[2][col]
      ) {
        setFinishedArrayState([0 * 3 + col, 1 * 3 + col, 2 * 3 + col]);
        return gameState[0][col];
      }
    }

    if (
      gameState[0][0] === gameState[1][1] &&
      gameState[1][1] === gameState[2][2]
    ) {
      return gameState[0][0];
    }

    if (
      gameState[0][2] === gameState[1][1] &&
      gameState[1][1] === gameState[2][0]
    ) {
      return gameState[0][2];
    }

    const isDrawMatch = gameState.flat().every((e) => e === "circle" || e === "cross");
    if (isDrawMatch) return "draw";
    return null;
  };

  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      setFinishetState(winner);
    }
  }, [gameState]);

  useEffect(() => {
    if (!socket) return;

    socket.on("connect", () => {
      setPlayOnline(true);
      setWaitingForOpponent(true);
    });

    socket.on("OpponentNotFound", () => {
      setOpponentName(false);
    });

    socket.on("OpponentFound", (data) => {
      setPlayingAs(data.playingAs);
      setOpponentName(data.opponentName);
      setWaitingForOpponent(false);
    });

    socket.on("opponentLeftMatch", () => {
      setFinishetState("opponentLeftMatch");
    });

    socket.on("playerMoveFromServer", (data) => {
      const id = data.state.id;
      setGameState((prevState) => {
        const newState = [...prevState];
        const rowIndex = Math.floor(id / 3);
        const colIndex = id % 3;
        newState[rowIndex][colIndex] = data.state.sign;
        return newState;
      });
      setCurrentPlayer(data.state.sign === "circle" ? "cross" : "circle");
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const takePlayerName = async () => {
    const result = await Swal.fire({
      title: "Enter your name",
      input: "text",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      },
    });

    return result;
  };

  async function playOnlineClick() {
    const result = await takePlayerName();
    if (!result.isConfirmed) return;

    const username = result.value;
    setPlayerName(username);
    setWaitingForOpponent(true);

    const newSocket = io("http://localhost:3000", {
      autoConnect: true,
    });

    newSocket.on("connect", () => {
      newSocket.emit("request_to_play", {
        playerName: username,
      });
    });

    setSocket(newSocket);
  }

  const handleShareClick = () => {
    const url = window.location.origin;
    navigator.clipboard.writeText(url);
    Swal.fire("Copied!", "Share this URL with firend.", "success");
  };

  // Waiting screen while searching opponent
  if (waitingForOpponent && !opponentName) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-gray-900 text-white">
        <p className="text-2xl">Waiting for opponent...</p>
      </div>
    );
  }

  // Game screen
  if (playOnline && opponentName) {
    return (
      <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white py-10">
        <div className="flex justify-between w-[440px] mb-6 text-center font-semibold">
          <div
            className={`p-1 w-[120px] rounded-bl-[50px] rounded-tr-[50px] ${
              currentPlayer === playingAs ? "bg-[#3fa7f0]" : "bg-purple-500"
            }`}
          >
            {playerName}
          </div>
          <div
            className={`p-1 w-[120px] rounded-bl-[50px] rounded-tr-[50px] ${
              currentPlayer !== playingAs ? "bg-pink-700" : "bg-gray-400"
            }`}
          >
            {opponentName}
          </div>
        </div>

        <h1 className="text-xl font-bold p-2 w-[340px] rounded-lg mb-4 bg-gray-700 text-center">
          Tic Tac Toe
        </h1>

        <div className="grid grid-cols-3 gap-2">
          {gameState.map((arr, rowIndex) =>
            arr.map((e, colIndex) => (
              <Square
                socket={socket}
                playingAs={playingAs}
                gameState={gameState}
                finishedArrayState={finishedArrayState}
                finishedState={finishedState}
                currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer}
                setGameState={setGameState}
                id={rowIndex * 3 + colIndex}
                key={rowIndex * 3 + colIndex}
                currentElement={e}
              />
            ))
          )}
        </div>

        {finishedState && finishedState !== "draw" && finishedState !== "opponentLeftMatch" && (
          <h3 className="mt-4 text-2xl font-bold">
            {finishedState === playingAs ? "You" : finishedState} 🎉 won the game
          </h3>
        )}

        {finishedState === "draw" && (
          <h3 className="mt-4 text-2xl font-bold">Match Draw ☺️ try again </h3>
        )}

        {finishedState === "opponentLeftMatch" && (
          <h3 className="mt-4 text-2xl font-bold">
            🥇 You won the match. 🤡 Opponent has left.
          </h3>
        )}

        {!finishedState && opponentName && (
          <h3 className="mt-4 text-2xl font-bold">
            You are playing against 🤼‍♂️ {opponentName}
          </h3>
        )}
      </div>
    );
  }

  // Landing Page
  return (
    <>
      <Navbar />
      <div id="about">
        <About />
      </div>

      <div
        id="play"
        className="min-h-screen bg-gray-600 py-10 w-full px-4 md:px-[80px] flex flex-col items-center justify-center"
      >
        <h1 className="text-2xl text-center text-white font-extrabold py-10">
          Play With Friend
        </h1>
        <Play />
        <br />
        <div className="flex gap-4 w-full md:w-1/2">
          <button
            onClick={playOnlineClick}
            className="flex-1 px-6 py-3 bg-purple-600 text-white font-semibold rounded text-center hover:bg-purple-700 transition text-lg"
          >
            Play
          </button>
          <button
            onClick={handleShareClick}
            className="flex-1 px-6 py-3 bg-green-600 text-white font-semibold rounded text-center hover:bg-green-700 transition text-lg"
          >
            Share
          </button>
        </div>
      </div>

      <div id="blog">
        <Blog />
      </div>

      <div id="how-to-play">
        <HowToPlay />
      </div>
    </>
  );
};

export default App;
