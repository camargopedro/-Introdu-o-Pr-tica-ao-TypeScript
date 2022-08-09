//trabalhando com enum para simplificar a ficha"

enum Funcao {
    Atriz,
    Padeiro
}

type Cadastrado = {
    nome: string,
    idade: number,
    profissao: Funcao
}

let pessoa1: Cadastrado = {
    nome: 'maria',
    idade: 29,
    profissao: Funcao.Atriz
};

let pessoa2: Cadastrado = {
    nome: 'roberto',
    idade: 19,
    profissao: Funcao.Padeiro
};

let pessoa3: Cadastrado = {
    nome: 'laura',
    idade: 32,
    profissao: Funcao.Atriz
};

let pessoa4: Cadastrado = {
    nome: "carlos",
    idade: 19,
    profissao: Funcao.Padeiro
}