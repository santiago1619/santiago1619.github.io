const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


const imgArr = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];


const imgAlts = [
    {altText: "Photo 1 - eye"},
    {altText: "Photo 2 - stone"},
    {altText: "Photo 3 - purple flowers"},
    {altText: "Photo 4 - drawings"},
    {altText: "Photo 5 - butterfly"}
  ];


for (let i = 0; i < imgArr.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${imgArr[i]}`);
    newImage.setAttribute('alt', imgAlts[i].altText);
    thumbBar.appendChild(newImage);
}


thumbBar.addEventListener("click", (event) => {
    displayedImage.setAttribute('src', event.target.getAttribute('src'));
    displayedImage.setAttribute('alt', event.target.getAttribute('alt'));
});


btn.addEventListener("click", () => {
    if (btn.getAttribute("class") === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
});
