
// function Review(img, name, job, info) {
//     this.img = img;
//     this.name = name;
//     this.job = job;
//     this.info = info;
// }

// let first = new Review(
//     `./asset/img1.jpg`,
//     "Arham Maqsood",
//     "Custom Web Application",
//     `We worked with them on a custom web application for our internal operations. The team showed strong technical skills and handled all revisions professionally. The application is stable, well-structured, and easy to use`
// )

// let second = new Review(
//     `./asset/img2.jpg`,
//     "Nehal",
//     "Mobile App Development",
//     `This software house developed a mobile application for our business, and we are satisfied with the outcome. They guided us throughout the process, from planning to deployment, and provided reliable support even after delivery`
// )


// let third = new Review(
//     `./asset/img3.jpg`,
//     "Umer",
//     "Website Redesign & Maintenance",
//     `They handled our website redesign and ongoing maintenance. The team improved both performance and appearance while ensuring everything worked smoothly. Their professionalism and timely delivery made the collaboration very positive.`
// )


// let contructer = [first, second, third];

// let imgs = document.getElementById("person-img");
// let author = document.getElementById("author");
// let work = document.getElementById("job");
// let information = document.getElementById("info");


// let nextBtn = document.querySelector(".next-btn");
// let preBtn = document.querySelector(".prev-btn");

// let currentItems = 0;



// function load() {

//     let items = contructer[currentItems];
//     imgs.src = items.img;
//     author.innerText = items.name;
//     work.innerText = items.job;
//     information.innerText = items.info;
// }


// function nextItmes() {
//     currentItems++;
//     if (currentItems > contructer.length - 1) {
//         currentItems = 0;
//         load();
//     }
// }


// function prevItmes() {
//     currentItems--;
//     if (currentItems < 0) {
//         currentItems = contructer.length - 1;
//         load();
//     }
// }
// window.addEventListener("DOMContentLoaded", load)


// nextBtn.addEventListener("click", nextItmes)

// preBtn.addEventListener("click", prevItmes)

// nextBtn.addEventListener("click", load)

// preBtn.addEventListener("click", load)