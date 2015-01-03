document.addEventListener("DOMContentLoaded", function(){
var reviewers = []; var ratings = []; var links = [];
var coffeeBeanType, coffeeName, coffeePrice, coffeeRoast, coffeeRegion;
var formTitle, formProperty1Type, formProperty2Type, formProperty3Type, formAgeDescription, formAgeMinimum, formRequired1, formRequired2;
var recycledItems1,recycledItems2,recycledItems3,recycledItems4,recycledItems5,recycledItems6,compostItems1,compostItems2,compostItems3,trashItems;
var coffeeBeanType,coffeeRoast,coffeeRegion, coffeeName, coffeePrice;


/*==============================
            BEGIN!!!
==============================*/




/*==============================
            TASK 1
==============================*/

  var actor = {
    name: "Johnny Depp",
    age: 51,
    phoneNumber: "555-555-5555",
    numChildren: 2
  };

  //fill out the variables using object calls from the object above
  var actorName = "";          //should be "Johnny Depp"
  var actorAge = "";           //should be 51
  var actorPhoneNum = "";      //should be "555-555-5555"
  var actorNumChildren = "";   //should be 2





/*==============================
            TASK 2
==============================*/

  var apartment = {
    "name": "Briarthorn",
    "number": 112,
    "price": 1545.00,
    "rooms": 2,
    "baths": 2
  };

  //fill out the variables using object calls from the object above
  var apartmentName = "";        //should be "Briarthorn"
  var apartmentNumber = "";      //should be 112
  var apartmentPrice = "";       //should be 1545.00
  var apartmentRooms = "";       //should be 2
  var apartmentBaths = "";       //should be 2       





/*==============================
            TASK 3
==============================*/

  var recipe = {
    name: "Veggie Chili",
    protein: ["Black Beans", "Kidney Beans", "Tofu"],
    veggies: ["Red Bell Peppers", "Onion", "Garlic", "Celery"],
    spices: ["Pepper", "Salt", "Chili Powder"],
    servingSize: "8oz"
  };

  //fill out the variables using object calls from the object above
  var recipeName = "";        //should be "Veggie Chili"
  var recipeProtein1 = "";    //should be "Black Beans"
  var recipeProtein2 = "";    //should be "Kidney Beans"
  var recipeProtein3 = "";    //should be "Tofu"
  var recipeVeggie1 = "";     //should be "Red Bell Peppers"
  var recipeVeggie2 = "";     //should be "Onion"
  var recipeVeggie3 = "";     //should be "Garlic"
  var recipeVeggie4 = "";     //should be "Celery"
  var recipeSpice1 = "";      //should be "Pepper"
  var recipeSpice2 = "";      //should be "Salt"
  var recipeSpice3 = "";      //should be "Chili Powder"
  var recipeServing = "";     //should be "8oz"






/*==============================
            TASK 4
==============================*/

  var bankAccounts = {
    number: 12345678,
    balances: {
      checkings: 12511.78, 
      savings: 25129.12
    },
    accountInfo: {
      username: "fetaCheeseFan21",
      password: "#moViEN1ghT",
      pin: 1234
    }
  };

  //fill out the variables using object calls from the object above
  var bankNumber = "";       //should be 12345678
  var bankCheckings = "";    //should be 12511.78
  var bankSavings = "";      //should be 25129.12
  var bankUsername = "";     //should be "fetaCheeseFan21"
  var bankPassword = "";     //should be "#moViEN1ghT"
  var bankPin = "";          //should be 1234








/*==============================
            TASK 5
==============================*/

  var dog = {
    name: "Falcor",
    attributes: {
      weight: "25lbs",
      color: "white",
      breed: "pitbull"
    },
    family: ["Striker", "Chopper"],
    image: "falcor.jpg",
    likes: ["Barking at Strangers", "Snuggling", "Wiggling"]
  };

  //fill out the variables using object calls from the object above
  var dogName = "";     //should be "Falcor"
  var dogColor = "";    //should be "white"
  var dogWeight = "";   //should be "25lbs"
  var dogBreed = "";    //should be "pitbull"
  var dogFamily1 = "";  //should be "Striker"
  var dogFamily2 = "";  //should be "Chopper"
  var dogImage = "";    //should be "falcor.jpg"
  var dogLikes1 = "";   //should be "Barking at Strangers"
  var dogLikes2 = "";   //should be "Snuggling"
  var dogLikes3 = "";   //should be "Wiggling"






/*==============================
            TASK 6
==============================*/

  var twitterAPI = {
    username: "masterProgrammer1", 
    tweets: {
      images: [
        {
          url: "swift.jpg", 
          size: "18kb"
        }
      ],
      text: [ 
        {
          data: "I just made a new language",
          length: 26
        },
        {
          data: "Download it now",
          length: 16
        }
      ]
    }
  };

  //fill out the variables using object calls from the object above
  var twitterName = "";         //should be "masterProgrammer1"
  var twitterImage = "";        //should be "swift.jpg"
  var twitterSize = "";         //should be "18kb"
  var twitterText1 = "";        //should be "I just made a new language"
  var twitterText1Length = "";  //should be 26
  var twitterText2 = "";        //should be "Download it now"
  var twitterText2Length = "";  //should be 16







/*==============================
            TASK 7
==============================*/

  var restaurantReviews = {
    "name": "Burger Monster",
    "reviews": [
      {
        "name": "Lizzy B",
        "date": "07-23-2014",
        "rating": 5,
        "review": "Orange County's Finest Food Truck is an understatement!  You can always count on quality burgers and great service from Burger Monster. Love these guys and their product, I highly recommend them to all my friends and fellow yelpers.",
        "links": {"review": "http://www.yelp.com/biz/burger-monster-orange-county?hrid=-nOheicOFqAuOYRbdKeaaA"}
      },
      {
        "name": "Johnny Z",
        "date": "07-21-2014",
        "rating": 5,
        "review": "I had their Attack of the Killer Potato burger and it was delicious. It was the right size and really savory. I really wanted to try their blue cheese burger too.  I also had their fries and initially didn't expect much from them but they were also really good. Just the right amount of salt too.  Next time I'm going to try their blue cheese burger. I can't wait.",
        "links": {"review": "http://www.yelp.com/biz/burger-monster-orange-county?hrid=-nOheicOFqAuOYRbdKeaaA"}
      },
      {
        "name": "sean n",
        "date": "07-21-2014",
        "rating": 5,
        "review": "Great Service and Great Food... you cant go wrong.  If you want Quality Ingredients with Creative Twists then this is the spot for you.  Also if you dont like burgers we cant be friends.",
        "links": {"review": "http://www.yelp.com/biz/burger-monster-orange-county?hrid=-nOheicOFqAuOYRbdKeaaA"}
      }
    ]
  };


  //complete the for loop so that it has all the critics and review links

  var length = 0;     //should be the number of reviews


   
  for (var i=0; i<length; i++){
    //reviewers should be ["Lizzy B", "Johnny Z", "sean n"]
    reviewers.push("CODEHERE"); 
    //ratings should be [5,5,5]   
    ratings.push("CODEHERE");   
    //links should be ["http://www.yelp.com/biz/burger-monster-orange-county?hrid=-nOheicOFqAuOYRbdKeaaA", "http://www.yelp.com/biz/burger-monster-orange-county?hrid=-nOheicOFqAuOYRbdKeaaA", "http://www.yelp.com/biz/burger-monster-orange-county?hrid=-nOheicOFqAuOYRbdKeaaA"]
    links.push("CODEHERE");  
  }



/*==============================
            TASK 8
==============================*/
  //complete the object to make the following calls correct
  coffee = {
    
  };
  
  
  if (Object.keys(coffee).length == 5) {

    //should be "Arabica"
    coffeeBeanType = coffee.beanType;
    //should be "light"       
    coffeeRoast = coffee.roast;   
    //should be "Africa"
    coffeeRegion = coffee.region;
    //should be "Somalian Pirate Blend"
    coffeeName = coffee.name;
    //should be 12.99
    coffeePrice = coffee.price;

  }





/*==============================
            TASK 9
==============================*/

//complete the object to make the below statements true
  var trash = {
    
  };


  if (Object.keys(trash).length == 3 && trash.recycle.length == 6 && trash.compost.length == 3) {
    //should be "Cans"
    recycledItems1 = trash.recycle[0];
    //should be "Boxes"
    recycledItems2 = trash.recycle[1];
    //should be "Plastic Bottles"
    recycledItems3 = trash.recycle[2];
    //should be "Glass Bottles"
    recycledItems4 = trash.recycle[3];
    //should be "Cardboard"
    recycledItems5 = trash.recycle[4];
    //should be "Newspaper"
    recycledItems6 = trash.recycle[5];   
    //should be "All Food Waste"
    compostItems1 = trash.compost[0];
    //should be "Coffee and Tea Waste"
    compostItems2 = trash.compost[1];
    //should be "Biodegradable Products"
    compostItems3 = trash.compost[2];
    //should be "Everything Else"
    trashItems = trash.trash;
    
  }






/*==============================
            TASK 10
==============================*/

//complete the object to make the below statements true
  var formData = {
    
  };


  if (Object.keys(formData).length == 3 && Object.keys(formData.properties).length == 3 && Object.keys(formData.properties.firstName).length == 1 && Object.keys(formData.properties.lastName).length == 1 && Object.keys(formData.properties.age).length == 3 && formData.required.length == 2) {


    //should be "SignUp"
    formTitle = formData.title;   
    //should be "string"
    formProperty1Type = formData.properties.firstName.type;
    //should be "string"
    formProperty2Type = formData.properties.lastName.type;
    //should be "integer"
    formProperty3Type = formData.properties.age.type;
    //should be "Age in years"
    formAgeDescription = formData.properties.age.description;
    //should be 0
    formAgeMinimum = formData.properties.age.minimum;
    //should be "firstName"
    formRequired1 = formData.required[0];
    //should be "lastName"
    formRequired2 = formData.required[1];
  }




/*==============================
          Complete!!!
==============================*/
















//dont worry about this part


  if (checkTask1(actorName,actorAge,actorPhoneNum,actorNumChildren)) {
    if (checkTask2(apartmentName,apartmentNumber,apartmentPrice,apartmentRooms,apartmentBaths)){
      if (checkTask3(recipeName, recipeProtein1, recipeProtein2, recipeProtein3, recipeVeggie1, recipeVeggie2, recipeVeggie3, recipeVeggie4, recipeSpice1, recipeSpice2, recipeSpice3, recipeServing)){
        if (checkTask4(bankNumber, bankCheckings, bankSavings, bankUsername, bankPassword, bankPin)){
          if (checkTask5(dogName, dogColor, dogWeight, dogBreed, dogFamily1, dogFamily2, dogImage, dogLikes1, dogLikes2, dogLikes3)){
            if (checkTask6(twitterName,twitterImage,twitterSize,twitterText1,twitterText1Length,twitterText2,twitterText2Length)){
              if (checkTask7(reviewers,ratings,links)){
                if (checkTask8(coffeeBeanType,coffeeRoast,coffeeRegion,coffeeName,coffeePrice)){
                  if (checkTask9(recycledItems1,recycledItems2,recycledItems3,recycledItems4,recycledItems5,recycledItems6,compostItems1,compostItems2,compostItems3,trashItems)){
                    if (checkTask10(formTitle,formProperty1Type,formProperty2Type,formProperty3Type,formAgeDescription,formAgeMinimum,formRequired1,formRequired2)){
                      alert("Congrats!!  You completed Fun with JS Objects 2!!");
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }


});