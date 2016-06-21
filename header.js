window.onload = function() {
    var now = new Date()
    var index = now.getHours() % 5 + 1
    var headerImage = document.getElementById("headerImage")
    headerImage.src = "/img/head" + index + ".png"
}
