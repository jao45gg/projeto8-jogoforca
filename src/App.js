import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";


export default function App() {
    return (
        <>
            <Jogo forca="assets/forca0.png" text="_ _ _ _ _ _ _ _ _ _" />
            <Letras state={true}/>
        </>
    );
}