const API_KEY = "OlcQpnauyg3Y5i42rj9yjeYftTHP3K5Y";

document.addEventListener("DOMContentLoaded", init);
function init() {
  const searchButton = document.getElementById("btnSearch");
  searchButton.addEventListener("click", (event) => {
    event.preventDefault(); // to stop the page reload

    let url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=`;
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
        for (let i = 0; i < content.data.length; i++) {
          let fig = document.createElement("figure");
          let img = document.createElement("img");
          let fc = document.createElement("figcaption");
          img.src = content.data[i].images.preview_gif.url;
          img.alt = content.data[i].title;
          fc.textContent = content.data[i].title;
          fig.appendChild(img);
          fig.appendChild(fc);
          let out = document.querySelector(".out");
          out.insertAdjacentElement("afterbegin", fig);
        }

        document.querySelector("#search").value = "";
      })
      .catch((err) => {
        console.error(err);
        console.log("occured error");
      });
  });
}
