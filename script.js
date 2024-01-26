var ratingValue = 0;
var rating = document.getElementById("rating");

function selectedRating(e) {
  ratingValue = e.target.textContent;
  let array = Array.from(document.getElementsByClassName("rate"));
  array.forEach((element) => {
    element.style.backgroundColor = "#28343c";
  });
  e.target.style.backgroundColor = "#7c8c9c";
}

function hoverElements(e) {
  if (e.target.style.backgroundColor != "#7c8c9c") {
    e.target.style.backgroundColor = "#fc740c";
  }
}

function nothover(e) {
  if (ratingValue != e.target.textContent) {
    e.target.style.backgroundColor = "#28343c";
  }
}

function submit() {
  if (ratingValue) {
    rating.textContent = ratingValue;
    document.getElementById("container2").style.display = "flex";
    document.getElementById("container1").style.display = "none";
  } else {
    alert("Select rating");
  }
}
