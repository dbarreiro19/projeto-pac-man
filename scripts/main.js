// Year copy
var data = new Date()
document.getElementById('year').textContent = data.getFullYear()

// Hello World
/*  var myHeading = document.querySelector('h1')
myHeading.textContent = 'Olá mundo!' */

// Img alternate
var myImage = document.querySelector('img')

myImage.onclick = () => {
    var mySrc = myImage.getAttribute('src')
    if (mySrc === "imagens/pac-man-pixel-art-480x480.jpg") {
        myImage.setAttribute("src", 'imagens/pac01.jpg')
    } else {
        myImage.setAttribute('src', "imagens/pac-man-pixel-art-480x480.jpg")
    }
}

// Alter User
var myLink = document.querySelector('alter-user')