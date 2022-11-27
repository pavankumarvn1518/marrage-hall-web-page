
  function validateForm(){
    //let x = document.forms["myForm"]["sname"].value;
    let t1= document.getElementById("t1").value;
    console.log(t1);
   // document.writeln(name);
    //if (document.getElementById("name").value ==""){
       if (t1 ==""){
      confirm("......Name must be filled out..");
      return false;
    }
  

  //let x = document.forms["myForm"]["sname"].value;
  let t2= document.getElementById("t2").value;
    console.log(t2);
   // document.writeln(fname);
    //if (document.getElementById("fname").value ==""){
      if (t2==""){
      confirm("...... Place must be filled out..");
      return false;
    }


  //let x = document.forms["myForm"]["sname"].value;
  let t3= document.getElementById("t3").value;
    console.log(t3);
   // document.writeln(mname);
    //if (document.getElementById("fname").value ==""){
      if(t3==""){
 
      confirm("...... Occupation must be filled out..");
      return false;
    }

    //let x = document.forms["myForm"]["sname"].value; 
    let t4= document.getElementById("t4").value;
    console.log(t4);
    if (t4 ==""){
      confirm("...... Age must be filled out..");
      return false;
    }
    
    //let x = document.forms["myForm"]["sname"].value; 
    let t5= document.getElementById("t5").value;
    console.log(t5);
    if (t5==""){
      confirm("...... Date must be filled out..");
      return false;
    }

    //let x = document.forms["myForm"]["sname"].value; 
    let t6= document.getElementById("t6").value;
    console.log(t6);
    if (t6==""){
      confirm("Requrider date must be filled");
      return false;
    }

    
    document.writeln(t1); 
    document.writeln(t2); 
    document.writeln(t3);
    document.writeln(t4);
    document.writeln(t5);
    document.writeln(t6);

  }