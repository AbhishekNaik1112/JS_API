// Progression 1: create a function and fetch the API using axios

document.addEventListener("DOMContentLoaded", function () {
  const blog = document.getElementById("news");

  function getData() {
    axios
      .get(
        "https://gnews.io/api/v4/top-headlines?category=nation&lang=en&country=in&max=10&apikey=ea5a307a752a6d244d9bec25e8fd9a88"
      )
      .then((res) => {
        const articleList = res.data.articles;
        articleList.forEach((el) => {
          const newArticle = document.createElement("div");
          newArticle.setAttribute("class", "article");

          const title = document.createElement("h3");
          title.innerText = el.title;

          const img = document.createElement("img");
          img.setAttribute("src", el.image);

          const desc = document.createElement("p");
          desc.innerText = el.description;

          newArticle.appendChild(title);
          newArticle.appendChild(img);
          newArticle.appendChild(desc);

          blog.appendChild(newArticle);
        });
      });
  }

  getData();
});
