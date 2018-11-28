var imgs=document.querySelectorAll('.img')
var mainDiv = document.getElementById("para");

var sounds = {
    // boy: document.getElementById("mySound1"), 
    dog: document.getElementById("mySound2"),
    // snowman: document.getElementById("mySound3"), 
    tree: document.getElementById("mySound4"),
    santa: document.getElementById("mySound5"),
    bell: document.getElementById("mySound6"),
    // snowman1: document.getElementById("mySound7")
}

var texts={
    boy:"Merry Chritsmas",
    dog: "woof-woof,arf-arf, ruff-ruff",
    snowman:"you have a mail",
    tree:"shhhhsssshhhhhhhssssshhh",
    santa:"Hallo Hallo Hallo! Wish You Merry Chritsmas and Happy New Year",
    bell:"We Wish You A Merry Christmas",
    snowman1:"Merry Chritsmas"
}


var text = document.createElement("p");

function playSounds(img) {
    mainDiv.style.visibility="visible";
    img.style.animationName="none";
    sounds[img.id].currentTime = 0;
    sounds[img.id].play();
    text.style.color="white";
    img.style.animationName=img.id;
    text.style.fontSize="24px";
    text.style.color="white";
    mainDiv.appendChild(text);
    text.innerHTML=texts[img.id];
    img.classList.remove("img");
    img.classList.add("img")
    score.innerHTML = parseInt(score.innerHTML) + 1;
}


imgs.forEach(function (img) {   
    img.addEventListener("click", function () {
        playSounds(img);
    })
})