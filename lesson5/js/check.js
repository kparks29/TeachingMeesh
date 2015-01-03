document.addEventListener("DOMContentLoaded", function() {
  var error = document.getElementById("error");
  var status = document.getElementById("status");

  //part 1
  try {
    myName;
    if (typeof myName == "undefined") {
      error.innerHTML = "myName is undefined";
    }
    else if (typeof myName != "string") {
      error.innerHTML = "myName is not a string";
    }
    else {
      var p = document.createElement("p");
      p.innerHTML = "Part 1 complete!!!!";
      document.body.appendChild(p);
      status.innerHTML = "You are working on Part 2.";
    }
  }
  catch(err) {
    error.innerHTML = "myName is not declared";
  }


  //part 2
  try {
    firstNum;
    if (typeof firstNum == "undefined") {
      error.innerHTML = "firstNum is undefined";
    }
    else if (typeof firstNum != "number") {
      error.innerHTML = "firstNum is not a number";
    }
    else if (firstNum != 2) {
      error.innerHTML = "firstNum does not equal 2";
    }
    else {
      try {
      secondNum;
        if (typeof secondNum == "undefined") {
          error.innerHTML = "secondNum is undefined";
        }
        else if (typeof secondNum != "number") {
          error.innerHTML = "secondNum is not a number";
        }
        else if (secondNum != 5) {
          error.innerHTML = "secondNum does not equal 5";
        }
        else {
          var p = document.createElement("p");
          p.innerHTML = "Part 2 complete!!!!";
          document.body.appendChild(p);
          status.innerHTML = "You are working on Part 3.";
        }
      }
      catch(err) {
        error.innerHTML = "secondNum is not declared";
      }
    }
  }
  catch(err) {
    error.innerHTML = "firstNum is not declared";
  }



  //part 3
  try {
    sum;
    if (typeof sum == "undefined") {
      error.innerHTML = "sum is undefined";
    }
    else if (typeof sum != "number") {
      error.innerHTML = "sum is not a number";
    }
    else if (sum != 7) {
      error.innerHTML = "sum does not equal 7, check your math";
    }
    else {
      try {
        diff;
        if (typeof diff == "undefined") {
          error.innerHTML = "diff is undefined";
        }
        else if (typeof diff != "number") {
          error.innerHTML = "diff is not a number";
        }
        else if (diff != -3) {
          error.innerHTML = "diff does not equal -3, check your math";
        }
        else {
          try {
            product;
            if (typeof product == "undefined") {
              error.innerHTML = "product is undefined";
            }
            else if (typeof product != "number") {
              error.innerHTML = "product is not a number";
            }
            else if (product != 10) {
              error.innerHTML = "product does not equal 10, check your math";
            }
            else {
              try {
                quotient;
                if (typeof quotient == "undefined") {
                  error.innerHTML = "quotient is undefined";
                }
                else if (typeof quotient != "number") {
                  error.innerHTML = "quotient is not a number";
                }
                else if (quotient != 2/5) {
                  error.innerHTML = "quotient does not equal " + 2/5 + ", check your math";
                }
                else {
                  var p = document.createElement("p");
                  p.innerHTML = "Part 3 complete!!!!";
                  document.body.appendChild(p);
                  status.innerHTML = "You are working on Part 4.";
                }
              }
              catch(err) {
                error.innerHTML = "quotient is not declared";
              }
            }
          }
          catch(err) {
            error.innerHTML = "product is not declared";
          }
        }
      }
      catch(err) {
        error.innerHTML = "diff is not declared";
      }
    }
  }
  catch(err) {
    error.innerHTML = "sum is not declared";
  }


  //part 4
  try {
    myLength;
    if (typeof myLength == "undefined") {
      error.innerHTML = "myLength is undefined";
    }
    else if (typeof myLength != "number") {
      error.innerHTML = "myLength is not a number";
    }
    else if (myLength != myName.length) {
      error.innerHTML = "that is not the correct myLength of myName";
    }
    else {
      try {
        upcaseName;
        if (typeof upcaseName == "undefined") {
          error.innerHTML = "upcaseName is undefined";
        }
        else if (typeof upcaseName != "string") {
          error.innerHTML = "upcaseName is not a string";
        }
        else if (upcaseName != myName.toUpperCase()) {
          error.innerHTML = "upcaseName is not the uppercase of myName";
        }
        else {
          var p = document.createElement("p");
          p.innerHTML = "Part 4 complete!!!!";
          document.body.appendChild(p);
          status.innerHTML = "You are working on Part 5.";
        }
      }
      catch(err) {
        error.innerHTML = "upcaseName is not declared";
      }
    }
  }
  catch(err) {
    error.innerHTML = "myLength is not declared";
  }


});