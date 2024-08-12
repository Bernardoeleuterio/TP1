import React from "react";
import './CartaoProduto.css';

export default function CartaoProduto(produto){
  return (
    <div className="cartao-produto">
  <img src={produto.imagem} alt={produto.nome} className="imagem-produto" />
  <h2 className="nome-produto">{produto.nome}</h2>
  <p className="descricao-produto">{produto.descricao}</p>
  <p className="preco-produto">{produto.preco}</p>
</div>
  );
};
