spinner(true);
window.onload = async () => {
  const data = await getAllData();
  const template = document.getElementById("template");
  let content = document.getElementById("list");
  for (let i = 0; i < data.length; i++) {
    element = data[i];
    let clone = template.content.cloneNode(true);
    let img = clone.getElementById("speciesImg");
    img.src = element.image;
    img.alt = element.name;
    let name = clone.getElementById("speciesName");
    name.innerHTML = element.name;
    img.onload = () => {
      spinner(false);
    };
    if (i == 3 || i == 7 || i == 13) {
      let info = clone.getElementById("info");
      info.style.bottom = "17vh";
    }
    let info = clone.getElementById("info");
    info.addEventListener("click", function () {
      window.location.href = "/?specie=" + i;
    });
    content.appendChild(clone);
  }
  let menu = document.getElementById("menu");
  let id = getUrlParams("specie");
  menu.addEventListener("click", function () {
    window.location.href = "/?specie=" + id;
  });
};
