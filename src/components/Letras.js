export default function Letras(props) {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    function handleClick(letra) {
        props.setBotoes([...props.botoes, letra]);
        props.setLetraClicada(letra);
    }

    return (
        <div className="ajustes">
            <div className="botoes">
                {alfabeto.map((a) =>
                    <button key={a} className="letras" disabled={props.state ? props.state : props.botoes.includes(a)} 
                    onClick={() => handleClick(a) } data-test="letter">{a.toUpperCase()}</button>
                )}
            </div>
        </div>
    );
}