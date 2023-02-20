import { useState } from "react";

export default function Jogo(props) {

    const [clicks, setClicks] = useState(0);

    function handleClass() {
        if (props.result === true) {
            return "verde";
        } else if (props.result === false) {
            return "vermelho";
        }
        return "";
    }

    function handleClick() {
        const num = clicks + 1;
        setClicks(num);
        
        if(num === 1) {
            props.setStateJogo(true);
        }  else {
            props.reiniciarJogo();
        }
    }

    return (
        <div className="flex">
            <img src={props.forca} alt="forca" data-test="game-image"/>
            <div className="flex-coluna">
                <button className="palavra" onClick={handleClick} data-test="choose-word">Escolher Palavra</button>
                <h1 className={handleClass()} data-test="word">{props.textDisplay.map((t) => t+`${" "}`)}</h1>
            </div>
        </div>
    );
}