export default function CalcularPrecoTotal() {
    return preco * quantidade
}

let preco = parseFloat(prompt("Digite o preço do produto"))

let quantidade = parseFloat(prompt("Digite a quantidade do produto")); 

let precototal = CalcularPrecoTotal(preco, quantidade)

alert ("Preço total: R$" + precototal.toFixed(2))