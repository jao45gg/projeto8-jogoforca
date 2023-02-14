export default function Jogo(props) {
    return (
        <div className="flex">
            <img src={props.forca} alt="forca"/>
            <div className="flex-coluna">
                <button className="palavra">Escolher Palavra</button>
                <h1>{props.text}</h1>
            </div>
        </div>
    );
}