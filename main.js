let myImg = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName () {
    let myName = prompt("Please input your name:");

    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla dame, " + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla dame, " + storedName;
}

myImg.onclick = function (){
    let mySrc = myImg.getAttribute("src");
    if (mySrc === "images/google-icon.png") {
        myImg.setAttribute("src", "images/firefox-icon.png");
    } else {
        myImg.setAttribute("src", "images/google-icon.png");
    }
};

myButton.onclick = () => {
    setUserName();
};