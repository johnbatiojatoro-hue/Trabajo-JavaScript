const selectColor = document.getElementById("selectColor");
const btnColor = document.getElementById("btnColor");
const cuadroColor = document.getElementById("cuadroColor");

btnColor.addEventListener("click", function () {
  const color = selectColor.value;

  if (color === "") {
    alert("Selecciona un color primero");
    return;
  }

  cuadroColor.style.backgroundColor = color;
});

const selectImagen = document.getElementById("selectImagen");
const btnImagen = document.getElementById("btnImagen");
const cuadroImagen = document.getElementById("cuadroImagen");

btnImagen.addEventListener("click", function () {
  const ruta = selectImagen.value;

  if (ruta === "") {
    alert("Selecciona una imagen primero");
    return;
  }

  cuadroImagen.innerHTML = '<img src="' + ruta + '" alt="Imagen seleccionada">';
});