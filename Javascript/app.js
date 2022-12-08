
const formulario = document.querySelector("#formulario");

//crear el evento
formulario.addEventListener( "submit", validarFormulario )


//mis funciones
function validarFormulario(e){
    e.preventDefault();
    const nombreproducto = document.querySelector("#nombreproducto").value
    const descrip = document.querySelector("#descrip").value
    const categoria = document.querySelector("#categoria").value
    const cantidad = document.querySelector("#cantidad").value
    const precio = document.querySelector("#precio").value

 
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `${nombreproducto} `
    const respuesta2 = document.getElementById("respuesta2");
    respuesta2.textContent = ` ${descrip}` 
    const respuesta3 = document.getElementById("respuesta3");
    respuesta3.textContent = ` ${categoria}`
    const respuesta4 = document.getElementById("respuesta4");
    respuesta4.textContent = ` ${cantidad}`
    const respuesta5 = document.getElementById("respuesta5");
    respuesta5.textContent = ` ${precio}`          
}


//numero entre 1 y 6
let dado = Number((Math.random() * 6).toFixed(0));
console.log(dado)