import "./img1.jpg"
import "./CartaoPerfil.css"
export default function CartaoPerfil() {
    return (
        <div className="cartao-perfil">
            <img 
            src="img1.jpg" 
            alt="Imagem de perfil"
            className="imagem-perfil"
            />
            <h1 className="nome-usuario">Bernardo de Moraes Eleuterio</h1>
            <p className="descricao">Desenvolvedor junior de Front e Back end, 
        sou apaixonodo pro programação, e sempre procuro 
        novos objetivos para crescer e aprender cada vez mais.</p>
        </div>
    )
}