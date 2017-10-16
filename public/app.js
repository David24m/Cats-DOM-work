var app = function() {


var addACat = function() {

  var newCat = document.createElement("ul")

  newCat.classList.add("cat")

  var listItem = document.createElement("li")
  listItem.textContent = "Name: Grace"

  var listItem2 = document.createElement("li")
  listItem2.textContent = "Favourite Food: Anything I find"

  var img = document.createElement("img")
  img.src = "https://www.battersea.org.uk/sites/default/files/animal_images/00Pb000001ARiWVEA1.jpeg"
  img.width = "500"

  var listItem3 = document.createElement("li")
  listItem3.appendChild(img)

  newCat.appendChild(listItem)
  newCat.appendChild(listItem2)
  newCat.appendChild(listItem3)

  var cats = document.querySelector("section#cats")
  cats.appendChild(newCat)
}

  console.dir(cats);

addACat();

};

window.addEventListener("DOMContentLoaded", app);
