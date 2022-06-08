import "./style.css";
import { FaRegHandRock as Rock } from "react-icons/fa";
import { FaRegHandPaper as Paper } from "react-icons/fa";
import { FaRegHandScissors as Scizor } from "react-icons/fa";
import { FaHandRock as Rock2 } from "react-icons/fa";
import { FaHandPaper as Paper2 } from "react-icons/fa";
import { FaHandScissors as Scizor2 } from "react-icons/fa";
import { BiscoitoDaSorte } from "./BiscoitoDaSorte/";
import { useState, useEffect } from "react";

export const Jokenpo = () => {
  const [actualUserChoice, setActualUserChoice] = useState();
  const [actualComputerChoice, setActualComputerChoice] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [userDraw, setUserDraw] = useState(0);
  const [computerDraw, setComputerDraw] = useState(0);
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
      setUserDraw(userDraw + 1);
      setComputerDraw(userDraw + 1);
      console.log("Empate!");
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
      setUserDraw(userDraw + 1);
      setComputerDraw(userDraw + 1);
      console.log("Empate:");
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
      setUserDraw(userDraw + 1);
      setComputerDraw(userDraw + 1);
      console.log("Empate:");
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
  };

  return (
    <>
      <h2 style={{ marginTop: "-100px" }}>Jo.Ken.Pô</h2>
      {userWin === 1 ? (
        <p style={{ fontSize: "1.25rem" }}>
          Desafio completo! Abra seu biscoito da sorte.
        </p>
      ) : (
        <p style={{ fontSize: "1.25rem" }}>
          Complete o desafio! Marque 10 pontos e receba um biscoito da sorte.
        </p>
      )}
      {userWin === 1 ? <BiscoitoDaSorte userWin={userWin} /> : null}
      {userWin !== 1 ?
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
                  <p>Emp: {userDraw}</p>
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
            {actualUserChoice === "userRock" &&
            actualComputerChoice === "computerRock" ? (
              <div className="userDraw">
                <p>Você empatou!</p>
                <button onClick={resetChoices}>Bora tentar novamete</button>
              </div>
            ) : null}
            {actualUserChoice === "userRock" &&
            actualComputerChoice === "computerPaper" ? (
              <div className="userLose">
                <p>Você perdeu!</p>
                <button onClick={resetChoices}>
                  Que azar. tente novamente
                </button>
              </div>
            ) : null}
            {actualUserChoice === "userRock" &&
            actualComputerChoice === "computerScizor" ? (
              <div className="userWin">
                <p>Você ganhou!</p>
                <button onClick={resetChoices}>Parabéns! Você é o bixão</button>
              </div>
            ) : null}
            {actualUserChoice === "userPaper" &&
            actualComputerChoice === "computerRock" ? (
              <div className="userWin">
                <p>Você ganhou!</p>
                <button onClick={resetChoices}>Parabéns! Você é o bixão</button>
              </div>
            ) : null}
            {actualUserChoice === "userPaper" &&
            actualComputerChoice === "computerPaper" ? (
              <div className="userDraw">
                <p>Você empatou!</p>
                <button onClick={resetChoices}>Bora tentar novamete</button>
              </div>
            ) : null}
            {actualUserChoice === "userPaper" &&
            actualComputerChoice === "computerScizor" ? (
              <div className="userLose">
                <p>Você perdeu!</p>
                <button onClick={resetChoices}>
                  Que azar. tente novamente
                </button>
              </div>
            ) : null}
            {actualUserChoice === "userScizor" &&
            actualComputerChoice === "computerScizor" ? (
              <div className="userDraw">
                <p>Você empatou!</p>
                <button onClick={resetChoices}>Bora tentar novamete</button>
              </div>
            ) : null}
            {actualUserChoice === "userScizor" &&
            actualComputerChoice === "computerRock" ? (
              <div className="userLose">
                <p>Você perdeu!</p>
                <button onClick={resetChoices}>
                  Que azar. tente novamente
                </button>
              </div>
            ) : null}
            {actualUserChoice === "userScizor" &&
            actualComputerChoice === "computerPaper" ? (
              <div className="userWin">
                <p>Você ganhou!</p>
                <button onClick={resetChoices}>Parabéns! Você é o bixão</button>
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
                  <p>Emp: {computerDraw}</p>
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
          {actualComputerChoice === "computerRock" &&
          actualUserChoice === "userRock" ? (
            <div className="computerDraw">
              <p>Você empatou!</p>
              <button onClick={resetChoices}>Bora tentar novamente</button>
            </div>
          ) : null}
          {actualComputerChoice === "computerRock" &&
          actualUserChoice === "userPaper" ? (
            <div className="computerLose">
              <p>Você perdeu!</p>
              <button onClick={resetChoices}>Que azar. tente novamente</button>
            </div>
          ) : null}
          {actualComputerChoice === "computerRock" &&
          actualUserChoice === "userScizor" ? (
            <div className="computerWin">
              <p>Você ganhou!</p>
              <button onClick={resetChoices}>Parabéns! Você é o bixão</button>
            </div>
          ) : null}
          {actualComputerChoice === "computerPaper" &&
          actualUserChoice === "userRock" ? (
            <div className="computerWin">
              <p>Você ganhou!</p>
              <button onClick={resetChoices}>Parabéns! Você é o bixão</button>
            </div>
          ) : null}
          {actualComputerChoice === "computerPaper" &&
          actualUserChoice === "userPaper" ? (
            <div className="computerDraw">
              <p>Você empatou!</p>
              <button onClick={resetChoices}>Bora tentar novamete</button>
            </div>
          ) : null}
          {actualComputerChoice === "computerPaper" &&
          actualUserChoice === "userScizor" ? (
            <div className="computerLose">
              <p>Você perdeu!</p>
              <button onClick={resetChoices}>Que azar. tente novamente</button>
            </div>
          ) : null}
          {actualComputerChoice === "computerScizor" &&
          actualUserChoice === "userScizor" ? (
            <div className="computerDraw">
              <p>Você empatou!</p>
              <button onClick={resetChoices}>Bora tentar novamete</button>
            </div>
          ) : null}
          {actualComputerChoice === "computerScizor" &&
          actualUserChoice === "userRock" ? (
            <div className="computerLose">
              <p>Você perdeu!</p>
              <button onClick={resetChoices}>Que azar. tente novamente</button>
            </div>
          ) : null}
          {actualComputerChoice === "computerScizor" &&
          actualUserChoice === "userPaper" ? (
            <div className="computerWin">
              <p>Você ganhou!</p>
              <button onClick={resetChoices}>Parabéns! Você é o bixão</button>
            </div>
          ) : null}
        </div>
      </div> : null}
    </>
  );
};
