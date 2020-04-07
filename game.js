name1="player1";
name2="player2";

function set(){
 name1=prompt("Name of player 1:");
 name2=prompt("Name of player 2:");
document.querySelectorAll("h2")[0].innerHTML=name1;
document.querySelectorAll("h2")[1].innerHTML=name2;
}

function play(){
  var randomnum1=Math.floor(Math.random()*6)+1;
  var randomnum2=Math.floor(Math.random()*6)+1;
  var diceImage="images/d"+randomnum1+".png";    //selecting random image
  var diceImage2="images/d"+randomnum2+".png";
  var img1=document.querySelectorAll("img")[0];
  var img2=document.querySelectorAll("img")[1];
  img1.setAttribute("src",diceImage);
  img2.setAttribute("src",diceImage2);
  if(randomnum1>randomnum2)
          document.querySelectorAll("h1")[1].innerHTML=name1+" Wins😎";
  else if(randomnum2>randomnum1)
          document.querySelectorAll("h1")[1].innerHTML=name2+" Wins🎉";
  else
          document.querySelectorAll("h1")[1].innerHTML="Match Draw😒";
}


function Reset(){
  document.querySelectorAll("h1")[1].innerHTML="Welcome!!";
  name1="player1";
  name2="player2";
  document.querySelectorAll("h2")[0].innerHTML=name1;
  document.querySelectorAll("h2")[1].innerHTML=name2;
}
