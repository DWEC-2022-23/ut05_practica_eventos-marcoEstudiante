document.getElementById("enlace_1").addEventListener("click",Ocultar);
document.getElementById("enlace_2").addEventListener("click",Ocultar);
document.getElementById("enlace_3").addEventListener("click",Ocultar);


function Ocultar(enlace) {
    switch (enlace.target.id) {
        case "enlace_1":
            var texto = document.getElementById("contenidos_1");
        if(texto.style.display === "none"){
            texto.style.display = "block";
            document.getElementById("enlace_1").innerHTML="Ocultar contenidos";
        }
        else{
            texto.style.display = "none";
            document.getElementById("enlace_1").innerHTML="Abrir contenidos";
        }
        break;
        case "enlace_2":
            var texto = document.getElementById("contenidos_2");
        if(texto.style.display === "none"){
            texto.style.display = "block";
            document.getElementById("enlace_2").innerHTML="Ocultar contenidos";
        }
        else{
            texto.style.display = "none";
            document.getElementById("enlace_2").innerHTML="Abrir contenidos";
        }
        break;
        case "enlace_3":
            var texto = document.getElementById("contenidos_3");
        if(texto.style.display === "none"){
            texto.style.display = "block";
            document.getElementById("enlace_3").innerHTML="Ocultar contenidos";
        }
        else{
            texto.style.display = "none";
            document.getElementById("enlace_3").innerHTML="Abrir contenidos";
        }
        break;

    }
}



