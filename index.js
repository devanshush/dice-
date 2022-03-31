var randomNumber1= Math.floor(Math.random() * 6) + 1;

var randomdiceImage1= "dice" + randomNumber1 + ".png";

var randomImagesource1 = "images/" + randomdiceImage1;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute( "src", randomImagesource1);

var randomNumber2= Math.floor(Math.random() * 6) + 1;

var randomdiceImage2= "dice" + randomNumber2 + ".png";

var randomImagesource2= "images/" + randomdiceImage2;

var image2= document.querySelectorAll("img")[1];

image2.setAttribute( "src", randomImagesource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 won!";
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩Player 2 won!";
}
else {
    document.querySelector("h1").innerHTML="Draw!";
}

