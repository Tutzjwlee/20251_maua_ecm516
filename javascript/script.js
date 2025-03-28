// ---------------------- Processamento sincrono (bloqueante) e processamento assincrono (nao bloqueante) ----------------------

//(^-^)

// const calculoRapidinho = (n) => {
//     // caso n seja negativo, devolva uma promise no estado rejected com a mensagem de erro:"Apenas positivos, por favor"
//     // return new Promise((resolve,reject)=>{
//     //     resolve(n/2 *(n+2))
//     // })
//     return n < 0 ?Promise.reject('Apenas positivos, por favor') : Promise.resolve((n/2)*(n+1))

    
// }
// const resultado = calculoRapidinho(-10)
// resultado.then(res=>{
//     console.log(`Funcionou ${res}`)
// })
// .catch(err=>{
//     console.log(`Error: ${err}`)
// })
//rxjs -> biblioteca para processamento assincrono

// function calculoDemorado(n){
//     const p = new Promise((resolve, reject)=>{
//         let ac = 0
//         for(let i = 1; i<=n;i++) ac += i
//         resolve(ac)
//     })
//     return p

// }

// const resultado = calculoDemorado(10)
// resultado.then((res) => {
//     console.log(`Funcionou: ${res}`)
//     calculoDemorado(res).then(res2 => {
//         console.log(`Funcionou 2: ${res2}`)
//     })
// })
// .catch(function(err){
//     console.log(`Erro: ${err}`)
// })
// console.log(`Continuo fazendo outras coisas enquanto isso...`)
// 
// const trataResultado = (resultado) => {
//     console.log(resultado)
// }
// computacaoDemorada(trataResultado)
// .console.log(bla)
// const fs = require('fs')
// const abrirArquivo = function(nomeArquivo){

//     const exibirConteudo = function(erro, conteudo){
//         if(erro){
//             console.log(`Deu erro: ${erro}`)
//         }
//         else{
//             console.log(`Funcionou: ${conteudo.toString()}`)
//             const dobro = Number(conteudo.toString()) * 2
//             const finalizar = (erro) =>{
//                 if(erro){
//                     console.log(`A escrita deu erro: ${erro}`)
//                 }
//                 else{
//                     console.log('A escrita funcionou')
//                 }
//             }
//             fs.writeFile('dobro.txt',dobro.toString(),finalizar)
//         }
//     } //callback registra e define para futuras interacoes(um dia vai ser chamada)

//     //Assincrono
//     fs.readFile(nomeArquivo, exibirConteudo)
//     console.log('Fim da função exibirConteudo')
// }
// abrirArquivo("arquivo.txt")

// const oi = () => console.log("oi")
//IO-Bound: Input/Output
//CPU-Bound
// console.log("Comecou.....")
// oi()
// console.log('terminou')
// function eAgora(){
//    let cont = 1
//    function f1(){
//        console.log(cont);
//    }
// const pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco:{
//         rua : 'Rua B',
//         numero: 121,
//         bairro: 'j',
//         cidade: {
//             nome: 'São Paulo',
//             populacao: 12000000
//         }
//     }
// }
// console.log(pessoa.endereco.rua)
// console.log(pessoa['endereco']['cidade']['populacao'])
// console.log(pessoa.endereco['cidade'].nome)const pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco:{
//         rua : 'Rua B',
//         numero: 121,
//         bairro: 'j',
//         cidade: {
//             nome: 'São Paulo',
//             populacao: 12000000
//         }
//     }
// }
// console.log(pessoa.endereco.rua)
// console.log(pessoa['endereco']['cidade']['populacao'])
// console.log(pessoa.endereco['cidade'].nome)
// uma concessionaria tem cnpj e endereco. Ela possui alguns carros. Cada carro tem marca, modelo e ano de fabricacao.

// const concessionaria = {
//     nome: 'Concessionaria A',
//     cnpj: '123456789',
//     endereco: {
//         rua: 'Rua A',
//         numero: 123,
//         bairro: 'Bairro 1',
//     },
//     carros: [
//         {
//             marca: 'Chevrolet',
//             modelo: 'Onix',
//             anoFabricacao: 2020,
//         },
//         {
//             marca: 'Ford',
//             modelo: 'Fiesta',
//             anoFabricacao: 2020,
//         },
//         {
//             marca: 'Chevrolet',
//             modelo: 'Onix',
//             anoFabricacao: 2020,
//         }
//     ]
// }
// console.log(concessionaria.carros[0].marca)

// for(let i = 0; i<concessionaria.carros.length;i++){
//     console.log(concessionaria.carros[i].modelo)
// }

// for(let carro of concessionaria.carros){
//     console.log(carro.modelo)
// }
//uma calculadora que faz operacoes de soma e subtracao, envolvendo apenas dois operandos
//1.soma deve ser feita com uma funcao regular(function)
//2.a subtracao deve ser feita com uma arrow function cujo corpo nao pode ter nem {} e nem return
// no final/ mostre ela em funcionamento, ou seja, some 2 com 3, e subtraia 3 e 5

// const calculadora = {
//     somar:function(a,b){
//         return a+b
//     },
//     subtracao: (a,b) => a-b
// }
// console.log(calculadora.somar(3,5))
// console.log(calculadora.subtracao(5,3))
//    cont++
//    function f2(){
//        console.log(cont);
//    }
//    return {f1, f2}
// }   
// const eAgoraResult = eAgora()
// eAgoraResult.f1()
// eAgoraResult.f2()
// function eAgora(){
    //    let cont = 1
    //    function f1(){
    //        console.log(cont);
    //    }
    //    cont++
    //    function f2(){
    //        console.log(cont);
    //    }
    //    return {f1, f2}
    // }   
    // const eAgoraResult = eAgora()
    // eAgoraResult.f1()
    // eAgoraResult.f2()    

// function f(){
//     let nome = 'Ana'
//     function g(){
//         console.log(nome);
//     }
//     g()
// }
// f()
// function ola(){
//     let nome = 'Ana'
//     return function(){
//         console.log(`ola, ${nome}`)
//     }
// }
// ola()()


// const saudacoesFactory = (saudacao, nome) => () => {console.log(`${saudacao}, ${nome}`)}
// const saudacoesFactory = function(saudacao, nome){
//     let b;
//     return function(){
//         console.log(`${saudacao}, ${nome}`)
//     }

// }
// const olaAna = saudacoesFactory('Oi', 'Ana')
// const tchauAna = saudacoesFactory('Tchau', 'Ana')
// olaAna()
// tchauAna()

// // function g(){
//     const outraFuncao = function(){
//         return function a(){
//             console.log('fui chamada')
//             return 1
//         }
//     }
//     return outraFuncao
// }
// const gResult = g()
// // gResult()
// // f(g())
// function f(funcao){
//     return funcao()
// }
// // g()()
// console.log(f(g()()))
// f(function(){console.log('fui passada como parametro')})

// let umaFuncao = function() {
//     console.log('fui armazenada em uma variavel');
// }
// umaFuncao();

//programacao imperativa
// const valores = [1,2,3,4]
// const soma = valores.reduce((acumulador, valor) => acumulador + valor,0) // o zero 'e a identidade , na soma n + 0 = n, na multiplicacao n * 1 = n ( 1 e identificador em multiplicacao)
// console.log(soma)
//const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex','Cristina'];
//vet = []
// for (let i = 0; i < nomes.length; i++) {
//     if(nomes[i].charAt(0) === 'A'){
//         vet.push(nomes[i]);
//     }
// }
// console.log(vet);
// ---------------------------------------------- Declarativo---------------------------------------------- //
// const resultante = nomes.filter(nome => nome.startsWith('A')|| nome.startsWith('a')); // O(1)
//const resultante = nomes.filter(n => nome.toLowerCase().startsWith('a')); // O(n)
// console.log(resultante);
// ---------------------------------------------- Imperativo ---------------------------------------------- //
//const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex','Cristina'];
// vet = []
// for (let i = 0; i < nomes.length; i++) {

//         vet.push(nomes[i].charAt(0));
    
// }
// console.log(vet);
// ---------------------------------------------- Declarativo---------------------------------------------- //
//const resultante = nomes.map(nome => nome.charAt(0)); // O(1)
//const resultado = nomes.every(n => n.startsWith('A')) // O(n)
// const resultado = nomes.some(n => n.startsWith('A')) // O(n)
// console.log(resultado);
