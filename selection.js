function validateForm() {
    //let x = document.forms["myForm"]["sname"].value;
    if (document.getElementById("t1").value == "") {
      confirm("Date must be filled out..");
      return false;
    }

    //let x = document.forms["myForm"]["name"].value;
    if (document.getElementById("t2").value == "") {
      confirm("Date must be filled out..");
      return false;
    }
  }
  function myFunction() {

    if(document.getElementById("d1").style.visibility == "hidden")
        document.getElementById("d1").style.visibility="visible";
    else
        document.getElementById("d1").style.visibility="hidden";
  }
  function abc( )
        {
            
            if(validateForm()==false )
                alert("required");

            else
            {
                myFunction();
            }

        }