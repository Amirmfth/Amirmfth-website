const checkBox = document.querySelector("#checkbox");
const nav = document.querySelector("nav");
const navbar = document.querySelector(".navbar");
const container = document.querySelector("main");
const icons = document.querySelector(".icons");
const [introduction, mySkills, myEducation, myHobbies, contactMe] =
  document.querySelectorAll("section");
const buttons = document.querySelectorAll("button");

const showSection = (currentSection = "Introduction") => {
  switch (currentSection) {
    case "Introduction":
      introduction.style.display = "block";
      mySkills.style.display = "none";
      myEducation.style.display = "none";
      myHobbies.style.display = "none";
      contactMe.style.display = "none";
      break;
    case "My Skills":
      introduction.style.display = "none";
      mySkills.style.display = "block";
      myEducation.style.display = "none";
      myHobbies.style.display = "none";
      contactMe.style.display = "none";
      break;
    case "My Education":
      introduction.style.display = "none";
      mySkills.style.display = "none";
      myEducation.style.display = "block";
      myHobbies.style.display = "none";
      contactMe.style.display = "none";
      break;
    case "My Hobbies":
      introduction.style.display = "none";
      mySkills.style.display = "none";
      myEducation.style.display = "none";
      myHobbies.style.display = "b";
      contactMe.style.display = "none";
      break;
    case "Contact Me":
      introduction.style.display = "none";
      mySkills.style.display = "none";
      myEducation.style.display = "none";
      contactMe.style.display = "block";
      break;
  }
  buttons.forEach((button) => {
    if (button.innerText === currentSection) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
};

const menuHandler = () => {
  const isChecked = event.target.checked;
  if (isChecked) {
    navbar.style.width = "250px";
    container.style.filter = "blur(2px)";
    navbar.style.right = "0px";
    buttons.forEach(btn => {
        btn.style.display = "block"
    })
    icons.style.display = "block"
} else {
    container.style.filter = "blur(0px)";
    navbar.style.width = "0px";
    buttons.forEach(btn => {
        btn.style.display = "none"
    })
    icons.style.display = "none"

  }
};

const navBtnHandler = (event) => {
  showSection(event.target.innerText);
  checkBox.checked = false;
  menuHandler();
};

showSection()

checkBox.addEventListener("click", menuHandler);

buttons.forEach((button) => {
  button.addEventListener("click", navBtnHandler);
});
