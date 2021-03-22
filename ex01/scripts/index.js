var img = document.getElementsByClassName("image");
var image = document.getElementsByClassName("img");
for (var i = 0; i < img.length; i++) {
    img[i].style.height = image[i].offsetHeight + "px";
}

 function modalImage(num) {
    document.getElementById("myModal").style.display = "block";
    var ifr = document.getElementById("iframe");
        if (num === 1) {ifr.src = "../src/image01.html"}
        if (num === 2) {ifr.src = "../src/image02.html"}
        if (num === 3) {ifr.src = "../src/image03.html"}
        if (num === 4) {ifr.src = "../src/image04.html"}
        if (num === 5) {ifr.src = "../src/image05.html"}
        if (num === 6) {ifr.src = "../src/image06.html"}
        if (num === 7) {ifr.src = "../src/image07.html"}
        if (num === 8) {ifr.src = "../src/image08.html"}
        if (num === 9) {ifr.src = "../src/image09.html"}
        if (num === 10) {ifr.src = "../src/image10.html"}
   
  
}


function closeModal() {
    document.getElementById("myModal").style.display = "none";
}