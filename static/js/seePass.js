function see() {
    var x = document.getElementById("password");
    var y = document.getElementById("repeat-password");
    if (x.type === "password"){
      x.type = "text";
    } else {
      x.type = "password";
    }

    if (y.type === "password"){
        y.type = "text";
    } else {
      y.type = "password";
    
    }
  }