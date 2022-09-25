window.onload = async () => {
  let divider = document.getElementById("divide");
  let element = document.getElementById("card").querySelector("div");
  divider.style.width = element.offsetWidth + 40 - 8 + "px";

  let info = document.getElementById("info");
  info.addEventListener("click", function () {
    let menu = document.getElementById("mainWrapper");
    menu.classList.add("info");
  });
};

async function getAllData() {
  let response = await getData();
  let data = await response;
  return data;
}
