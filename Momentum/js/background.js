const images = ["0.jpg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"]

const chosenImage = images[Math.floor(Math.random() * images.length)]

const backgroundimg = document.body.style

backgroundimg.backgroundImage = `url('image/${chosenImage}')`;
