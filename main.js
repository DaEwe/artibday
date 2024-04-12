import "./style.css";

// read url params
const urlParams = new URLSearchParams(window.location.search);
const number = urlParams.get("nummer") | 1;

// fetch data file
fetch(`/data/${number}.json`)
  .then((response) => response.json())
  .then((data) => {
    // set hinweisnr
    document.getElementById("hinweisnr").innerText = number;
    // set zauberzahl
    document.getElementById("zauberzahl").innerText = data.zauberzahl;
    // set hinweis
    document.getElementById("hinweis").innerText = data.hinweis;
  });
