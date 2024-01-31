import { useState } from "react";
import Card from "../card/card"
import isWinner from "../helpers/checkWinner";


function Grid({ NoCards }) {
    const [board, setboard] = useState(Array(NoCards).fill(""));
    // console.log(board);
    const [turn, setTurn] = useState(true) // true for o and false for x
    const [winner, setWinner] = useState(null)

    function reset(){
        setTurn(true);
        setWinner(null);
        setboard(Array(NoCards).fill(""))
    }

    function play(index) {
        if (turn == true) {
            board[index] = "o";
        }
        else {
            board[index] = "x"
        }

        const Win = isWinner(board, turn ? "o" : "x")
        console.log(Win)
        if (Win) {

            setWinner(Win)
        }

        setboard([...board]);
        setTurn(!turn);

    }



    return (
        <div className="grid-wrapper">
            {
                winner && (
                    <>
                        <h1 className="turn">Winner is {winner}</h1>
                        <button className="reset" onClick={()=>{reset()}}>Reset Game</button>
                    </>

                )

            }
            <h1 className="turn-highligh">Current turn =&gt; {(turn) ? "O" : "X"}</h1>
            <div className="grid">
                {board.map((item, index) => <Card gameEnd={winner?true:false} key={index} onPlay={play} player={item} index={index} />)}
            </div>
        </div>

    );
}

export default Grid;