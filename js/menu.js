window.onload = async () => {
  const data = await getAllData();
  const template = document.getElementById("template");
  let content = document.getElementById("list");
  data.forEach((element) => {
    let clone = template.content.cloneNode(true);
    let img = clone.getElementById("speciesImg");
    img.src = element.image;
    img.alt = element.name;
    let name = clone.getElementById("speciesName");
    name.innerHTML = element.name;

    content.appendChild(clone);
  });
};
