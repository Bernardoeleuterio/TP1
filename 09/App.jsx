export default function AgruparporCategoria(produtos) {
    if (!Array.isArray(produtos)) {
        return []; 
    }
    return produtos.reduce((acumulador, produto) => {
        const {categoria, nome} = produto;
        if (!acumulador[categoria]) {
            acumulador[categoria] = [];
          }
        acumulador[categoria].push(nome)
        return acumulador;
    },{})
}
const produtos = [ 
    { nome: "Laptop", categoria: "Eletrônicos" }, 
    { nome: "Camisa", categoria: "Roupas" }, 
    { nome: "Smartphone", categoria: "Eletrônicos" }, 
    { nome: "Calça", categoria: "Roupas" }, 
    { nome: "Fone de Ouvido", categoria: "Eletrônicos" } 
  ];

  console.log(AgruparporCategoria(produtos))