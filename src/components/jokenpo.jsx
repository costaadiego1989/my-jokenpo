import "./style.css";
import { FaRegHandRock as Rock } from "react-icons/fa";
import { FaRegHandPaper as Paper } from "react-icons/fa";
import { FaRegHandScissors as Scizor } from "react-icons/fa";
import { FaHandRock as Rock2 } from "react-icons/fa";
import { FaHandPaper as Paper2 } from "react-icons/fa";
import { FaHandScissors as Scizor2 } from "react-icons/fa";
import { useState, useEffect } from "react";

export const Jokenpo = () => {
  const [actualUserChoice, setActualUserChoice] = useState("");
  const [actualComputerChoice, setActualComputerChoice] = useState("");

  const handleClick = (e) => {
    if (e === "userRock") setActualUserChoice("userRock");
    if (e === "userPaper") setActualUserChoice("userPaper");
    if (e === "userScizor") setActualUserChoice("userScizor");
  };

  let computerChoices = ["computerRock", "computerPaper", "computerScizor"];
  let computerLetsRoll =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  useEffect(() => {
    setActualComputerChoice(computerLetsRoll);
  }, [])

  return (
    <>
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
                <Rock />
              </a>
              <a
                href
                role="button"
                value="userPaper"
                onClick={() => handleClick("userPaper")}
              >
                <Paper />
              </a>
              <a
                href
                role="button"
                value="userScizor"
                onClick={() => handleClick("userScizor")}
              >
                <Scizor />
              </a>
            </div>
            <div className="userScore">
              <div>
                <h3>Sua Pontuação: {0}</h3>
              </div>
            </div>
            <div className="actualChoice">
              {actualUserChoice === "userRock" ? (
                <Rock2 style={{ fontSize: "5rem" }} />
              ) : null}
            </div>
            <div className="actualChoice">
              {actualUserChoice === "userPaper" ? <Paper2 /> : null}
            </div>
            <div className="actualChoice">
              {actualUserChoice === "userScizor" ? <Scizor2 /> : null}
            </div>
          </div>
        </div>
        <div className="x">X</div>
        <div className="computerSide">
          <div className="computerSideInformation">
            <div className="computerChoices">
              <a href role="button" value="pcRock">
                {<Rock />}
              </a>
              <a href role="button" value="pcPaper">
                <Paper />
              </a>
              <a href role="button" value="pcScizor">
                <Scizor />
              </a>
            </div>
            <div className="computerScore">
              <div>
                <h3>Pontuação do PC: {0}</h3>
              </div>
            </div>
            <div className="actualChoice">
              {actualComputerChoice === "computerRock" ? <Rock2 /> : null}
            </div>
            <div className="actualChoice">
              {actualComputerChoice === "computerPaper" ? <Paper2 /> : null}
            </div>
            <div className="actualChoice">
              {actualComputerChoice === "computerScizor" ? <Scizor2 /> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
