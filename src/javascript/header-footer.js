// Gets Computer Date & Time on Website Loading In
window.addEventListener("load", function() {
    time();
});

// Constantly Retrieving Computer Time To Keep it Updated
function time() {
    document.querySelector("#time").innerHTML = new Date().toLocaleTimeString();
    document.querySelector("#date").innerHTML = new Date().toLocaleDateString();
    setTimeout(time, 1000);
}