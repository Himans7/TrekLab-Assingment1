
            listofdep = []
            selectedId = -1;
            
            
            function init(){
              
              if(localStorage.depRecord){
                  listofdep = JSON.parse(localStorage.depRecord);
                  
              }
            }
            
            function onsubmitPressed(){
              var Name = document.getElementById("depName").value;
              var Number = document.getElementById("depNumber").value;
            
              var depObj = {depname:Name, depnumber:Number};
              
                  listofdep.push(depObj);
             
              localStorage.depRecord = JSON.stringify(listofdep);
            
              init();
              clearRow();
            }
            

            function clearRow(){
              selectedId = -1;
              document.getElementById("depName").value = "";
              document.getElementById("depNumber").value = "";
              
          }
          