window.onload = async () => {
  let divider = document.getElementById("divide");
  let element = document.getElementById("card").querySelector("div");
  divider.style.width = element.offsetWidth + 40 - 8 + "px";

  let info = document.getElementById("info");
  info.addEventListener("click", function () {
    let menu = document.getElementById("mainWrapper");
    menu.classList.add("info");
    let menuContent = document.getElementById("info-content");
    menuContent.classList.toggle("show");
  });

  let data = await getAllData();
  let rng = Math.floor(Math.random() * data.length);

  let defaultData = data[rng];
  let image = document.getElementById("crustace");
  let name = document.getElementById("card").querySelector("h2");
  if (rng == 7) {
    name.style.transform = "translate(-70px, -100px)";
  }
  image.src = defaultData.image;
  name.innerHTML = defaultData.name;
  name = document.getElementById("name");
  name.innerHTML = defaultData.name;
  let taille = document.getElementById("capture");
  let qte = document.getElementById("quantite");
  let periode = document.getElementById("periode");
  taille.innerHTML = defaultData.texts.taille;
  qte.innerHTML = defaultData.texts.nombre;
  periode.innerHTML = defaultData.texts.periode;
};

async function getAllData() {
  let response = await getData();
  let data = await response;
  return data;
}
