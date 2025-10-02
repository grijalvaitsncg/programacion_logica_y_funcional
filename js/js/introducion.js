
let x = [1,2,3,4]
const y= [20,50,...x]
console.log(y)

const edadLegalEEUU = 21
const checkEstado = (edad, edadLegal)=>{
    return edad >= edadLegal ? "Eres mayor" : "Eres menor"
}

const persona =checkEstado (18,edadLegalEEUU)
console.log(persona)

//JSON
let arreglo=[
    { id:1,name:"Luis", age:20 },
    { id:2,name:"Luis 3", age:22 },
    { id:3,name:"Luis 1", age:24 },
    { id:4,name:"Luis Test", age:25 },
]
let ul = document.getElementById("lista")
var todo =""
arreglo.forEach((item)=>{
    item.age *= 10
    todo += `
        <li>${item.name} - EDAD: ${item.age}</li>
    `
})
console.log(todo)
ul.innerHTML = todo

console.log("ARREGLO ORIGINAL", arreglo);
var copia=arreglo.map( (item,index) =>{
   item.age *= 10
   return item
})
console.log("ARREGLO MODIFICADO", arreglo);
console.log("ARREGLO MODIFICADO", copia);

let url = "https://thesimpsonsapi.com/api/"
fetch(url+"characters").then(response=>{
    if(!response.ok){
        console.log("Error en la red")
    }
    return response.json()
}).then(data=>{
    console.log("Datos del personaje: ", data)
    var lis=""
    data.results.forEach(personaje=>{
        lis+=`
        <li>
            <img src="https://cdn.thesimpsonsapi.com/500${personaje.portrait_path}" width="200px" />
            <h2>${personaje.name}</h2>
        </li>`
    })
    ul.innerHTML = lis
})