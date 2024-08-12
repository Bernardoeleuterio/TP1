export default function filtarPorCategoria(produtos,categoria) {
      if (!Array.isArray(produtos)) {
        return []; 
    }
    return produtos.filter(produto => produto.categoria === categoria)
}

const produtos = [ 
    { nome: "Laptop", categoria: "Eletrônicos" }, 
    { nome: "Camisa", categoria: "Roupas" }, 
    { nome: "Smartphone", categoria: "Eletrônicos" } 
];

console.log(filtarPorCategoria(produtos,"Eletrônicos"))