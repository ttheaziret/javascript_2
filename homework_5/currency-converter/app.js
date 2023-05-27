const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const eur = document.querySelector("#eur");

const convert = (elem, target, rate) => {
  elem.addEventListener("input", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();

    request.addEventListener("load", () => {
      const data = JSON.parse(request.response);
      if (target === usd) {
        target.value = (elem.value / data.som).toFixed(2);
        eur.value = (elem.value / (data.som / data.eur)).toFixed(2);
      } else if (target === som) {
        target.value = (elem.value * data.som).toFixed(2);
        eur.value = (elem.value * data.eur).toFixed(2);
      } else if (target === eur) {
        target.value = (elem.value / data.eur).toFixed(2);
        usd.value = (elem.value * (data.som / data.eur)).toFixed(2);
      }

      if (elem.value === "") {
        target.value = "";
        usd.value = "";
        eur.value = "";
      }
    });
  });
};

convert(som, usd, 1); 
convert(usd, som, 1); 
convert(eur, som, 1);

  