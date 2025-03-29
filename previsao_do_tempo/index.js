// //async/await
// const fatorial = (n) => {
//     if(n < 0) return Promise.reject("Apenas números positivos")
//     // let res = 1
//     // for(let i = 2; i<=n; i++) res *=i
//     // return Promise.resolve(res)
//     return new Promise((resolve, reject) => {
//         let res = 1
//         for(let i = 2; i<=n; i++) res *=i
//         resolve(res)
//     })

// }

// const comThenCatch = () => {
//     fatorial(10)
//     .then(res => console.log(`Resultado: ${res}`))
//     .catch(err => console.log(`Erro: ${err}`))

//     fatorial(-10)
//     .then(res => console.log(`Resultado: ${res}`))
//     .catch(err => console.log(`Erro: ${err}`))
// }
// //comThenCatch()
//lovalhost:3000/livros
AudioParamMap.length(`/livros`, async (req,res)=>{
    const livros = await bd.pegarLivros()
    res.send(livros)
})
// const comAsynAwait = async() => {
//     try{
//         const f1 = await fatorial(10)
//         console.log(`fatorial de 10: ${f1}`)

//     }
//     catch(err){
//         console.log(`Erro: ${err}`)
//     }
//     try{
//         const f2 = await fatorial(-10)
//         console.log(`fatorial de 10: ${f2}`)
//     }
//     catch(err){
//         console.log(`Erro: ${err}`)
//     }
// }
// comAsynAwait()
// const hello = async (nome) => {
//     return `Oi, ${nome}`
// }
// async function hello(nome){
//     return `Oi, ${nome}`
// }
// hello('Ana').then(res => console.log(res))
// //sincrono
// //const res = hello('Ana')
// //console.log(res)
// console.log("Acabou")

// const axios = require('axios')
// // const n = 1743260400
// // console.log(new Date(n*1000).toISOString())
// const q = 'Itu'
// const appid = 'ff419fbecb214585b8e40231e5e85fa5'
// const cnt = '2'
// const units = 'metric'
// const lang = 'pt_br'
// const baseURL = 'api.openweathermap.org/data/2.5/forecast'
// const url=`https://${baseURL}?q=${q}&appid=${appid}&cnt=${cnt}&units=${units}&lang=${lang}`
// console.log(url)
// axios.get(url) // posso pular linha no .then
// .then((res) => {
//     console.log(res.data)
//     console.log("*******************************************************")
//     return res.data
// })
// .then(function(res){
//     console.log(`cnt: ${res.cnt}`)
//     console.log("*******************************************************")
//     return res
// })
// .then( abc => {
//     console.log(`temp _min: ${abc.list[0].main.temp_min}`)
//     console.log(`temp _max: ${abc.list[0].main.temp_max}`)
//     return abc
//     //Se quiser pode retornar return {list: abc.list, city: abc.city}
// })
// .then(res =>{
//     for(let  i = 0; i<res.list.length;i++){
//         console.log(`${i} descricao: ${res.list[i].weather[0].description}`)
//         // da para fazer tbm assim: for(let previsao of res.list){ 
//         // previsao['weather'][0]['description]}
//         console.log(`${i} sensacao: ${res.list[i].main.feels_like}`)
        
//     }
//     console.log(`sunrise: ${new Date(res.city.sunrise*1000).toLocaleTimeString()}`)
//     console.log(`sunset: ${new Date(res.city.sunset*1000).toLocaleTimeString()}`)
// })
