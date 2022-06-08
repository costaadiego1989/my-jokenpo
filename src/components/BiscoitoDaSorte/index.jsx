import "./style.css";
import BiscoitoFechado from "../../assets/img/biscoito.png";
import BiscoitoAberto from "../../assets/img/biscoitoAberto.png";
import { UseFrasesContext } from "../../mock";
import { useState } from "react";

export const BiscoitoDaSorte = ({ userWin }) => {
  const [textSort, setTextSort] = useState();

  const frasesGlobalState = UseFrasesContext();
  console.log("FRASES GLOBAL STATE", frasesGlobalState);

  const sortFrasesGlobalState =
    frasesGlobalState[Math.floor(Math.random() * frasesGlobalState.length)];
  console.log("FRASE SORTEADA:", sortFrasesGlobalState);

  const handleClick = () => {
    setTextSort(sortFrasesGlobalState);
  };

  return (
    <div>
      {userWin === 1 && !textSort ? (
        <img
          src={BiscoitoFechado}
          alt="BiscoitoFechado"
          onClick={handleClick}
        />
      ) : null}
      {textSort ? <img src={BiscoitoAberto} alt="BiscoitoAberto" /> : null}
      {textSort ? <p className="textSort">"{textSort}"</p> : null}
    </div>
  );
};
