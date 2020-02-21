// var apikey = "PPActQ29mRiBim9iLV63aSyam0o0atZ1k";
// var url = `https://api.giphy.com/v1/gifs/search?api_key=PPActQ29mRiBim9iLV63aSyam0o0atZ1k&q=${title}&limit=10&offset=0&rating=G&lang=en`;
// $.ajax({res}).done( callback_function) request and then the response will be ready in the callback function.
// var responseReady = false;
// var limitScrollTime = 0;

console.log("giphy project");

var form = document.querySelector("form");
var input = document.querySelector("input");
var searchBtn = document.querySelector("button");
var divTag = document.querySelector("div");
var imgTag = document.querySelector("img");
var loadMoreBtn = document.querySelector(".load-more-btn");

var createImages = function(img) {
  var elem = document.createElement("img");
  var imageUrl = img.images.original.url;
  elem.setAttribute("src", imageUrl);
  divTag.appendChild(elem);
};

var search = function() {
  var handleImage = function(res) {
    console.log(res.data);

    for (let i = 0; i < res.data.length; i++) {
      createImages(res.data[i]);
    }
  };
  var title = input.value;
  console.log(title);
  var apikey = "PActQ29mRiBim9iLV63aSyam0o0atZ1k";
  var offset = 10;
  var url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${title}&limit=10&offset=${offset}&rating=G&lang=en`;
  var options = { url: url, method: "get" };
  $.ajax(options).done(handleImage);
};

var handleClick = function(e) {
  e.preventDefault();
  search();
};

var handleMore = function(e) {
  e.preventDefault();
  search();
};

searchBtn.addEventListener("click", handleClick);
loadMoreBtn.addEventListener("click", handleMore);
// window.addEventListener("scroll", handleMoreScroll);

// change offset 10
