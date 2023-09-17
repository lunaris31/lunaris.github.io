const background = document.querySelector(".background");
const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg", "11.jpg", "12.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const imgsrc = `url(images/${chosenImage})`;

background.style.background = imgsrc + 'center center no-repeat';
background.style.width = "100vw";
background.style.height = "100vh";
background.style.backgroundSize = "cover";