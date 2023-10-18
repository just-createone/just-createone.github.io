let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/zwnrelm3.png") {
    myImage.setAttribute("src","images/zwnrelm3.png");
  } else {
    myImage.setAttribute("src","images/下载.jfif");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
  }


if (!localStorage.getItem("name")){
    setUserName();}
    else{let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了 ." + storedName;
}

myButton.onclick = function(){
    setUserName();
}