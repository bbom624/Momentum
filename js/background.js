const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

document.body.style.backgroundImage = `url('img/${chosenImage}')`



// const imgs = ["1.jpg", "2.jpg", "3.jpg"];

// const todaysImgNum = Math.floor(Math.random() * imgs.length);
// const todaysImg = imgs[todaysImgNum];

// const bgImg = document.createElement("style");

// bgImg.innerText = `body {background-image: url(img/${todaysImg}); background-position: center; background-repeat: no-repeat; background-size: cover; }`;

// document.head.appendChild(bgImg);
// console.log(bgImg);