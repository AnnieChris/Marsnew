
let click_count = 0;
function numcheck()
{
    let check_button = document.getElementById('chkbtn');
    /* let disp = document.getElementById('count_display'); */
    click_count++;
   /*  disp.innerHTML = click_count; */
    let lucky_number = document.getElementById('mylcknum').value;
    if(lucky_number == 3)
    {
        
        document.getElementById("result").innerHTML = "Great!! You Guessed my lucky number at attempt "+click_count;
        click_count = 0;
        document.getElementById("result").className = "display_result";
        /* document.getElementById('display_result').style.backgroundColor = "blue"; */
    }
    else
    {
        
        document.getElementById('result').innerHTML = "Not Really. Give it another try";
        document.getElementById("result").className = "display_result";
    }
}