let datos = document.querySelector('#datos');
let titulo = document.querySelector('#titulo');
let caja = document.querySelector('#info');
document.addEventListener('mousemove', raton);
document.addEventListener('click', color);
window.addEventListener('keydown', teclado);

function raton(enlace) {
    caja.style.backgroundColor="White";
  titulo.innerText= `RATÓN`;
  datos.innerText = `
  Navegador: ${enlace.screenX}, ${enlace.screenY}
  Página: ${enlace.pageX}, ${enlace.pageY}`;
}

function teclado(enlace) {
    caja.style.backgroundColor="Lightblue";
  titulo.innerText= `TECLADO`;
  datos.innerText = `
  Carácter: ${enlace.key}
  Código: ${enlace.code}`;
}

function color(enlace) {
    caja.style.backgroundColor="Yellow";
    titulo.innerText= `RATÓN`;
  datos.innerText = `
  Navegador: ${enlace.screenX}, ${enlace.screenY}
  Página: ${enlace.pageX}, ${enlace.pageY}`;
}