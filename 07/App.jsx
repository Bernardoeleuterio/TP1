export default function verificarEstoque(produtos) {
    if (!Array.isArray(produtos)) {
        return []; 
    }
    return produtos.filter(produto => produto.quantidadeEmEstoque > 0)
}

const produtos = [ 
    { nome: "Laptop", quantidadeEmEstoque: 5 }, 
    { nome: "Tablet", quantidadeEmEstoque: 0 }, 
    { nome: "Smartphone", quantidadeEmEstoque: 3 } 
];

console.log(verificarEstoque(produtos))

