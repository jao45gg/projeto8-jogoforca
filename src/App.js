import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import "./css/reset.css";
import "./css/styles.css";
import { useState } from "react";
import palavras from "./palavras.js";
import imgs from './images.js';

export default function App() {

    const [stateLetras, setStateLetras] = useState(true);
    const [letraClicada, setLetraClicada] = useState("");
    const [text, setText] = useState([]);
    const [textDisplay, setTextDisplay] = useState([]);
    const [stateJogo, setStateJogo] = useState(false);
    const [control, setControl] = useState(true);
    const [erros, setErros] = useState(0);
    const [contadorPalavra, setContadorPalavra] = useState();
    const [result, SetResult] = useState("valor aleatório");
    const [control1, setControl1] = useState(true);
    const [botoes, setBotoes] = useState([]);

    function reiniciarJogo() {
        setStateLetras(true);
        setLetraClicada("");
        setText([]);
        setTextDisplay([]);
        setStateJogo(false);
        setControl(true);
        setErros(0);
        setContadorPalavra();
        SetResult("valor aleatório");
        setControl1(true);
        comecarJogo();
        setBotoes([]);
    }

    function perdeu() {
        setTextDisplay(text);
        setStateLetras(true);
        SetResult(false);
        setControl1(false);
    }

    function ganhou() {
        setTextDisplay(text);
        setStateLetras(true);
        SetResult(true);
        setContadorPalavra(undefined);
    }

    function comecarJogo() {
        setStateLetras(false);
        const num = Math.floor(Math.random() * (palavras.length - 1));
        const str = palavras[num];
        setText(str.split(""));
        setTextDisplay(str.split("").map(() => "_"));
        setControl(false);
        setContadorPalavra(str.length);
    }

    function verificarLetra() {
        if (text.includes(letraClicada)) {

            let str = textDisplay;

            let counter = 0;
            for (let index = 0; index < text.length; index++) {
                if (text[index] === letraClicada) {
                    str[index] = letraClicada;
                    ++counter;
                }

            }
            setTextDisplay(str);
            setContadorPalavra(contadorPalavra - counter);
        } else {
            const num = erros + 1;
            setErros(num);
        }

        setLetraClicada("");
    }

    if (contadorPalavra === 0) {
        ganhou();
    } else if (erros === 6 && control1) {
        perdeu();
    }

    if (stateJogo && control) {
        comecarJogo();
    }

    if (letraClicada) {
        verificarLetra();
    }

    return (
        <>
            <Jogo forca={imgs[erros]} textDisplay={textDisplay} setStateJogo={setStateJogo} result={result}
                reiniciarJogo={reiniciarJogo} />
            <Letras state={stateLetras} setStateLetras={setStateLetras} setLetraClicada={setLetraClicada}
                botoes={botoes} setBotoes={setBotoes} />
        </>
    );
}