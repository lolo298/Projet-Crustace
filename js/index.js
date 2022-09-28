spinner(true);
window.onload = async () => {
  let divider = document.getElementById("divide");
  let element = document.getElementById("card").querySelector("div");
  divider.style.width = element.offsetWidth + 40 - 8 + "px";
  let path = window.location.pathname;
  let page = path.split("/").pop();

  let info = document.getElementById("info");
  info.addEventListener("click", function () {
    let menu = document.getElementById("mainWrapper");
    menu.classList.add("info");
    let menuContent = document.getElementById("info-content");
    menuContent.classList.toggle("show");
    menuContent.classList.toggle("hide");
  });
  let close = document.getElementById("close");
  close.addEventListener("click", function () {
    let menu = document.getElementById("mainWrapper");
    menu.classList.remove("info");
    let menuContent = document.getElementById("info-content");
    menuContent.classList.toggle("show");
    menuContent.classList.toggle("hide");
  });
  let current = getUrlParams("specie");

  let data = await getAllData();
  let rng = Math.floor(Math.random() * data.length);
  if (current != null) {
    rng = current;
  }
  let defaultData = data[rng];

  let image = document.getElementById("crustace");
  let name = document.getElementById("card").querySelector("h2");
  if (rng == 7) {
    name.style.transform = "translate(-70px, -100px)";
    image.style.transform = "translate(0px, 0px)";
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
  image.onload = () => {
    spinner(false);
  };
  let menu = document.getElementById("menu");
  menu.addEventListener("click", function () {
    window.location.href = "menu.html?specie=" + rng;
  });
  let next = document.getElementById("next");
  next.addEventListener("click", function () {
    rng++;
    if (rng >= data.length) {
      rng = 0;
    }
    defaultData = data[rng];
    console.log("🚀 ~ file: index.js ~ line 64 ~ defaultData", defaultData);
    name = document.getElementById("name");
    name.innerHTML = defaultData.name;
    name = document.getElementById("card").querySelector("h2");
    name.innerHTML = defaultData.name;
    image.src = defaultData.image;
    taille.innerHTML = defaultData.texts.taille;
    qte.innerHTML = defaultData.texts.nombre;
    periode.innerHTML = defaultData.texts.periode;
    if (rng == 7) {
      name.style.transform = "translate(-70px, -100px)";
      image.style.transform = "translate(0px, 0px)";
    } else {
      name.style.transform = null;
      image.style.transform = null;
    }
  });
};
