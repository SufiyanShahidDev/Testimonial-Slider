
function Review(img, name, job, info) {
    this.img = img;
    this.name = name;
    this.job = job;
    this.info = info;
}

let first = new Review(
    `./asset/img1.jpg`,
    "Arham Maqsood",
    "Web Developer",
    `- Clean and professional UI design
- Use modern CSS (flexbox/grid, shadows, hover effects)
- JavaScript should be well-structured and commented
- Use ES6 features (classes, constructors, arrow functions)
- Separate files: index.html, style.css, script.js`
)

let second = new Review(
    `./asset/img2.jpg`,
    "Nehal",
    "Web Dsigner",
    `-- Dynamic data handling using JavaScript objects/arrays
- At least one interactive feature (buttons, toggle, slider, modal, etc.)
- DOM manipulation without any library
- Responsive on mobile, tablet, and desktop`
)


let third = new Review(
    `./asset/img3.jpg`,
    "Umer",
    "AI & Data Scientist",
    `- Provide complete code for all files
- Do not skip any part
- Ensure the project works when copied and run in a browser`
)


let contruster = [first, second, third];

let imgs = document.getElementById("person-img");
let author = document.getElementById("author");
let work = document.getElementById("job");
let information = document.getElementById("info");


let nextBtn = document.querySelector(".next-btn");
let preBtn = document.querySelector(".prev-btn");

let currentItems = 0;



function load() {

    let items = contruster[currentItems];
    imgs.src = items.img;
    author.innerText = items.name;
    work.innerText = items.job;
    information.innerText = items.info;
}


function nextItmes() {
    currentItems++;
    if (currentItems > contruster.length - 1) {
        currentItems = 0;
        load();
    }
}


function prevItmes() {
    currentItems--;
    if (currentItems < 0) {
        currentItems = contruster.length - 1;
        load();
    }
}
window.addEventListener("DOMContentLoaded", load)


nextBtn.addEventListener("click", nextItmes)

preBtn.addEventListener("click", prevItmes)

nextBtn.addEventListener("click", load)

preBtn.addEventListener("click", load)