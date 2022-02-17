const API_KEY = "OlcQpnauyg3Y5i42rj9yjeYftTHP3K5Y";

document.addEventListener("DOMContentLoaded", init);
function init() {
  const searchButton = document.getElementById("btnSearch");
  searchButton.addEventListener("click", (event) => {
    event.preventDefault(); // to stop the page reload

    let url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=1&=`;
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);
    console.log(url);
    console.log("something");

    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        // data, pagination, meta
        console.log(content.data);
        console.log("META", content.meta);
        let fig = document.createElement("figure");
        fig.style.backgroundColor = "red";
        let img = document.createElement("img");
        let fc = document.createElement("figcaption");
        // img.src = content.data[0].images.downsized.url;
        // img.alt = content.data[0].title;
        // fc.textContent = content.data[0].title;
        fig.appendChild(img);
        fig.appendChild(fc);
        let out = document.querySelector(".out");
        out.insertAdjacentElement("afterbegin", fig);
        document.querySelector("#search").value = "";
      })
      .catch((err) => {
        console.error(err);
        console.log("occured error");
      });
  });
}
