//alert("Hola este es mi Javascript");

document.addEventListener("DOMContentLoaded", function(){
    let texto_quien_soy = document.getElementById("cambio");
    console.log(texto_quien_soy.innerText);

    if(texto_quien_soy.innerText == "¿Quien soy?"){
        texto_quien_soy.innerText = "Yo soy";
    }

    else{
        console.log("No es igual");
    }

    let edad = "30";
    let municipio = "Quimbaya Quindio";

    let parrafo = document.querySelector(".parrafo");


    function cambiartext(edad, municipio){
        let contenido = `Soy de profesion electronico y estudiante de ingeniera de sistemas, tengo ${edad} años y soy de ${municipio} Colombia`;
        return contenido;
    };

    parrafo.innerText = cambiartext (edad,municipio);
});

