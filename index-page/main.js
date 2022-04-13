// https://stackoverflow.com/a/34579496
function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

const mainElement = document.querySelector("main");
function createCard(blogPostMetadata) {
  const a = document.createElement("a");
  a.setAttribute("class", "card");
  a.setAttribute("href", blogPostMetadata["href"]);

  const img = document.createElement("img");
  img.setAttribute("src", blogPostMetadata["card-img-src"]);
  img.setAttribute("alt", blogPostMetadata["card-img-alt"]);
  const imgDiv = document.createElement("div");
  imgDiv.setAttribute("class", "imgDiv");
  imgDiv.appendChild(img);

  const cardTextDiv = document.createElement("div");
  cardTextDiv.setAttribute("class", "cardTextDiv");

  const h1 = document.createElement("h1");
  h1.innerText = blogPostMetadata["title"];

  const pDesc = document.createElement("p");
  pDesc.innerText = blogPostMetadata["card-desc"];

  const pDate = document.createElement("p");
  pDate.innerText = blogPostMetadata["date"];
  pDate.setAttribute("class", "date");

  cardTextDiv.appendChild(h1);
  cardTextDiv.appendChild(pDesc);
  cardTextDiv.appendChild(pDate);

  a.appendChild(imgDiv);
  a.appendChild(cardTextDiv);
  mainElement.appendChild(a);
}

readTextFile("data/blog-posts-metadata.json", function (text) {
  var blogPostsMetadata = JSON.parse(text);

  for (const blogPostMetadata of blogPostsMetadata) {
    createCard(blogPostMetadata);
  }
});
