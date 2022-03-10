 
/* function getColor()
{
    return["white","blue","yellow","black","red","green"];
}

let firstcolor = getColor()[0];
let [firstcolor,secondcolor,...args] = getColor();
console.log(firstcolor);
console.log(secondcolor);
console.log(args);          //...args will return the remaining items in the array 
 */
 

let colorslist = ["white","blue","yellow","black","red","green"];
function getcolorslist(listName)
{
    let colors=[];
    if(listName=='firstcolor'){

        colors[0]=colorslist[0];
        colors[1]=colorslist[1];
    } 
    if(listName=='secondcolor'){

        colors[0]=colorslist[2];
        colors[1]=colorslist[3];
    } 
    return colors;
}

//console.log(getcolorslist('secondcolor'));
 

var firstcolor = [colorslist[0],colorslist[1]];
console.log(firstcolor);
var secondcolor = [colorslist[2],colorslist[3]];
console.log(secondcolor);
let [aa,bb,cc,dd,...othercolors] = colorslist;
console.log(othercolors);
