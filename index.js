

var readlineSync =  require("readline-sync");


function play(question,answer){
  var userinput = readlineSync.question(question)
  if(userinput===answer){
    console.log("your are right")
  } else{
    console.log("you are wrog")
  }
}
play("what is my name ","rajesh anuragi")