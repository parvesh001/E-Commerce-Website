let bar = document.getElementById("bar");
let nav = document.getElementsByClassName("nav")[0];
let Xmark = document.getElementById("Xmark");

bar.addEventListener("click", () => {
  nav.classList.add("active");
});
Xmark.addEventListener("click", () => {
  nav.classList.remove("active");
});

// review section

//letting array of reviewers
let reviewers = [
  {
    id: 1,
    img: "../images/review pictures/1.jpg",
    name: "Seeu Marry",
    position: "Political Science Professor",
    intro:
      "Seeu Marry sit amet consectetur adipisicing elit. Perferendis et quisquam voluptate ipsa ab. Illum, sequi! Doloremque praesentium blanditiis quasi ipsum natus assumenda placeat repudiandae? Magnam error rerum deserunt blanditiis.",
  },
  {
    id: 2,
    img: "../images/review pictures/2.jpg",
    name: "Neha Saksena",
    position: "Regional Director",
    intro:
      "Neha Saksena sit amet consectetur adipisicing elit. Perferendis et quisquam voluptate ipsa ab. Illum, sequi! Doloremque praesentium blanditiis quasi ipsum natus assumenda placeat repudiandae? Magnam error rerum deserunt blanditiis.",
  },
  {
    id: 2,
    img: "../images/review pictures/3.jpg",
    name: "Diksha Sharma",
    position: "Coordinator",
    intro:
      "Diksha Sharma sit amet consectetur adipisicing elit. Perferendis et quisquam voluptate ipsa ab. Illum, sequi! Doloremque praesentium blanditiis quasi ipsum natus assumenda placeat repudiandae? Magnam error rerum deserunt blanditiis.",
  },
  {
    id: 3,
    img: "../images/review pictures/4.jpg",
    name: "Diva Mehta",
    position: "Human Resource Department",
    intro:
      "Diva Mehta sit amet consectetur adipisicing elit. Perferendis et quisquam voluptate ipsa ab. Illum, sequi! Doloremque praesentium blanditiis quasi ipsum natus assumenda placeat repudiandae? Magnam error rerum deserunt blanditiis.",
  },
  {
    id: 4,
    img: "../images/review pictures/5.jpg",
    name: "Sakshi Mehra",
    position: "Charter Accountant",
    intro:
      "Sakshi Mehra sit amet consectetur adipisicing elit. Perferendis et quisquam voluptate ipsa ab. Illum, sequi! Doloremque praesentium blanditiis quasi ipsum natus assumenda placeat repudiandae? Magnam error rerum deserunt blanditiis.",
  },
  {
    id: 5,
    img: "../images/review pictures/6.jpg",
    name: "Jasmeen Frandevis",
    position: "Web Developer",
    intro:
      "Jasmeen Frandevis amet consectetur adipisicing elit. Perferendis et quisquam voluptate ipsa ab. Illum, sequi! Doloremque praesentium blanditiis quasi ipsum natus assumenda placeat repudiandae? Magnam error rerum deserunt blanditiis.",
  },
];

//targeting relevant things
let img = document.getElementById("img");
let rName = document.getElementById("name");
let position = document.getElementById("position");
let intro = document.getElementById("sm-intro");

let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");

//declaring function
function myReviewers(abc) {
  let currentReviewer = reviewers[abc];
  img.src = currentReviewer.img;
  rName.textContent = currentReviewer.name;
  position.textContent = currentReviewer.position;
  intro.textContent = currentReviewer.intro;
}

//initialising variable
let argument = 0;

//next btn function
nextBtn.addEventListener("click", () => {
  argument++;
  if (argument > reviewers.length - 1) {
    argument = 0;
  }
  myReviewers(argument);
});

//prev btn function
prevBtn.addEventListener("click", () => {
  argument--;
  if (argument < 0) {
    argument = reviewers.length - 1;
  }
  myReviewers(argument);
});
