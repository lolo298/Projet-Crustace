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
    let info = clone.getElementById("listContent");
    info.addEventListener("click", function () {
      let path = window.location.pathname;
      path = path.replace("menu.html", "");
      window.location.href = path + "?specie=" + i + "&state=info";
    });
    content.appendChild(clone);
  }
  let menu = document.getElementById("menu");
  let id = getUrlParams("specie");
  menu.addEventListener("click", function () {
    let path = window.location.pathname;
    path = path.replace("menu.html", "");
    window.location.href = path + "?specie=" + id;
  });

  let filter = document.getElementById("filters").querySelectorAll("input");
  console.log("🚀 ~ file: menu.js ~ line 34 ~ window.onload= ~ filter", filter);
  for (let i = 0; i < filter.length; i++) {
    let id = i++;
    console.log("🚀 ~ file: menu.js ~ line 37 ~ window.onload= ~ i", i);
    console.log("🚀 ~ file: menu.js ~ line 37 ~ window.onload= ~ id", id);

    let next;

    filter[i].addEventListener("click", function () {
      if (id >= filter.length) {
        next = filter[0];
        console.log("reset filter", 0);
      } else {
        next = filter[id];
        console.log("next filter", id);
      }

      console.log("🚀 ~ file: menu.js ~ line 38 ~ next", next);
    });
  }
};
