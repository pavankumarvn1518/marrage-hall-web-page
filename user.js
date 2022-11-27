function validateForm() {
    //let x = document.forms["myForm"]["sname"].value;
    if (document.getElementById("t1").value == "") {
      confirm("Username must be filled out..");
      return false;
    }

    //let x = document.forms["myForm"]["name"].value;
    if (document.getElementById("t2").value == "") {
      confirm("Password must be filled out..");
      return false;
    }
}