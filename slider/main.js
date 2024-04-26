const imageContainer = document.querySelector("img")
let imagesLink = ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg", "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", "https://cdn.pixabay.com/photo/2015/03/22/23/07/bora-bora-685303_640.jpg", "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg", "https://img.freepik.com/free-photo/fresh-yellow-daisy-single-flower-close-up-beauty-generated-by-ai_188544-15543.jpg"]

imageContainer.src = imagesLink[0]
let index = 0;
setInterval(() => {
    index = (index+1) % imagesLink.length;
    imageContainer.src = imagesLink[index];
}, 1000);