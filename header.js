window.onload = function() {
    var headerImage = document.getElementById("headerImage")
    var index = Math.floor(Math.random() * 5) + 1
    headerImage.src = "/img/head" + index + ".png"
}
