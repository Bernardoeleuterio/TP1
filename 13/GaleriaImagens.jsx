import "./GaleriaImagens.css";
export default function galeriaImagens() {
    return (
        <div className="galeria">
            {imagens.map((imagem,index)=> (<div key={index} className="imagem-container">
                <img src={imagem.url} alt={imagem.legenda}className="iamgem"/>
                <p className="legenda">{imagem.legenda}</p></div>
            ))}
        </div>
    )
}

const imagens = [ 
    { url: 'https://via.placeholder.com/150', legenda: 'Imagem 1' }, 
    { url: 'https://via.placeholder.com/150', legenda: 'Imagem 2' }, 
    { url: 'https://via.placeholder.com/150', legenda: 'Imagem 3' } 
  ];