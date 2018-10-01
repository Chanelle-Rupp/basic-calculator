function adding() { 
    var input1 = parseInt(document.getElementById('user-input1').value); 
    var input2 = parseInt(document.getElementById('user-input2').value);
    document.getElementById("result").value = input1+input2;
   }
  
   function subtraction() { 
    var input1 = parseInt(document.getElementById('user-input1').value); 
    var input2 = parseInt(document.getElementById('user-input2').value);
    document.getElementById("result").value = input1-input2;
   }
  
   function multiplication() { 
    var input1 = parseInt(document.getElementById('user-input1').value); 
    var input2 = parseInt(document.getElementById('user-input2').value);
    document.getElementById("result").value = input1*input2;
  }
  
   function division() { 
    var input1 = parseInt(document.getElementById('user-input1').value); 
    var input2 = parseInt(document.getElementById('user-input2').value);
    document.getElementById("result").value = input1/input2;
   }
  
   function remainder() { 
    var input1 = parseInt(document.getElementById('user-input1').value); 
    var input2 = parseInt(document.getElementById('user-input2').value);
    document.getElementById("result").value = input1%input2;
   }  
