import "./style.css";
import { FaRegHandRock as Rock } from "react-icons/fa";
import { FaRegHandPaper as Paper } from "react-icons/fa";
import { FaRegHandScissors as Scizor } from "react-icons/fa";
import { FaHandRock as Rock2 } from "react-icons/fa";
import { FaHandPaper as Paper2 } from "react-icons/fa";
import { FaHandScissors as Scizor2 } from "react-icons/fa";
import { useState, useEffect } from "react";

export const Jokenpo = () => {
  const [actualUserChoice, setActualUserChoice] = useState();
  const [actualComputerChoice, setActualComputerChoice] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [draw, setDraw] = useState(0);
  const [userWin, setUserWin] = useState(0);
  const [computerWin, setComputerWin] = useState(0);
  const [userLose, setUserLose] = useState(0);
  const [computerLose, setComputerLose] = useState(0);

  let computerChoices = ["computerRock", "computerPaper", "computerScizor"];

  useEffect(() => {
    setActualComputerChoice(
      computerChoices[Math.floor(Math.random() * computerChoices.length)]
    );
  }, []);

  const handleClick = (e) => {
    if (e === "userRock") setActualUserChoice("userRock");
    if (e === "userPaper") setActualUserChoice("userPaper");
    if (e === "userScizor") setActualUserChoice("userScizor");
    verifyChoices(e);
  };

  const verifyChoices = (option) => {
    if (option === "userRock" && actualComputerChoice === "computerRock") {
      setDraw(draw + 1);
      console.log("Empate!", draw);
    }
    if (option === "userRock" && actualComputerChoice === "computerPaper") {
      setComputerScore(computerScore + 1);
      setComputerWin(computerWin + 1);
      setUserLose(userLose + 1);
      console.log("Computador venceu!", computerScore);
    }
    if (option === "userRock" && actualComputerChoice === "computerScizor") {
      setUserScore(userScore + 1);
      setUserWin(userWin + 1);
      setComputerLose(computerLose + 1);
      console.log("Você venceu!", userScore);
    }
    if (option === "userPaper" && actualComputerChoice === "computerPaper") {
      setDraw(draw + 1);
      console.log("Empate:", draw);
    }
    if (option === "userPaper" && actualComputerChoice === "computerScizor") {
      setComputerScore(computerScore + 1);
      setComputerWin(computerWin + 1);
      setUserLose(userLose + 1);
      console.log("Computador venceu!", computerScore);
    }
    if (option === "userPaper" && actualComputerChoice === "computerRock") {
      setUserScore(userScore + 1);
      setUserWin(userWin + 1);
      setComputerLose(computerLose + 1);
      console.log("Você venceu!", userScore);
    }
    if (option === "userScizor" && actualComputerChoice === "computerScizor") {
      setDraw(draw + 1);
      console.log("Empate:", draw);
    }
    if (option === "userScizor" && actualComputerChoice === "computerRock") {
      setComputerScore(computerScore + 1);
      setComputerWin(computerWin + 1);
      setUserLose(userLose + 1);
      console.log("Computador venceu!", computerScore);
    }
    if (option === "userScizor" && actualComputerChoice === "computerPaper") {
      setUserScore(userScore + 1);
      setUserWin(userWin + 1);
      setComputerLose(computerLose + 1);
      console.log("Você venceu!", userScore);
    }
  };

  const resetChoices = () => {
    setActualUserChoice();
    setActualComputerChoice(
      computerChoices[Math.floor(Math.random() * computerChoices.length)]
    );
    setUserWin(0);
    setUserLose(0);
    setComputerWin(0);
    setComputerLose(0);
    setDraw(0);
  };

  return (
    <>      
    {actualUserChoice !== undefined ? <h2 style={{ paddingBottom: "80px" }}>Jokenpô</h2> : <h2 style={{ marginBottom: "-50px" }}>Jokenpô</h2>}
      <div className="container">
        <div className="userSide">
          <div className="userSideInformation">
            <div className="userChoices">
              <a
                href
                role="button"
                value="userRock"
                onClick={() => handleClick("userRock")}
              >
                {actualUserChoice === "userRock" ? <Rock2 /> : <Rock />}
              </a>
              <a
                href
                role="button"
                value="userPaper"
                onClick={() => handleClick("userPaper")}
              >
                {actualUserChoice === "userPaper" ? <Paper2 /> : <Paper />}
              </a>
              <a
                href
                role="button"
                value="userScizor"
                onClick={() => handleClick("userScizor")}
              >
                {actualUserChoice === "userScizor" ? <Scizor2 /> : <Scizor />}
              </a>
            </div>
            <div className="userScore">
              <div>
                <h3>Sua Pontuação</h3>
                <div className="userPlacar">
                  <p>Vit: {userWin}</p>
                  <p>Emp: {draw}</p>
                  <p>Der: {userLose}</p>
                </div>
              </div>
            </div>
            <div className="actualChoice">
              {actualUserChoice === "userRock" ? <Rock2 /> : null}
            </div>
            <div className="actualChoice">
              {actualUserChoice === "userPaper" ? <Paper2 /> : null}
            </div>
            <div className="actualChoice">
              {actualUserChoice === "userScizor" ? <Scizor2 /> : null}
            </div>
          </div>
          <div>
            {userWin ? (
              <div className="userWin">
                <p>Você ganhou!</p>
                <button onClick={resetChoices}>Faça mais pontos</button>
              </div>
            ) : null}
            {!userWin && !userLose && draw !== 0 ? (
              <div className="userDraw">
                <p>Você empatou!</p>
                <button onClick={resetChoices}>Faça mais pontos</button>
              </div>
            ) : null}
            {userLose ? (
              <div className="userLose">
                <p>Você perdeu!</p>
                <button onClick={resetChoices}>Faça mais pontos</button>
              </div>
            ) : null}
          </div>
        </div>
        <div className="x">X</div>
        <div className="computerSide">
          <div className="computerSideInformation">
            <div className="computerChoices">
              <a className="buttonIcons" href role="button" value="pcRock">
                {actualUserChoice && actualComputerChoice === "computerRock" ? (
                  <Rock2 />
                ) : (
                  <Rock />
                )}
              </a>
              <a href className="buttonIcons" role="button" value="pcPaper">
                {actualUserChoice &&
                actualComputerChoice === "computerPaper" ? (
                  <Paper2 />
                ) : (
                  <Paper />
                )}
              </a>
              <a className="buttonIcons" href role="button" value="pcScizor">
                {actualUserChoice &&
                actualComputerChoice === "computerScizor" ? (
                  <Scizor2 />
                ) : (
                  <Scizor />
                )}
              </a>
            </div>
            <div className="computerScore">
              <div>
                <h3>Pontuação do PC</h3>
                <div className="computerPlacar">
                  <p>Vit: {computerWin}</p>
                  <p>Emp: {draw}</p>
                  <p>Der: {computerLose}</p>
                </div>
              </div>
            </div>
            <div className="actualChoice">
              {actualUserChoice && actualComputerChoice === "computerRock" ? (
                <Rock2 />
              ) : null}
            </div>
            <div className="actualChoice">
              {actualUserChoice && actualComputerChoice === "computerPaper" ? (
                <Paper2 />
              ) : null}
            </div>
            <div className="actualChoice">
              {actualUserChoice && actualComputerChoice === "computerScizor" ? (
                <Scizor2 />
              ) : null}
            </div>
          </div>
          {computerWin ? (
            <div className="userWin">
              <p>Você ganhou!</p>
              <button not-allowed>Faça mais pontos</button>
            </div>
          ) : null}
          {draw !== 0 ? (
            <div className="userDraw">
              <p>Você empatou!</p>
              <button not-allowed>Faça mais pontos</button>
            </div>
          ) : null}
          {computerLose ? (
            <div className="userLose">
              <p>Você perdeu!</p>
              <button not-allowed>Faça mais pontos</button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
