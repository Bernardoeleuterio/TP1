import React from "react";
import './Projetos.css';
export default function Projetos(){
  return(
    <section className="projetos">
    <h2>Projetos</h2>
    <ul>
      {projetos.map((projeto, index) => (
        <li key={index} className="projeto-item">
          <h3>{projeto.titulo}</h3>
          <p>{projeto.descricao}</p>
        </li>
        ))}
      </ul>
    </section>
  )
}
const projetos = [
  { titulo: 'Projeto 1', descricao: 'Descrição do projeto 1' },
  { titulo: 'Projeto 2', descricao: 'Descrição do projeto 2' },
  { titulo: 'Projeto 3', descricao: 'Descrição do projeto 3' }
];