//trabalhando com enum para simplificar a ficha"
var Funcao;
(function (Funcao) {
    Funcao[Funcao["Atriz"] = 0] = "Atriz";
    Funcao[Funcao["Padeiro"] = 1] = "Padeiro";
})(Funcao || (Funcao = {}));
let pessoa1 = {
    nome: 'maria',
    idade: 29,
    profissao: Funcao.Atriz
};
let pessoa2 = {
    nome: 'roberto',
    idade: 19,
    profissao: Funcao.Padeiro
};
let pessoa3 = {
    nome: 'laura',
    idade: 32,
    profissao: Funcao.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Funcao.Padeiro
};
