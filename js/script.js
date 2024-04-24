let header = document.querySelector("#header"),
    headerLinks = document.querySelectorAll(".header-links"),
    divQueSeHacer = document.querySelectorAll(".div-que-se-hacer");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset;

    if (scrollTop <= 0) {
      header.classList.remove("scrollAbajo");
    } 
    else{
      header.classList.add("scrollAbajo");
    }
  });

divQueSeHacer.forEach(e => {
    e.addEventListener("mouseover", function() {
    this.style.width = "40vw"
});  
})

divQueSeHacer.forEach(e => {
  e.addEventListener("mouseout", function() {
  this.style.width = "8vw"
  
}); 
})


// -------------------------------

function disponibilidad() {
  let divDisponibilidad = document.querySelector(".div-disponibilidad");

  if (divDisponibilidad.style.backgroundColor === "rgb(28, 190, 41)") {
    divDisponibilidad.style.backgroundColor = "#36793b";
  } else {
    divDisponibilidad.style.backgroundColor = "#1cbe29";
  }
}

setInterval(disponibilidad, 1000);

// -------------------------------


function horaActual() {
  let date = new Date(),
      hh = date.getHours(),
      mm = date.getMinutes();

      hh = (hh < 10) ? "0" + hh : hh;
      mm = (mm < 10) ? "0" + mm : mm;
      // hh = (hh < 12) ? mm + "AM" : mm + "PM";
      if (hh < 12) mm = `${mm} AM`;
      if (hh >= 12) mm = `${mm} PM`;

      mm = (mm < 10) ? "0" + mm : mm;

      let time = hh + ":" + mm;
      let reloj = document.querySelector(".reloj")
      reloj.innerHTML = `Hora local (GMT-3): ${time}`;
}

setInterval(horaActual, 1000);