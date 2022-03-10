class employeedetails
{
    #ename; 
    #eid;
    #joindate; 
    #hoursworked; 
    #designation;
    #salary;

    getempname()
    {
        return this.#ename;
    }
    getempid()
    {
        return this.#eid;
    }
    getjdate()
    {
        return this.#joindate;
    }
    gethrswrkd()
    {
        return this.#hoursworked;
    }
    getdesign()
    {
        return this.#designation;
    }

    setempname(empname)
    {
        this.#ename = empname;
    }
    setempid(empid)
    {
        this.#eid = empid;
    }
    setjdate(jdate)
    {
        this.#joindate = jdate;
        
    }
    sethrswrkd(hrswrkd)
    {
        this.#hoursworked = hrswrkd;
    }
    setdesign(design)
    {
        this.#designation = design;
    }

    getSalary()
    {    
    
        if(this.#designation == 'Manager')
        {
            this.#salary= (Number (this.#hoursworked) * 90);
        }
        else if(this.#designation == 'Consultant')
        {
            this.#salary= (Number(this.#hoursworked) * 70);
        }
        else  if(this.#designation == 'Trainee')
        {
            this.#salary= (Number(this.#hoursworked) * 45);
        }
        return this.#salary;
  
        /* document.getElementById('empSummary').innerHTML=empDetails.ename +" who is a "+empDetails.designation+" will get $"+(((Number)(empDetails.hoursworked))*salary); */
        
    }
    toJSON(){
        return {
            ename : this.#ename,
            eid : this.#eid,
          hoursworked : this.#hoursworked,
          joindate : this.#joindate,
          designation : this.#designation,
           salary : this.getSalary()
        }
    }
    
}
const sessionStorage = window.sessionStorage;
function saveEmployeeDetails()
{
    localStorage.clear();
        let salary;
        var empdetails = new employeedetails();
        empdetails.setempname(document.getElementById('empname').value);
        empdetails.setempid(document.getElementById('empid').value);
        empdetails.setjdate(document.getElementById('jdate').value);
        empdetails.sethrswrkd(document.getElementById('hrswrkd').value);
        empdetails.setdesign(document.getElementById('desig').value);  
        console.log(empdetails);
        
        localStorage.setItem("empDetails", JSON.stringify(empdetails.toJSON()));   
        console.log(JSON.stringify(empdetails));
        if(validateForm(empdetails))
        {
            document.getElementById('employeeForm').submit();
        }
        else
        {
            return false;
        }      
}

function validateForm(empdetails)
{
    if(empdetails.getempname() == "" || empdetails.getempname() == "null")
    {
        alert("Name field cannot be Blank");
        return false;
    }
    else if(empdetails.getempid() == "" || empdetails.getempid() == "null")
    {
        alert("Employee ID field cannot be Blank");
        return false;   
    }
    else if(empdetails.getjdate() == "" || empdetails.getjdate() == "null")
    {
        alert("Joining Date field cannot be Blank");
        return false;   
    }
    else if(empdetails.gethrswrkd() == "" || empdetails.gethrswrkd() == "null")
    {
        alert("Hours Worked field cannot be Blank");
        return false;   
    }
    else if(empdetails.getdesign() == "" || empdetails.getdesign() == "null")
    {
        alert("Designation field cannot be Blank");
        return false;   
    }
    return true; 

} 

function retrieveEmployeeDetails()
{    
    let empDetails = JSON.parse(localStorage.getItem('empDetails'));
        console.log(empDetails);
  
        document.getElementById('empSummary').innerHTML=empDetails.ename +" who is a "+empDetails.designation+" will get $"+empDetails.salary;
        
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




