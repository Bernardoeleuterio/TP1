export default function calcularMediaAvaliacoes() {

    const soma = avaliacoes.reduce((acumulador, avaliacoes) => acumulador + avaliacoes, 0)
    const media = soma / avaliacoes.length;

    return media;
}

const avaliacoes = [5, 2, 10, 7, 3];

const media = calcularMediaAvaliacoes(avaliacoes)

console.log(media)