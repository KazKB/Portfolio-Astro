// Age Calculation
ageText = document.querySelector("#age");
myAge = new Date().getTime() - new Date('2002-12-12').getTime();
ageText.innerHTML = "Level: " + Math.floor(myAge/(31557600000));

// The Tech Stack Interactivity
languageInfo = document.querySelectorAll(".description");

function toggle(description) {
    if (description.style.display == "block")
        description.style.display = "none";
    else {
        languageInfo.forEach(element => {
            element.style.display = "none";
        });
        description.style.display = "block";
    }
}