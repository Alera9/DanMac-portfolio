
function cambiaNombre(){
    const texto = document.getElementById("nombre");
    const contenedor = document.getElementById("contenedor-tarjeta")
    let nombre  =prompt("¿Cuál es tu nombre?");
    texto.innerText = nombre;
    let saludo = document.createElement('div');
    saludo.setAttribute("id","saludo-carta");

    saludo.innerHTML =`<div class="card mb-3" style="max-width: 40rem;">
    <div class="row g-0">
      <div class="col-md-4">
    <img src="./assets/img/gatito-saludando.png" class="card-img-top" alt="Gatito animado saludando"> </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Hola, ¿Cómo estas, ${nombre}?</h5>
        <p class="card-text">Que este día esté lleno de amor, risas y momentos inolvidables.</p>
      </div>
    </div>
  </div>
</div>`;
  contenedor.appendChild(saludo);


}
