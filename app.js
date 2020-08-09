
function quiz(){
var questions =[
{
    prompt:"what color are apples?\n(a) Red/Green\n\
    (b) purple\n(c) Orange",
    answer: "a"

},
{
prompt:"what color are Bananas?\n(a) Teal\n\ (b) Magenta\n(c) yellow",
answer:"c"
},
{ 
    prompt:"what color are strawberries?\n(a) yellow\n\ (b)Red\n(c) Blue",
    answer:"b"
},

]

var score=0;
 for (var i=0; i<questions.length; i++){
     var response =window.prompt(questions[i].prompt)
    if (response ==questions[i].answer){
        score++;
        alert("Correct!");
    }
     else {
        alert("WRONG!");
    }
    }
    alert("you got " +  score  + "/" + questions.length)



}