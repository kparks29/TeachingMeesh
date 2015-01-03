/*==============================
    Go To jsobjectdrills.js
==============================*/







function checkTask1(actorName,actorAge,actorPhoneNum,actorNumChildren){
  if (actorName == "Johnny Depp" && actorAge == 51 && actorPhoneNum == "555-555-5555" && actorNumChildren == 2) {
    var story = "How much do we really know about " + actorName + "?  Well what we do know is he is " + actorAge.toString() + " years old and has " + actorNumChildren.toString() + " children.  But we are going to give you exclusive access right here, right now.  We got a hold of " + actorName + "'s phone number.  Here you go: " + actorPhoneNum + ". Tell him that we say hi!!";
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




function checkTask2(apartmentName,apartmentNumber,apartmentPrice,apartmentRooms,apartmentBaths){
  if (apartmentName == "Briarthorn" && apartmentNumber == 112 && apartmentPrice == 1545.00 && apartmentRooms == 2 && apartmentBaths == 2) {
    var story = "Are you looking for apartments.  Well I went to Fullerton and found a great little apartment complex called " + apartmentName + ".  They have the apartment number " + apartmentNumber + " available for rent.  It has " + apartmentRooms.toString() + " bedrooms and " + apartmentBaths.toString() + " bathrooms.  And the current rent amount for it is: " + apartmentPrice.toString() + ".  What a great deal!!!  <a href=''>Act Now!</a>";
    var h3 = document.createElement('h3');
    var paragraph = document.createElement('p');
    h3.innerHTML = "Task 2 Complete!!"
    paragraph.innerHTML = story;
    document.getElementsByTagName("body")[0].appendChild(h3);
    document.getElementsByTagName("body")[0].appendChild(paragraph);
    return true;
  }
  else {
    alert("Task 2 incomplete: Not all your object calls were correct!");
    return false;
  }
}




function checkTask3(recipeName, recipeProtein1, recipeProtein2, recipeProtein3, recipeVeggie1, recipeVeggie2, recipeVeggie3, recipeVeggie4, recipeSpice1, recipeSpice2, recipeSpice3, recipeServing){
  if (recipeName == "Veggie Chili" && recipeProtein1 == "Black Beans" && recipeProtein2 == "Kidney Beans" && recipeProtein3 == "Tofu" && recipeVeggie1 == "Red Bell Peppers" && recipeVeggie2 == "Onion" && recipeVeggie3 == "Garlic" && recipeVeggie4 == "Celery" && recipeSpice1 == "Pepper" && recipeSpice2 == "Salt" && recipeSpice3 == "Chili Powder" && recipeServing == "8oz") {
    var story = "Mmmmmm......Thanks for making me some chili<br><img src='http://media-cache-ec0.pinimg.com/736x/90/4b/a6/904ba652d21a82f907ce380f86369864.jpg' width='150' height'250'>";
    var h3 = document.createElement('h3');
    var paragraph = document.createElement('p');
    h3.innerHTML = "Task 3 Complete!!"
    paragraph.innerHTML = story;
    document.getElementsByTagName("body")[0].appendChild(h3);
    document.getElementsByTagName("body")[0].appendChild(paragraph);
    return true;
  }
  else {
    alert("Task 3 incomplete: Not all your object calls were correct!");
    return false;
  }
}




function checkTask4(bankNumber, bankCheckings, bankSavings, bankUsername, bankPassword, bankPin){
  if (bankNumber == 12345678 && bankCheckings == 12511.78 && bankSavings == 25129.12 && bankUsername == "fetaCheeseFan21" && bankPassword == "#moViEN1ghT" && bankPin == 1234) {
    var story = "Let's hack into Matt's bank account.  First we use his bank account number: '" + bankNumber.toString() + "'.  Then we will need to enter in his user name: '" + bankUsername + "' and password: '" + bankPassword + "'.  Don't forget the Pin number: '" + bankPin.toString() + "'.  <p>Sweet, we are in!  Now lets grab $" + bankCheckings.toString() + " from his checking account and $" + bankSavings.toString() + " from his savings account.  Sweet now you are rich and Matt is poor.  You have $<span style='color:red'>" + (bankCheckings + bankSavings).toString() + "</span>!!!</p>";
    var h3 = document.createElement('h3');
    var paragraph = document.createElement('p');
    h3.innerHTML = "Task 4 Complete!!"
    paragraph.innerHTML = story;
    document.getElementsByTagName("body")[0].appendChild(h3);
    document.getElementsByTagName("body")[0].appendChild(paragraph);
    return true;
  }
  else {
    alert("Task 4 incomplete: Not all your object calls were correct!");
    return false;
  }
}




function checkTask5(dogName, dogColor, dogWeight, dogBreed, dogFamily1, dogFamily2, dogImage, dogLikes1, dogLikes2, dogLikes3){
  if (dogName == "Falcor" && dogColor == "white" && dogWeight == "25lbs" && dogBreed == "pitbull" && dogFamily1 == "Striker" && dogFamily2 == "Chopper" && dogImage == "falcor.jpg" && dogLikes1 == "Barking at Strangers" && dogLikes2 == "Snuggling" && dogLikes3 == "Wiggling") {
    var story = "<img src='" + dogImage + "' height='250' width='250'><p>This is " + dogName + ".  She is a " + dogColor + " " + dogBreed + " and weighs " + dogWeight + ".</p><p>  She likes to " + dogLikes1 + ", " + dogLikes2 + ", and " + dogLikes3 + ".  " + dogName + "'s brother is " + dogFamily1 + " and her dad is " + dogFamily2 + ".  </p><p>Everybody loves " + dogName + "!!!!!!!</p>";
    var h3 = document.createElement('h3');
    var paragraph = document.createElement('p');
    h3.innerHTML = "Task 5 Complete!!"
    paragraph.innerHTML = story;
    document.getElementsByTagName("body")[0].appendChild(h3);
    document.getElementsByTagName("body")[0].appendChild(paragraph);
    return true;
  }
  else {
    alert("Task 5 incomplete: Not all your object calls were correct!");
    return false;
  }
}






function checkTask6(twitterName,twitterImage,twitterSize,twitterText1,twitterText1Length,twitterText2,twitterText2Length){
  if (twitterName == "masterProgrammer1" && twitterImage == "swift.jpg" && twitterSize == "18kb" && twitterText1 == "I just made a new language" && twitterText1Length == 26 && twitterText2 == "Download it now" && twitterText2Length == 16) {
    var story = "Woot!  <p>You just used the Twitter API.  Let's take a look at what information you got.</p><p>That's odd, there seems to be some guy named <strong style='font-size:25px;'>Ira</strong> claiming that he created a new programming language.  Check out this tweet by Ira. <blockquote>" + twitterName + " - '" + twitterText1 + "'<br ><img src='" + twitterImage + "' height='50' width='50'></blockquote><blockquote>" + twitterName + " - '" + twitterText2 + "'</blockquote> That looks a lot like swift to me.....  I thought that someone else made it.  What a Jerk!!!</p></p>";
    var h3 = document.createElement('h3');
    var paragraph = document.createElement('p');
    h3.innerHTML = "Task 6 Complete!!"
    paragraph.innerHTML = story;
    document.getElementsByTagName("body")[0].appendChild(h3);
    document.getElementsByTagName("body")[0].appendChild(paragraph);
    return true;
  }
  else {
    alert("Task 6 incomplete: Not all your object calls were correct!");
    return false;
  }
}




function checkTask7(reviewers,ratings,links){
  if (reviewers[0] == "Lizzy B" && reviewers[1] == "Johnny Z" && reviewers[2] == "sean n" && ratings[0] == 5 && ratings[1] == 5 && ratings[2] == 5 && links[0] == "http://www.yelp.com/biz/burger-monster-orange-county?hrid=-nOheicOFqAuOYRbdKeaaA" && links[1] == "http://www.yelp.com/biz/burger-monster-orange-county?hrid=-nOheicOFqAuOYRbdKeaaA" && links[2] == "http://www.yelp.com/biz/burger-monster-orange-county?hrid=-nOheicOFqAuOYRbdKeaaA") {
    var story = "Have you been to Burger Monster yet?  If you haven't you should!!!  Check out these latest reviews. <br> Name: " + reviewers[0] + " - Rating: " + ratings[0] + "<br> Name: " + reviewers[1] + " - Rating: " + ratings[1] + "<br> Name: " + reviewers[2] + " - Rating: " + ratings[2] + ".<p>If you love Burger Monster let us know <a href='" + links[0] + "'>HERE</a></p>";
    var h3 = document.createElement('h3');
    var paragraph = document.createElement('p');
    h3.innerHTML = "Task 7 Complete!!"
    paragraph.innerHTML = story;
    document.getElementsByTagName("body")[0].appendChild(h3);
    document.getElementsByTagName("body")[0].appendChild(paragraph);
    return true;
  }
  else {
    alert("Task 7 incomplete: Not all your object calls were correct!");
    return false;
  }
}







function checkTask8(coffeeBeanType,coffeeRoast,coffeeRegion,coffeeName,coffeePrice){
  if (coffeeBeanType == "Arabica" && coffeeRoast == "light" && coffeeRegion == "Africa" && coffeeName == "Somalian Pirate Blend" && coffeePrice == "12.99") {
    var story = "Have you tried Starbuck's newest blend of coffee?  It's called " + coffeeName + ".  <p>" + coffeeName + " is a " + coffeeRoast + " roast coffee that is 100% " + coffeeBeanType + " beans.  This blend comes from the " + coffeeRegion + " region and is priced at $" + coffeePrice + " per pound.  Get your " + coffeeName + " at your nearest Starbucks today!</p>";
    var h3 = document.createElement('h3');
    var paragraph = document.createElement('p');
    h3.innerHTML = "Task 8 Complete!!"
    paragraph.innerHTML = story;
    document.getElementsByTagName("body")[0].appendChild(h3);
    document.getElementsByTagName("body")[0].appendChild(paragraph);
    return true;
  }
  else {
    alert("Task 8 incomplete: Not all your object calls were correct!");
    return false;
  }
}






function checkTask9(recycledItems1,recycledItems2,recycledItems3,recycledItems4,recycledItems5,recycledItems6,compostItems1,compostItems2,compostItems3,trashItems){
  if (recycledItems1 == "Cans" && recycledItems2 == "Boxes" && recycledItems3 == "Plastic Bottles" && recycledItems4 == "Glass Bottles" && recycledItems5 == "Cardboard" && recycledItems6 == "Newspaper" && compostItems1 == "All Food Waste" && compostItems2 == "Coffee and Tea Waste" && compostItems3 == "Biodegradable Products" && trashItems == "Everything Else") {
    var story = "Thanks for being <span style='color:green;font-size:30px;'>GREEN</span> and saving our planet.  And remember... the power is yours!<br><img src='http://www.herostime.com/image/cache/data/categroyimg/Captain-Planet-300x200.jpg'>";
    var h3 = document.createElement('h3');
    var paragraph = document.createElement('p');
    h3.innerHTML = "Task 9 Complete!!"
    paragraph.innerHTML = story;
    document.getElementsByTagName("body")[0].appendChild(h3);
    document.getElementsByTagName("body")[0].appendChild(paragraph);
    return true;
  }
  else {
    alert("Task 9 incomplete: Not all your object calls were correct!");
    return false;
  }
}




function checkTask10(formTitle,formProperty1Type,formProperty2Type,formProperty3Type,formAgeDescription,formAgeMinimum,formRequired1,formRequired2){
  if (formTitle == "SignUp" && formProperty1Type == "string" && formProperty2Type == "string" && formProperty3Type == "integer" && formAgeDescription == "Age in years" && formAgeMinimum == 0 && formRequired1 == "firstName" && formRequired2 == "lastName") {
    var story = "Thank you for creating the " + formTitle + " form.  Now we can sign up more victims.....I mean members!";
    var h3 = document.createElement('h3');
    var paragraph = document.createElement('p');
    h3.innerHTML = "Task 10 Complete!!"
    paragraph.innerHTML = story;
    document.getElementsByTagName("body")[0].appendChild(h3);
    document.getElementsByTagName("body")[0].appendChild(paragraph);
    return true;
  }
  else {
    alert("Task 10 incomplete: Not all your object calls were correct!");
    return false;
  }
}
