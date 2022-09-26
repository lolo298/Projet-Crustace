async function getAllData() {
  let response = await getData();
  let data = await response;
  return data;
}

function getUrlParams(needle) {
  let params = new URLSearchParams(window.location.search);
  return params.get(needle);
}
