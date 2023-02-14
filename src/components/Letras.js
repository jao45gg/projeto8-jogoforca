export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <div className="ajustes">
            <div className="botoes">
                {alfabeto.map((a,index) => 
                    <button className="letras" key={index} disabled={props.state}>{a.toUpperCase()}</button>
                )}
            </div>
        </div>
    );
}