let prev = document.getElementById("arrow-left");
let next = document.getElementById("arrow-right");

let arr = ["./images/image1.jpg", "./images/image2.jpg", "./images/image3.jpg"];
let i = 0;

next.addEventListener('click', function () {
    i++;
    if (i > arr.length - 1) {
        i = 0;
    }
    document.getElementsByClassName("slidepic")[0].src = arr[i];
})

prev.addEventListener('click', function () {
    i--;
    if (i < 0) {
        i = arr.length - 1;
    }
    document.getElementsByClassName("slidepic")[0].src = arr[i];
})