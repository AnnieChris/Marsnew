const quizItems =
[
    {
        question : "Javascript is an _______ language?",        //question 1
        option1 : "Object Oriented", 
        option2 : "Object Based",
        option3 : "Procedural",
        option4 : "None of the above",
        answer : "Object Oriented"
    },
    {
        question : "Which of the following keywords is used to define a variable in Javascript?",       //question 2
        option1 : "var", 
        option2 : "let",
        option3 : "Both A and B",
        option4 : "None of the above",
        answer : "Both A and B"
    },
    {
        question : "Which of the following methods is used to access HTML elements using Javascript?",      //question 3
        option1 : "getElementById()", 
        option2 : "getElementsByClassName()",
        option3 : "Both A and B",
        option4 : "None of the above",
        answer : "Both A and B"
    },
    {
        question : "Upon encountering empty statements, what does the Javascript Interpreter do?",      //question 4
        option1 : "Throws an error", 
        option2 : "Ignores the statements",
        option3 : "Gives a warning",
        option4 : "None of the above",
        answer : "Ignores the statements"
    },
    {
        question : "Which of the following methods can be used to display data in some form using Javascript?",     //question 5 
        option1 : "document.write()", 
        option2 : "console.log()",
        option3 : "window.alert()",
        option4 : "All of the above",
        answer : "All of the above"
    },
    /* {
        question : "How can a datatype be declared to be a constant type?",         //question 6
        option1 : "const", 
        option2 : "var",
        option3 : "let",
        option4 : "constant",
        answer : "const"
    },
    {
        question : "What keyword is used to check whether a given property is valid or not?",       //question 7
        option1 : "in", 
        option2 : "is in",
        option3 : "exists",
        option4 : "lies",
        answer : "in"
    },
    {
        question : "What is the use of the noscript tag in Javascript?",        //question 8 
        option1 : "The contents are displayed by non-js based browser", 
        option2 : "Clears all the cookies and cache",
        option3 : "Both A and B",
        option4 : "None of the above",
        answer : "The contents are displayed by non-js based browser"
    },
    {
        question : "What does the Javascript “debugger” statement do?",        //question 9 
        option1 : "It will debug all the errors in the program at runtime", 
        option2 : "It acts as a breakpoint in a program",
        option3 : "It will debug error in the current statement if any",
        option4 : "All of the above",
        answer : "It acts as a breakpoint in a program",
    },
    {
        question : "When an operator's value is NULL, the typeof returned by the unary operator is:",        //question 10
        option1 : "Boolean", 
        option2 : "Undefined",
        option3 : "Object",
        option4 : "Integer",
        answer :  "Object"
    }  */
];

//console.log(quizItems[0]);
let questionnumber = -1;
let correctanswers = 0;

function submitQstn()
{
    questionnumber = questionnumber+1;
    if(questionnumber>0 && document.querySelector('input[name="choice"]:checked')== null)
    {
        alert("Please Select");
        return;
    }
    
    if(questionnumber>0){
        let selectedAnswer = document.querySelector('input[name="choice"]:checked').value;
        if(selectedAnswer == quizItems[questionnumber-1].answer)
        {
            correctanswers = correctanswers+1;      
        }
    }
    if(questionnumber < quizItems.length)
    {
        document.getElementById('quizs').innerHTML = quizItems[questionnumber].question 
                                                        + "<br><input type='radio' id='opt1' name='choice' value = '"+quizItems[questionnumber].option1+"'><label for='opt1'>"+quizItems[questionnumber].option1+"</label>" 
                                                        + "<br><input type='radio' id='opt2' name='choice'value = '"+quizItems[questionnumber].option2+"'/><label for='opt2'>"+quizItems[questionnumber].option2+"</label>" 
                                                        + "<br><input type='radio' id='opt3' name='choice' value = '"+quizItems[questionnumber].option3+"'/><label for='opt3'>"+quizItems[questionnumber].option3+"</label>" 
                                                        + "<br><input type='radio' id='opt4' name='choice'value = '"+quizItems[questionnumber].option4+"'/><label for='opt4'>"+quizItems[questionnumber].option4+"</label>";
        
    }
    else{
     getscore()
    }
}
function getscore()
{
    document.getElementById('quizs').innerHTML = "Your Score is " + correctanswers+"/"+quizItems.length; 
    document.getElementById('nxtBtn').style.display = "none";
}