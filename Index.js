

    var p1=Math.floor(Math.random()*6)+1;

    var p2=Math.floor(Math.random()*6)+1;

    var randomDiceImage1 = "dice"+p1 + ".png"; //dice1.png -dice6.png
    var randomDiceImage2 = "dice"+p2 + ".png";

    var randomImageSource1="images/"+randomDiceImage1;  //images/dice1.png
    var randomImageSource2="images/"+randomDiceImage2;
  
    var image1 = document.querySelectorAll("img")[0];
    var image2 = document.querySelectorAll("img")[1];

    image1.setAttribute("src",randomImageSource1);
    image2.setAttribute("src",randomImageSource2);
    // image1.setAttribute("src",p2);
    
    if (p1>p2){
      document.querySelector("h1").innerHTML="🚩 Player 1 Wins!🥇";
    }else if (p2>p1){
        document.querySelector("h1").innerHTML="🚩 Player 2 Wins!🥇";
    }else {
        document.querySelector("h1").innerHTML="🏳 Draw! 🏳"
    }
