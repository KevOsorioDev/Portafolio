let header = document.querySelector("#header"),
    headerBordeInferior = document.querySelector("#borde-inferior"),
    articleContenido = document.querySelector(".article-contenido"),
    cursorArticle = document.querySelector(".cursor-article");

window.addEventListener('scroll', () => {
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

articleContenido.addEventListener("mouseover", e =>{
  cursorArticle.setAttribute("style", `display: block`)
})

articleContenido.addEventListener("mouseleave", e =>{
  cursorArticle.setAttribute("style", `display: none;`)
})

articleContenido.addEventListener("mousemove", e =>{
  let y = e.clientY,
      x = e.clientX
  cursorArticle.style.top = y + "px";
  cursorArticle.style.left = x + "px";
})


// -------------------------------

function horaActual() {
  let date = new Date(),
      hh = date.getHours(),
      mm = date.getMinutes();

      hh = (hh < 10) ? "0" + hh : hh;
      mm = (mm < 10) ? "0" + mm : mm;
      // hh = (hh < 12) ? mm + "AM" : mm + "PM";
      if (hh < 12) mm = `${mm} AM`;
      if (hh > 12) mm = `${mm} PM`;

      mm = (mm < 10) ? "0" + mm : mm;

      let time = hh + ":" + mm;
      let reloj = document.querySelector(".reloj")
      reloj.innerHTML = `Hora local: ${time}`;
}

setInterval(horaActual, 1000);