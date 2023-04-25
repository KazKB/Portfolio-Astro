// Return To Top Button
let returnToTop = document.createElement("p");
returnToTop.innerHTML = "&#8682;";
returnToTop.className = "hidden";
document.body.appendChild(returnToTop);
returnToTop.addEventListener("click", function() {
    window.scrollTo(0,0);
});

window.onscroll = function(){
    if(window.scrollY > 100) {
        returnToTop.className = "scroll";  
    }
    else {
        returnToTop.className = "hidden";
    }
};