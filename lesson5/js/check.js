document.addEventListener("DOMContentLoaded", function() {
  var error = document.getElementById("error");
  var status = document.getElementById("status");
  var fireworks1 = document.createElement("img");
  var fireworks2 = document.createElement("img");
  var part1 = false,
      part2 = false, 
      part3 = false, 
      part4 = false;

  function loadFireworks(fireworks, left) {
    fireworks.src = "fireworks.gif";
    fireworks.style.height = "200px";
    fireworks.style.width = "200px";
    fireworks.style.position = "absolute";
    fireworks.style.left = left;
    fireworks.style.top = "5%";
    document.body.appendChild(fireworks);
  }

  //part 1
  try {
    myName;
    if (typeof myName == "undefined") {
      error.innerHTML = "myName is undefined";
    }
    else if (typeof myName != "string") {
      error.innerHTML = "myName is not a string";
    }
    else if (myName.length == 0) {
      error.innerHTML = "myName is empty";
    }
    else {
      var p = document.createElement("p");
      p.innerHTML = "Part 1 complete!!!!";
      document.body.appendChild(p);
      status.innerHTML = "You are working on Part 2.";
      part1 = true;
    }
  }
  catch(err) {
    error.innerHTML = "myName is not declared";
  }

  if (part1) {
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
            part2 = true;
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
  }
  


  if (part2) {
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
                    part3 = true;
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
  }

  if (part3) {
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
            part4 = true;
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
  }



  if (part4) {
    //part 5
    try {
      myArray;
      if (typeof myArray == "undefined") {
        error.innerHTML = "myArray is undefined";
      }
      else if (typeof myArray != "object") {
        console.log(typeof myArray)
        error.innerHTML = "myArray is not a array";
      }
      else if (myArray.indexOf(1) == -1) {
        error.innerHTML = "myArray does not have the value 1 in it";
      }
      else if (myArray.indexOf("hello") == -1) {
        error.innerHTML = "myArray does not have the value 'hello' in it";
      }
      else {
        try {
        myArray2;
        if (typeof myArray2 == "undefined") {
          error.innerHTML = "myArray2 is undefined";
        }
        else if (typeof myArray2 != "object") {
          console.log(typeof myArray2)
          error.innerHTML = "myArray2 is not a array";
        }
        else if (myArray2.indexOf(2) == -1) {
          error.innerHTML = "myArray2 does not have the value 2 in it";
        }
        else if (myArray2.indexOf("world") == -1) {
          error.innerHTML = "myArray2 does not have the value 'world' in it";
        }
        else if (myArray2.indexOf(myName) == -1) {
          error.innerHTML = "myArray2 does not have the value myName in it";
        }
        else {
          var p = document.createElement("p");
          p.innerHTML = "Part 5 complete!!!!";
          document.body.appendChild(p);
          status.innerHTML = "You are done!!";
          document.getElementsByTagName("h1")[0].innerHTML = "Congratulations!!!!";
          loadFireworks(fireworks1, "10%");
          loadFireworks(fireworks2, "75%");
        }
      }
      catch(err) {
        error.innerHTML = "myArray2 is not declared";
      }
      }
    }
    catch(err) {
      error.innerHTML = "myArray is not declared";
    }
  }


});