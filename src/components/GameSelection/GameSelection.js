import React, { useState, useEffect, Fragment } from "react";
import GameCard from "../GameCard/GameCard";
import "./GameSelection.css";

// Displays all the available games for the use to selecti from
const GameSelection = (props) => {
    const [games, setGames] = useState([
        "TicTacToe",
        "Checkers",
        "Pictionary",
    ]);

    return (
        <div className="game-selection">
            {games.map((e) => (
                <GameCard gameName={e} />
            ))}
        </div>
    );
};

export default GameSelection;
