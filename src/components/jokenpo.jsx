import "./style.css";
import { FaRegHandRock as Rock } from "react-icons/fa";
import { FaRegHandPaper as Paper } from "react-icons/fa";
import { FaRegHandScissors as Scizor } from "react-icons/fa";
import { useState } from "react";

export const Jokenpo = () => {
  const [actualChoice, setActualChoice] = useState("userRock");

  const handleClick = (e) => {
    console.log(e);
  };

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
            <div className="actualChoice">{}</div>
          </div>
        </div>
        <div className="x">X</div>
        <div className="computerSide">
          <div className="computerSideInformation">
            <div className="computerChoices">
            <a
                href
                role="button"
                value="pcRock"
                onClick={() => handleClick("pcRock")}
              >
                <Rock />
              </a>
              <a
                href
                role="button"
                value="pcPaper"
                onClick={() => handleClick("pcPaper")}
              >
                <Paper />
              </a>
              <a
                href
                role="button"
                value="pcScizor"
                onClick={() => handleClick("pcScizor")}
              >
                <Scizor />
              </a>
            </div>
            <div className="pcScore">
              <div>
                <h3>Pontuação do PC: {0}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
