let header = document.querySelector("#header"),
    headerBordeInferior = document.querySelector("#borde-inferior");

window.addEventListener('scroll', function() {
  let headerPosition = header.getBoundingClientRect().top;

  if (headerPosition <= 0) {
    headerBordeInferior.style.width = "70vw";
    headerBordeInferior.style.backgroundColor = "#19140c";
  } 
  if (headerPosition > -0.25) {
    headerBordeInferior.style.width = "20%";
    headerBordeInferior.style.backgroundColor = "#111";
  } 
})