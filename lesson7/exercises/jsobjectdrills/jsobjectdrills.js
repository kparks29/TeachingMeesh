document.addEventListener("DOMContentLoaded", function(){






/*==============================
            TASK 1
==============================*/

  var cat = {
    name: "Pickle",
    color: "black",
    age: 7,
    friends: ["Ben", "Ethel"],
    favorite: {sleepingSpot: "piano", toy: "lazer light"}
  };

  //fill out the variables using object calls from the object above
  var catName = "";     //should be "Pickle"
  var catColor = "";    //should be "black"
  var catAge = "";      //should be 7
  var catFriend1 = "";  //should be "Ben"
  var catFriend2 = "";  //should be "Ethel"
  var catFavSpot = "";  //should be "piano"
  var catFavToy = "";   //should be "lazer light"






/*==============================
            TASK 2
==============================*/

  var facebookAPI = {
    name: "Jason Stringe", 
    user_id: 75782347,
    friends: {
      data: [
        {
          first_name: "Sally", 
          user_id: 98198298
        }
      ]
    }
  };

  //fill out the variables using object calls from the object above
  var fbName = "";    //should be "Jason Stringe"
  var fbfName = "";   //should be "Sally"


/*==============================
            TASK 3
==============================*/

  var movieReviews = {
  "total": 4,
  "reviews": [
    {
      "critic": "Joe Baltake",
      "date": "2010-07-27",
      "freshness": "fresh",
      "publication": "Passionate Moviegoer",
      "quote": "'Toy Story 3': Alternately affecting, hilarious and heartbreaking and the most original prison-escape movie ever made",
      "links": {"review": "http://thepassionatemoviegoer.blogspot.com/2010/07/perfectimperfect.html"}
    },
    {
      "critic": "Rafer Guzman",
      "date": "2010-07-06",
      "freshness": "fresh",
      "publication": "Newsday",
      "quote": "It's sadder and scarier than its predecessors, but it also may be the most important chapter in the tale.",
      "links": {"review": "http://www.newsday.com/entertainment/movies/toy-story-3-andy-grows-up-1.2028598"}
    },
    {
      "critic": "Richard Roeper",
      "date": "2010-06-30",
      "original_score": "5/5",
      "freshness": "fresh",
      "publication": "Richard Roeper.com",
      "quote": "The best movie of the year so far.",
      "links": {"review": "http://www.richardroeper.com/reviews/toystory3.aspx"}
    },
    {
      "critic": "David Edelstein",
      "date": "2010-06-18",
      "freshness": "fresh",
      "publication": "New York Magazine",
      "quote": "The gags are all of a piece, right up to the forlorn yet enchanting finale.",
      "links": {"review": "http://nymag.com/movies/reviews/66799/"}
    }]
  };


  //complete the for loop so that it has all the critics and review links

  var length = "";     //should be the number of reviews
  var critics = [];
  var reviews = [];

  for (var i=0; i<length; i++){
    critics.push("CodeHERE");   //critics should be ["Joe Baltake", "Rafer Guzman", "Richard Roeper", "David Edelstein"]
    reviews.push("CodeHERE");   //reviews should be ["http://thepassionatemoviegoer.blogspot.com/2010/07/perfectimperfect.html", "http://www.newsday.com/entertainment/movies/toy-story-3-andy-grows-up-1.2028598", "http://www.richardroeper.com/reviews/toystory3.aspx", "http://nymag.com/movies/reviews/66799/"]
  }



/*==============================
            TASK 4
==============================*/
  var doorId, doorName, doorPrice, doorTag1, doorTag2;
  //complete the object to make the following calls correct
  door = {
    
  };
  
  
  if (Object.keys(door).length >= 4 || door.typeOf == Object && Object.keys(door.tags).length >= 2) {

    //should be 1
    doorId = door.id;
    //should be "A green door"       
    doorName = door.name;   
    //should be 12.50
    doorPrice = door.price;
    //should be "home"
    doorTag1 = door.tags.tag1;
    //should be "green"
    doorTag2 = door.tags.tag2;

  }





/*==============================
            TASK 5
==============================*/

//complete the object to make the below statements true
  var donutRecipe = {
   
  };


  if (Object.keys(donutRecipe).length >= 5 && donutRecipe.batters.batter.length >= 4 && donutRecipe.topping.length >= 7) {
    //should be "donut"
    var donutType = donutRecipe.type;   
    //should be "Cake"
    var donutName = donutRecipe.name;
    //should be 0.55
    var donutPpu = donutRecipe.ppu; 
    //should be "Regular"
    var donutBatter1 = donutRecipe.batters.batter[0].type; 
    //should be "Chocolate"
    var donutBatter2 = donutRecipe.batters.batter[1].type; 
    //should be "Blueberry"
    var donutBatter3 = donutRecipe.batters.batter[2].type; 
    //should be "Devil's Food"
    var donutBatter4 = donutRecipe.batters.batter[3].type; 
    //should be "None"
    var donutTopping1 = donutRecipe.topping[0].type; 
    //should be "Glazed"
    var donutTopping2 = donutRecipe.topping[1].type; 
    //should be "Sugar"
    var donutTopping3 = donutRecipe.topping[2].type; 
    //should be "Powdered Sugar"
    var donutTopping4 = donutRecipe.topping[3].type; 
    //should be "Chocolate with Sprinkles"
    var donutTopping5 = donutRecipe.topping[4].type; 
    //should be "Chocolate"
    var donutTopping6 = donutRecipe.topping[5].type; 
    //should be "Maple"
    var donutTopping7 = donutRecipe.topping[6].type;
  }


/*==============================
          Complete!!!
==============================*/
















//dont worry about this part


  if (checkTask1(catName, catColor, catAge, catFriend1, catFriend2, catFavSpot, catFavToy)) {
    if (checkTask2(fbName, fbfName)){
      if (checkTask3(critics, reviews)){
        if (checkTask4(doorId,doorName,doorPrice,doorTag1,doorTag2)){
          if (checkTask5(donutType,donutName,donutPpu,donutBatter1,donutBatter2,donutBatter3,donutBatter4,donutTopping1,donutTopping2,donutTopping3,donutTopping4,donutTopping5,donutTopping6,donutTopping7)){
            alert("Congrats!!  You completed Fun with JS Objects");
          }
        }
      }
    }
  }


});