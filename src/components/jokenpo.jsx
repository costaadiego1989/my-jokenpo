import "./style.css";
import { FaHandRock as Rock } from "react-icons/fa";
import { FaHandPaper as Paper } from "react-icons/fa";
import { FaHandScissors as Scizor } from "react-icons/fa";

export const Jokenpo = () => {
  return (
    <div className="container">
      <div className="userSide">
        <Rock
          value="userRock"
          classNAme="icons"
          style={{ fontSize: "2rem", cursor: "pointer" }}
        />
        <Paper
          value="userPaper"
          style={{ fontSize: "2rem", cursor: "pointer" }}
        />
        <Scizor
          value="userScizor"
          style={{ fontSize: "2rem", cursor: "pointer" }}
        />
      </div>
      <div className="x">X</div>
      <div className="computerSide">
        <Rock
          value="computerRock"
          style={{ fontSize: "2rem", cursor: "pointer" }}
        />
        <Paper
          value="computerPaper"
          style={{ fontSize: "2rem", cursor: "pointer" }}
        />
        <Scizor
          value="computerScizor"
          style={{ fontSize: "2rem", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};
