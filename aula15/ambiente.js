let num = [5, 8, 2, 9, 3]//variaveis compostas
num.push(1)//acrescenta um numero na caixa de variaveis
num.sort()//organiza os vetores de forma ordenada
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)//length é um atributo, que serve para observar o comprimento do vetor(quantidade de variáveis)
console.log(`O pimeiro valor do vetor é ${num[0]}`)//identificação do vetor de forma isolada através de uso de [] para a variável pesquisada 
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
