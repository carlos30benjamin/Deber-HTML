const contenido = document.getElementById("contenido");

let nom = "Juan Inguillay";
let edad = 24

let edades = [23,45,2,42];

for(let i = 0; i < edades.length; i++){
    addContent(`<h3>La edad es de ${i} años</h3>`);
}

addContent(`<h2>${nom}</h2><h3>${edad}</h3>`)

if (edad > 18){
    alert("Puedes entrar en la disco");
}else if(edad > 13){
    alert("Puedes entrar solo con un adulto");
}else{
    alert("No puedes entrar");
}



for(let i = 0; i <10; i++){
    console.log(i);
}

for(let i = 0; i <=10; i++){
    addContent("<h3>" + i + "</h3>");
}


function addContent(newContent){
    console.log(newContent)
    contenido.innerHTML += newContent;
}

addContent("Hola programador");