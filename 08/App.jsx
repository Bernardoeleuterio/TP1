export default function CalcularTotalItens(produtos) {
    if (!Array.isArray(produtos)) {
        return []; 
    }
    return itens.reduce((total,item)=> total + (item.quantidade * item.precoUnitario), 0)
}

const itens = [ 
    { nome: "Laptop", quantidade: 1, precoUnitario: 1000 }, 
    { nome: "Tablet", quantidade: 2, precoUnitario: 400 }, 
    { nome: "Smartphone", quantidade: 1, precoUnitario: 1500 } 
];

console.log(CalcularTotalItens(itens))