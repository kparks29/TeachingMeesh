/*==============================
    Go To jsobjectdrills.js
==============================*/




function checkTask1(catName, catColor, catAge, catFriend1, catFriend2, catFavSpot, catFavToy) {
  // the below statement checks your code
  if (catName == "Pickle" && catColor == "black" && catAge == 7 && catFriend1 == "Ben" && catFriend2 == "Ethel" && catFavSpot == "piano" && catFavToy == "lazer light"){
    var story = "This is " + catName + " he is a " + catColor + " cat and is " + catAge + " years old.  His two friends are " + catFriend1 + " and " + catFriend2 + ".  Pickle loves to lay on the " + catFavSpot + " and goes crazy over his favorite toy the " + catFavToy + ".  If you ever meet him you will fall instantly in love!"
    var h3 = document.createElement('h3');
    var paragraph = document.createElement('p');
    h3.innerHTML = "Task 1 Complete!!"
    paragraph.innerHTML = story;
    document.getElementsByTagName("body")[0].appendChild(h3);
    document.getElementsByTagName("body")[0].appendChild(paragraph);
    return true;
  }
  else {
    alert("Task 1 incomplete: Not all your object calls were correct!");
    return false;
  }
}




function checkTask2(fbName, fbfName) {
  if (fbName == "Jason Stringe" && fbfName == "Sally"){
    var h3 = document.createElement('h3');
    var paragraph = document.createElement('p');
    h3.innerHTML = "Task 2 Complete!!"
    paragraph.innerHTML = "Wow, you just deciphered the facebook API!!!!  You found " + fbName + "and his friend " + fbfName + "using the API.  Congrats, you are now a facebook stalker ;)";
    document.getElementsByTagName("body")[0].appendChild(h3);
    document.getElementsByTagName("body")[0].appendChild(paragraph);
    return true;
  }
  else {
    alert("Task 2 incomplete: Not all your object calls were correct!");
    return false;
  }
}




function checkTask3(critics, reviews) {
  if (critics[0] == "Joe Baltake" && critics[1] == "Rafer Guzman" && critics[2] == "Richard Roeper" && critics[3] == "David Edelstein" && reviews[0] == "http://thepassionatemoviegoer.blogspot.com/2010/07/perfectimperfect.html" && reviews[1] == "http://www.newsday.com/entertainment/movies/toy-story-3-andy-grows-up-1.2028598" && reviews[2] == "http://www.richardroeper.com/reviews/toystory3.aspx" && reviews[3] == "http://nymag.com/movies/reviews/66799/"){
    var h3 = document.createElement('h3');
    var paragraph = document.createElement('p');
    var list = "";
    for (var i=0; i<critics.length; i++){
      list += "<li>Critic: " + critics[i] + " - " + "Review: <a href='" + reviews[i] + "' target='_blank'>" + reviews[i] + "</a></li>";
    }

    h3.innerHTML = "Task 3 Complete!!"
    paragraph.innerHTML = "Toy Story 3 Reviews:<ul>" + list + "</ul>" ;
    document.getElementsByTagName("body")[0].appendChild(h3);
    document.getElementsByTagName("body")[0].appendChild(paragraph);
    return true;
  }
  else {
    alert("Task 3 incomplete: Not all your object calls were correct!");
    return false;
  }
}




function checkTask4(doorId,doorName,doorPrice,doorTag1,doorTag2) {
  if (doorId == 1 && doorName == "A green door" && doorPrice == 12.50 && doorTag1 == "home" && doorTag2 == "green") {
    var h3 = document.createElement('h3');
    var paragraph = document.createElement('p');
    h3.innerHTML = "Task 4 Complete!!"
    paragraph.innerHTML = "That's a very <span style='color:lime;'>GREEN</span> door!" ;
    document.getElementsByTagName("body")[0].appendChild(h3);
    document.getElementsByTagName("body")[0].appendChild(paragraph);
    return true;
  }
  else {
    alert("Task 4 incomplete: Not all your object calls were correct!");
    return false;
  }

}





function checkTask5(donutType,donutName,donutPpu,donutBatter1,donutBatter2,donutBatter3,donutBatter4,donutTopping1,donutTopping2,donutTopping3,donutTopping4,donutTopping5,donutTopping6,donutTopping7) {
  if (donutType == "donut" && donutName == "Cake" && donutPpu == 0.55 && donutBatter1 == "Regular" && donutBatter2 == "Chocolate" && donutBatter3 == "Blueberry" && donutBatter4 == "Devil's Food" && donutTopping1 == "None" && donutTopping2 == "Glazed" && donutTopping3 == "Sugar" && donutTopping4 == "Powdered Sugar" && donutTopping5 == "Chocolate with Sprinkles" && donutTopping6 == "Chocolate" && donutTopping7 == "Maple") {
    var h3 = document.createElement('h3');
    var paragraph = document.createElement('p');
    h3.innerHTML = "Task 5 Complete!!"
    paragraph.innerHTML = "Mmm..... DONUTS!!!!!" ;
    document.getElementsByTagName("body")[0].appendChild(h3);
    document.getElementsByTagName("body")[0].appendChild(paragraph);
    return true;
  }
  else {
    alert("Task 5 incomplete: Not all your object calls were correct!");
    return false;
  }

}