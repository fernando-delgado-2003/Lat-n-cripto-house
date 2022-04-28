import { getSignsNormal } from "./components/firebase.js";

const signsNormal = getSignsNormal();
let templateCard = "",
  templateCardTp = "";

signsNormal
  .then((data) => {
    data.forEach((doc) => {
      doc = doc.data();
      let statusSign = "";
      if (doc.status == "waiting") {
        statusSign = "Espera";
      } else if (doc.status == "start") {
        statusSign = "Iniciado";
      } else {
        statusSign = "Cancelado";
      }
      //CAMBIAR AL FINAL POR MINUSCULA
      console.log(doc.Tps);
      doc.Tps.forEach((tp, i) => {
        templateCardTp += `
      <li>Tp${i + 1} <span class="price">${tp.tp}</span> ${
          tp.status
            ? '<span class="check-tp"><i class="bx bx-check"></i></span>'
            : ""
        }</li>
      `;
      });
      templateCard += `
    <article class="card ${doc.status}">
    <h3>${doc.crypto}/${doc.stableCoin}</h3>
    <ul>
      <li>Entrada 1: <span class="price">${doc.entry1}</span></li>
      <li>Entrada 2: <span class="price">${doc.entry2}</span></li>

    </ul>
    <ul class="tps">
    </ul>
    <p class="status">Estado: <span>${statusSign}</span></p>
  </article>
    `;
    });
    document.querySelector("#cards-signs").innerHTML = templateCard;
    document.querySelector("#cards-signs .tps").innerHTML = templateCardTp;
  })
  .catch((error) => {
    console.log(error);
  });
