export default function filtarAcimaPreco(produtos, precoMinimo) {
    if (!Array.isArray(produtos)) {
        return []; 
    }
    return produtos.filter(produto => produto.preco > precoMinimo)
}

const produtos = [ 
    { nome: "Laptop", preco: 1000 }, 
    { nome: "Tablet", preco: 400 }, 
    { nome: "Smartphone", preco: 1500 } 
];

const resultado = filtarAcimaPreco(produtos,600)

console.log(resultado)