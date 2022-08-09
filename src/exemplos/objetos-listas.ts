const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profisao: 'desenvolvedora'
}



enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa{
    materias: string[]
}

const vanessa: Pessoa ={
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.JogadoraDeFutebol
    
}

const maria: Pessoa ={
    nome: 'Maria',
    idade: 22,
    profissao: Profissao.JogadoraDeFutebol
  
}

const jessica: Estudante ={
    nome:'jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'programação']
}

const monica: Estudante = {
    nome:'monica',
    idade: 21,
    materias: ['Matemática discreta', 'programação']
}

function listar(lista: string[]) {
    for(const item of lista) {
        console.log('- ', item);
    }
}

listar(monica.materias);