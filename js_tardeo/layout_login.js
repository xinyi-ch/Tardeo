/* Crear la funcion */

function loguear() {
    let user=document.getElementById("usuario").value; 
    let pass=document.getElementById("contraseña").value;

    if(user=="Ada" && pass=="1234") {
        window.location="layout_perfil_usuario.html";

    }

    else {
        alert("Datos incorrectos");
    }
}

function entrar(){
    window.location="layout_otros_eventos.html"
}

function entrarMisEventos(){
    window.location="layout_mis_eventos.html"
}

