let valorany: any;
valorany = 3;
valorany = 'olá';
valorany = true;

let valorString: string = 'teste';
valorString = valorany;
let valorString2: string = 'testao';
valorString2 = valorany;

function somarString(string1: string, string2: string ) {
    console.log(string1 + string2);
}

somarString(valorString, valorString2);
somarString('olá, ', ' como vai?');