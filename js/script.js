


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