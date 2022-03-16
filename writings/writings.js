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

readTextFile("../data/blog-posts-metadata.json", function (text) {
  var blogPostsMetadata = JSON.parse(text);

  const i = blogPostsMetadata.findIndex(
    (metadata) => metadata["href"] == document.location.pathname
  );
  const metadata = blogPostsMetadata[i];
  document.title = metadata["title"];

  const firstH1Element = document.querySelector("main h1.title");
  firstH1Element.textContent = metadata["title"];

  const dateElement = document.querySelector("main p.date");
  dateElement.textContent = metadata["date"];

  // There's a next blog post
  let hasNextPost = false;
  if (i > 0) {
    document.querySelector("nav-footer-component").shadowRoot.querySelector(".nav-p.right").textContent =
      blogPostsMetadata[i - 1]["title"];

    const a = document.querySelector("nav-footer-component").shadowRoot.querySelector(".nav-a.right");
    a.href = blogPostsMetadata[i - 1]["href"];
    a.removeAttribute("hidden");
    hasNextPost = true;
  }

  // There's a previous blog post
  let hasPrevPost = false;
  if (i + 1 < blogPostsMetadata.length) {
    document.querySelector("nav-footer-component").shadowRoot.querySelector(".nav-p.left").textContent =
      blogPostsMetadata[i + 1]["title"];

    const a = document.querySelector("nav-footer-component").shadowRoot.querySelector(".nav-a.left");
    a.href = blogPostsMetadata[i + 1]["href"];
    a.removeAttribute("hidden");
    hasPrevPost = true;
  }

  if (hasNextPost && !hasPrevPost) {
    document.querySelector("nav-footer-component").shadowRoot.querySelector(".footer-nav").style.justifyContent = "flex-end";
  } else if (!hasNextPost && hasPrevPost) {
    document.querySelector("nav-footer-component").shadowRoot.querySelector(".footer-nav").style.justifyContent = "flex-start";
  }
});
