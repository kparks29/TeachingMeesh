/* =========OBJECTIVES=============

  1) Be able to create your own JS Object
  2) Be able to write for loops
  3) Be able to make if else statements

=================================*/

var student = {
  name: "Matt",
  age: 21,
  id: 12312312312,
  friends: ["Angela, Tim, David"],
  bankAccounts: {
    chase: 1231223432,
    wellsfargo: 341412414,
    swiss: "asfasf-1231313"
  }
};

// console.log(myObject.bankAccounts.swiss);


// ======= DATA SET ========
/*
Harry Potter - Gryffindor
Hermione Granger- Gryffindor
Ron Weasley - Gryffindor
Luna Lovegood - Ravenclaw
Padma Patil - Ravenclaw
Cho Chang - Ravenclaw
Cedric Diggory - Hufflepuff
Hannah Abbott - Hufflepuff
Nymphadora Tonks - Hufflepuff
Draco Malfoy - Slytherin
Gregory Goyle - Slytherin
Vincent Crabbe - Slytherin
*/


//===========STEPS============
//create object
var harryPotterCharacters = {
  character: [
    {name: "Harry Potter", house: "Gryffindor"},
    {name: "Hermione Granger", house: "Gryffindor"},
    {name: "Ron Weasley", house: "Gryffindor"},
    {name: "Luna Lovegood", house: "Ravenclaw"},
    {name: "Padma Patil", house: "Ravenclaw"},
    {name: "Cho Chang", house: "Ravenclaw"},
    {name: "Cedric Diggory", house: "Hufflepuff"},
    {name: "Hannah Abbott", house: "Hufflepuff"},
    {name: "Nymphadora Tonks", house: "Hufflepuff"},
    {name: "Draco Malfoy", house: "Slytherin"},
    {name: "Gregory Goyle", house: "Slytherin"},
    {name: "Vincent Crabbe", house: "Slytherin"}
  ]
};






//create js version of $(document).ready()
document.addEventListener("DOMContentLoaded", function(){

  var gryffindor = document.getElementById("gryffindor");
  var ravenclaw = document.getElementById("ravenclaw");
  var hufflepuff = document.getElementById("hufflepuff");
  var slytherin = document.getElementById("slytherin");

  var gryffindorList = document.createElement("ul"); 
  var ravenclawList = document.createElement("ul"); 
  var hufflepuffList = document.createElement("ul"); 
  var slytherinList = document.createElement("ul"); 

  for (var i=0; i<harryPotterCharacters.character.length; i++) {
    var listItem = document.createElement("li");
    listItem.innerHTML = harryPotterCharacters.character[i].name;
    if (harryPotterCharacters.character[i].house == "Gryffindor"){
      gryffindorList.appendChild(listItem);
    }
    else if(harryPotterCharacters.character[i].house == "Ravenclaw"){
      ravenclawList.appendChild(listItem);
    }
    else if(harryPotterCharacters.character[i].house == "Hufflepuff"){
      hufflepuffList.appendChild(listItem);
    }
    else {
      slytherinList.appendChild(listItem);
    }
    ravenclaw.appendChild(ravenclawList);
    gryffindor.appendChild(gryffindorList);
    hufflepuff.appendChild(hufflepuffList);
    slytherin.appendChild(slytherinList);
  }
  

});

  //create a function that lists the names
    //get the first div
    //create the ul
    //create the for loop and base it off the length of the array
      //create an li
      //put the name into the innerHTML
      //append the list item to the list
    //append the list to the first div
  //call the function

//re-write with if statements



/*========ACTIVITIES==========

1) Create Your own JS Objects
2) Use a for loop to loop through your partner's object
3) Display the object in a div

============================*/
