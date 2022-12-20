// Age Calculation
const ageText = document.querySelector("#age");
let myAge = new Date().getTime() - new Date('2002-12-12').getTime();
ageText.innerHTML = "Level: " + Math.floor(myAge/(31557600000));

// The Tech Stack Interactivity
const languageInfo = document.querySelectorAll(".description");
const beginner = document.querySelectorAll(".beginner");
const intermidiate = document.querySelectorAll(".intermidiate");
const advanced = document.querySelectorAll(".advanced");

// function toggle(description) {
//     if (description.style.display == "block")
//         description.style.display = "none";
//     else {
//         languageInfo.forEach(element => {
//             element.style.display = "none";
//         });
//         description.style.display = "block";
//     }
// }

function hideStackInfo() {
    languageInfo.forEach(element => {
        element.style.display = "none";
    });
}

for (let element = 0; element < beginner.length; element++) {
    beginner[element].addEventListener("click", function(){
        if (languageInfo[element].style.display == "block")
            languageInfo[element].style.display = "none";
        else {
            hideStackInfo();
            languageInfo[element].style.display = "block";
        }
    });
}
for (let element = 0; element < intermidiate.length; element++) {
    intermidiate[element].addEventListener("click", function(){
        if (languageInfo[element].style.display == "block")
            languageInfo[element].style.display = "none";
        else {
            hideStackInfo();
            languageInfo[element].style.display = "block";
        }
    });
}
for (let element = 0; element < advanced.length; element++) {
    advanced[element].addEventListener("click", function(){
        if (languageInfo[element].style.display == "block")
            languageInfo[element].style.display = "none";
        else {
            hideStackInfo();
            languageInfo[element].style.display = "block";
        }
    });
}