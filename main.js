//document.querySelector('.tecla_pom').onclick = tocaSomPom;
const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

function tocaSomPom() {
document.querySelector('#som_tecla_pom').play();
}

while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSomPom;
    contador++
    console.log (contador)
}
