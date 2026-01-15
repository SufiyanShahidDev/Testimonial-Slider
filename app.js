
// function testimonials(img, name, job, description) {
//     this.img = img;
//     this.name = name;
//     this.job = job;
//     this.description = description;
// }

// let first = new testimonials(
//     `./asset/img1.jpg`,
//     "Arham Maqsood",
//     "Custom Web Application",
//     `We worked with them on a custom web application for our internal operations. The team showed strong technical skills and handled all revisions professionally. The application is stable, well-structured, and easy to use`
// )

// let second = new testimonials(
//     `./asset/img2.jpg`,
//     "Nehal",
//     "Mobile App Development",
//     `This software house developed a mobile application for our business, and we are satisfied with the outcome. They guided us throughout the process, from planning to deployment, and provided reliable support even after delivery`
// )


// let third = new testimonials(
//     `./asset/img3.jpg`,
//     "Umer",
//     "Website Redesign & Maintenance",
//     `They handled our website redesign and ongoing maintenance. The team improved both performance and appearance while ensuring everything worked smoothly. Their professionalism and timely delivery made the collaboration very positive.`
// )


// let data = [first, second, third];

// let imgs = document.getElementById("reviewer-img");
// let reviewer = document.getElementById("reviewer");
// let work = document.getElementById("job");
// let information = document.getElementById("description");


// let nextBtn = document.querySelector(".next-btn");
// let preBtn = document.querySelector(".prev-btn");

// let currentItems = 0;



// function load() {

//     let items = data[currentItems];
//     imgs.src = items.img;
//     reviewer.innerText = items.name;
//     work.innerText = items.job;
//     information.innerText = items.description;
// }


// function nextItmes() {
//     currentItems++;
//     if (currentItems > data.length - 1) {
//         currentItems = 0;
//         load();
//     }
// }


// function prevItmes() {
//     currentItems--;
//     if (currentItems < 0) {
//         currentItems = data.length - 1;
//         load();
//     }
// }
// window.addEventListener("DOMContentLoaded", load)


// nextBtn.addEventListener("click", nextItmes)

// preBtn.addEventListener("click", prevItmes)

// nextBtn.addEventListener("click", load)

// preBtn.addEventListener("click", load)