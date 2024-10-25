const checkBox = document.querySelector("#checkbox")
const navbar = document.querySelector("nav")
const container = document.querySelector("main")

const menuHandler = (event) => {
    const isChecked = event.target.checked
    if(isChecked) {
        container.style.filter = "blur(2px)"
        navbar.style.right = "0px"
    }else{
        container.style.filter = "blur(0px)"
        navbar.style.right = "-250px"
    }
}

checkBox.addEventListener("click" , menuHandler)