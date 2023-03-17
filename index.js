function scuberGreetingForFeet(distance){
  // Write your code here!

  let message;
  if (distance <= 400) {
   message = "This one is on me!";
  }
  else if (distance > 400 && distance <= 2000){
    message = "That will be twenty bucks."
  }

  else if (distance > 2000 && distance <=2500){
    message = "I will gladly take your thirty bucks."
  }
  else if (distance > 2500){
    message = "No can do."
  }

  
   return message
  }




function ternaryCheckCity(city){
  // Write your code here!

 
 let destination;
if (city === "NYC" ){
  destination = "Ok, sounds good.";
}
else if (city === "Pittsburgh"){
  destination = "No go.";
}

return destination;

}

function switchOnCharmFromTip(moula){
  // Write your code here!
let response;
if (moula === "generous"){
  response = "Thank you so much."
}
else if(moula === "not as generous"){
  response = "Thank you.";
}
else if(moula === "thanks for everything"){
  response = "Bye."
}
return response
}