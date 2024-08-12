import Cabecalho from "./Cabecalho";
import Contato from "./Contatos";
import Projetos from "./Projetos";
import "./Portfolio.css"

export default function Portfolio() {
    return (
        <div className="portfolio">
            <Cabecalho/>
            <Projetos/>
            <Contato/>
        </div>
    )
}