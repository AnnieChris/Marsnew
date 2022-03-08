
const empdetails = {
    ename: '', 
    eid: '', 
    joindate: '', 
    hoursworked:'', 
    designation:''};

const sessionStorage = window.sessionStorage;
function saveEmployeeDetails()
{
    sessionStorage.clear();
        let salary;
        empdetails.ename = document.getElementById('empname').value;
        empdetails.eid = document.getElementById('empid').value;
        empdetails.joindate = document.getElementById('jdate').value;
        empdetails.hoursworked = document.getElementById('hrswrkd').value;
        empdetails.designation = document.getElementById('desig').value; 
        
        sessionStorage.setItem("empDetails", JSON.stringify(empdetails));
        
        
    if(validateform())
    {
        document.getElementById('employeeForm').submit();
    }
    else
    {
        return false;
    }
}
function retrieveEmployeeDetails()
{    
    let empDetails = JSON.parse(sessionStorage.empDetails);
        console.log(empDetails.ename);
        if(empdetails.designation == 'Manager')
        {
            salary=90;
        }
        else if(empdetails.designation == 'Consultant')
        {
            salary=70;
        }
        else
        {
            salary=45;
        }
  
        document.getElementById('empSummary').innerHTML=empDetails.ename +" who is a "+empDetails.designation+" will get $"+(((Number)(empDetails.hoursworked))*salary);
        
}
function validateform()
{
    if(empdetails.ename == "" || empdetails.ename == "null")
    {
        alert("Name field cannot be Blank");
        return false;
    }
    else if(empdetails.eid == "" || empdetails.eid == "null")
    {
        alert("Employee ID field cannot be Blank");
        return false;   
    }
    else if(empdetails.joindate == "" || empdetails.joindate == "null")
    {
        alert("Joining Date field cannot be Blank");
        return false;   
    }
    else if(empdetails.hoursworked == "" || empdetails.hoursworked == "null")
    {
        alert("Hours Worked field cannot be Blank");
        return false;   
    }
    else if(empdetails.designation == "" || empdetails.designation == "null")
    {
        alert("Designation field cannot be Blank");
        return false;   
    }
    return true; 

}
function setMaxDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 

    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("jdate").setAttribute("max", today);

}