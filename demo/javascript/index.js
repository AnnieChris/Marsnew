/* //let age = "15";
console.log(typeof age); */     //typeof shows the type of the variable




/* let a = 8, b = 10, c = null; 
if(a > b){
    c = 50;   //scope of c is only within the if block
}
else{
    c = 100;
}
console.log(c);
 */



/* 
//Redeclaration var
var user = "ani";       //using var its possible to redeclare a variable and override the value
var user = "chris";
console.log(user); 

//Redeclaration let
let uname = "kavin";    //using let its not possible to redeclare a variable and it cannot be overriden
let uname = "christo";
console.log(uname);
 */


/* var 1test = "hello"; //invalid name of a variable as it stars with 1
console.log(1test); */


/* var test1 = "Hi";   //valid name of a variable as it not staring with numbers or special characters
console.log(test1); */


/* var test$ = "welcome";  //valid name sice we are using only $ symbol and other special symbols are not valid 
console.log(test$); */

 /* var $test = "dollarstart";  //invalid name sice we are using $ symbol in starting variable name, start should be string not number or special character
console.log(test$);  */


/* var test@ = "symbol";   // invalid using special characters except $
console.log(test@);  */
















/* let age = 28;
if(age>50)      //Nested if
{
    if(age>50)
    {
        console.log('you are eligible for pension');
    }
    console.log('eligible to vote');
    else if(age<50 && age>18)
    {
        console.log('not eligible for pension');
    }
    else
    {
        console.log('not eligible to vote');
    }
}
else if(age===18){
    console.log('you turned 18');
}
else
{
    console.log('not eligible to vote');
} */





/* Javascript Array */

/* let persons = ["Ani","Chris","Kavin","Christo"];

for(let i=0;i<persons.length;i++)
{
    console.log(persons[i]);
} */


//Arrays are Copied or Updated by reference
/* 
let pets = ["Cat","Parrot","Dog","Rabbit","Puppy"];
let petanimals = pets;      //one variable is assigned to another variable
console.log('result for petannimals ' +petanimals);       //two variables are referencing the same array
console.log('result for pets ' +pets);
petanimals.push('fighter');
console.log('after petanimals pushed' +petanimals);     //pushed an element with the second variable in the array
console.log('after petanimals pushed' +pets);           //both varibles are updated since its referencing one another
 */



/* 
let pets = ["Cat","Parrot","Dog","Rabbit","Puppy"];
for(let j=0;j<pets.length;j++)
{
if(pets[j].startsWith('P'))
    {
    continue;
    }
    console.log(pets[j]);
}  */



/* 
let pets = ["Cat","Parrot","Dog","Rabbit","Puppy"];
console.log('before' +pets);        //Removes last element in an array using pop method
console.log(pets.pop());
console.log('after' +pets); */

/* 
let pets = ["Cat","Parrot","Dog","Rabbit","Puppy"];
console.log('before' +pets);        //adding fish as last element into array using push method
console.log(pets.push('Fish'));
console.log('after' +pets); */


/* 
let pets = ["Cat","Parrot","Dog","Rabbit","Puppy"];
console.log('before'+pets);     //shift is used to take out/extract the first element in an array and returns it
console.log(pets.shift());
console.log('after'+pets); */



/* 
let pets = ["Cat","Parrot","Dog","Rabbit","Puppy"];
console.log('before'+pets);
console.log(pets.unshift('Birds'));     //unshift is used to add element on top/begining of an array
console.log('after unshift' +pets); */


/* 
let pets = ["Cat","Parrot","Dog","Rabbit","Puppy"];
console.log('before'+pets);
console.log(pets.slice(0,3));       //cut down or delete any array elment by using array index. here after 3rd element array elements deleted */

/* 
let pets = ["Cat","Parrot","Dog","Rabbit","Puppy"];
newPets.push('Gold Fish');
console.log('after'+pets); */

/* 
let pets = ["Cat","Parrot","Dog","Rabbit","Puppy"];
for(let pet of pets)        //of is used show elements in the array that is assigned to one variable to another variable in loop
{
    console.log(pet);
} */


/* 
let pets = ["Cat","Parrot","Dog","Rabbit","Puppy"];
for(let pet in pets)        //declaring one variable to the another existing variable in the loop
{
    console.log(pet);   //in is used to show/display the index of the array in the loop
} */


/* let pets = ["Cat","Parrot","Dog","Rabbit","Puppy"];
pets[90] = "Hamster";           //assigning an array element by refering the array index since array starts from pets[0]to pets[90]
console.log(pets);      //here pets[0]to pets[5] has elements and then its empty until pets[90]it has element as 'hamster'
console.log(pets.length);   */     //here the total array lengh will be 91 bcoz array lenght will be total array elements plus one


/* let pets = ["Cat","Parrot","Dog","Rabbit","Puppy"];
pets.length = 4;            //returns the said number of array elements
console.log(pets);
console.log(pets[3]);       //it points the array index element */


/* let pets = new Array("Cat","Parrot","Dog","Rabbit","Puppy");    //new array is much similar to array declaration
console.log(pets); */


/* let pets = new Array(2);
console.log(pets[1]);       //its undefined since it has no elements
console.log(pets.length);       //assigning the lenght of an array */


/* //Filter Method
let ages = [20,35,42,56,69,73];
function checkOld(ages)       //function declaration by giving any function name in camelcase
{
    return ages >= 60;
}
let results = ages.filter(checkOld);      //filter method is used to filter/delete the elements that are processed in our function. 
                                            //here our function is called in the filter method without using parenthesis
console.log(results); 
 */


/* //Map Method
let ages = [20,35,42,56,69,73];
 */









//Javascript Objects

/* let person = {
    firstName:'Ani',
    lastName:'Chris',
    family()
    {
        console.log('Family is all about');
    }
}

console.log(person.firstName +" "+ person.lastName);
person.country = 'India';
console.log("Before",person);

//delete person.country;
//console.log("After",person);
//console.log("lastName" in person);

for(const key in person)
{
    console.log(key+": ",person[key]);
}
person.family(); */




/* //Jvascript Constructor

function person(fname, lname, a)        //constructor function
{
    this.firstName = fname;
    this.lastName = lname;
    this.age = a;
    this.getInfo = function()
    {
        return this.lastName + " The Age is " + this.age;
    }
}

let person1 = new person('John','Doe',30);
let person2 = new person('David','Parker',30);
console.log(person1);
console.log(person2);
console.log(person2.getInfo()); */



/* var js = (function(x) {return x*x;}(10));
console.log(js); */


//day 6
function f(){
    return this;
}
//console.log(f());

let person ={
    firstname : "John",
    lastname : "Dewy",
    f:funstion getDetail()
    {
        return this.firstname + " " + this.lastname;
    }
}