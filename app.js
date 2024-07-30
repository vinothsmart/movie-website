const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  arrow.addEventListener("click", () => {
    movieList[i].style.transform = `translateX(${
      movieList[i].computedStyleMap().get("transform")[0].x.value - 300
    }px)`;
  });
});
