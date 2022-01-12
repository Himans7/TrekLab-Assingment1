listofemployees = []
selectedId = -1;


function init(){
    
    if(localStorage.employeesRecord){
        listofemployees = JSON.parse(localStorage.employeesRecord);

    }
      
}

function onsubmitPressed(){
  var Name = document.getElementById("fullName").value;
  var Age = document.getElementById("employeeAge").value;

  var empObj = {fullname:Name, employeeage:Age};

      listofemployees.push(empObj);

  localStorage.employeesRecord = JSON.stringify(listofemployees);

  init();
  clearRow();
}


function clearRow(){
  selectedId = -1;
  document.getElementById("fullName").value = "";
  document.getElementById("employeeAge").value = "";
  
}
