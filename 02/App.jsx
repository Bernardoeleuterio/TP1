export default function FiltrarDisponiveis(produtos){
    if (!Array.isArray(produtos)) {
        return []; 
    }
    return produtos.filter(produto => produto.disponivel)
}

const produtos = [ 
    { nome: "Laptop", disponivel: true }, 
    { nome: "Tablet", disponivel: false }, 
    { nome: "Smartphone", disponivel: true } 
];

const disponiveis = FiltrarDisponiveis(produtos)
console.log(disponiveis)