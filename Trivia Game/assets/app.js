// Show all question 
//format is radio button
//have a timer run down to answer the questions
//when time runs out dislpay how many were correct 
//when time runs out display how many were incorrect
//display wins and losses
//reset game 
$(document).ready(function(){
var state = {
    questions: [
        {
            question: "What is life",
            choices: ["42", "Live", "Don't stress"],
            answer: 1
        },  
        {
            question: "Where is the key",
            choices: ["on the table", "in the kitchen", "check the laundry"],
            answer: 1
        }
    ]
}  
function questionGenerator (){
    $("#questions").append(state.questions)


for(i = 0; i < state.questions.legnth; i++){
$("#questions").html("state.questions[i].question + state.questions[i].questions.choices");
}}
 questionGenerator();
})
