async function getAllData() {
  let response = await getData();
  let data = await response;

  return data;
}

function getUrlParams(needle) {
  let params = new URLSearchParams(window.location.search);
  return params.get(needle);
}

function spinner(state) {
  let spinner = document.querySelector(".spinner");
  var path = window.location.pathname;
  let main;

  if (path == "/") {
    main = document.querySelector(".content");
  } else if (path == "/menu.html") {
    main = document.getElementById("list");
  }
  if (state) {
    main.style.visibility = "hidden";
    spinner.style.display = "flex";
  } else {
    main.style.visibility = "";
    spinner.style.display = "none";
  }
}
