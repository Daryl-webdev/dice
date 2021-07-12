
  var randomNumber1 = Math.floor((Math.random() * 6) + 1);

  var randomImageOne = "images/dice" + randomNumber1 + ".png";

  document.querySelectorAll("img")[0].setAttribute("src", randomImageOne);

  var randomNumber2 = Math.floor((Math.random() * 6) + 1);

  var randomImageTwo = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomImageTwo);




if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Girlfriend wins!"
}else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Boyfriend wins!"
}else {
  document.querySelector("h1").innerHTML = "It's a Draw!"
}
