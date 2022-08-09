// Como podemos rodar isso em um arquivo .ts sem causar erros? 

const funcionario1: {codigo: number, nome: string} = {
    codigo: 15,
    nome: 'Pedro'
}

interface Funcionario {
    codigo: number,
    nome: string
};

let funcionario2: Funcionario = {
    codigo: 25,
    nome: 'Ana'
}