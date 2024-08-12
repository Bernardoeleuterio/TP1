export default function encontrarProdutoProNome(produtos,nome) {
  if (!Array.isArray(produtos)) {
    return []; 
}
    return produtos.filter(produto => produto.nome === nome)
}

const produtos = [ 
    { nome: "Laptop", preco: 1000 }, 
    { nome: "Tablet", preco: 400 }, 
    { nome: "Smartphone", preco: 1500 } 
  ];

  console.log(encontrarProdutoProNome(produtos,"Laptop"))