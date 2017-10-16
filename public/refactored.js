var CATS_ARRAY = [
  {name: "Grace", favourite_food: "Anything I find", url: "https://www.battersea.org.uk/sites/default/files/animal_images/00Pb000001ARiWVEA1.jpeg"}
]

var createNewCat = function(){
  var newCat = document.createElement("ul");
  newCat.classList.add("cat");
  return newCat;
}

var createImage= function(url) {
var img = document.createElement("img")
img.src = url;
img.width = "500"
return img;
}

var createListItems = function(name){
  var listItem = document.createElement('li');
  listItem.textContent = name;
  return listItem;
}

var createListItems2 = function(favourite_food) {
  var listItem2 = document.createElement('li');
  listItem2.textContent = favourite_food;
  return listItem2;
}

var createListItems3 = function() {
  var listItem3 = document.createElement('li');
  return listItem3;
}

var appendElements = function(cats, newCat, listItem, listItem2, listItem3, img){
  newCat.appendChild(listItem);
  newCat.appendChild(listItem2);
  newCat.appendChild(listItem3);
  listItem3.appendChild(img);
  cats.appendChild(newCat);
}

var addCat = function(name, favourite_food, url){
  var newCat = createNewCat()
  var listItem = createListItems(name);
  var listItem2 = createListItems(favourite_food);
  var listItem3 = createListItems();
  var img = createImage(url);
  var cats = document.querySelector('section#cats');
  appendElements(cats, newCat, listItem, listItem2, listItem3, img);
}

var app = function(){
  for (var cat of CATS_ARRAY) {
    addCat(cat.name, cat.favourite_food, cat.url);
  }
}

window.addEventListener('DOMContentLoaded', app)
