let role = "admin"; 

switch (role) {
  case "admin":
    console.log("Role is Admin");
    break;

  case "editor":
    console.log("Role is Editor");
    break;

  case "customer":
    console.log("Role is Customer");
    break;

  default:
    console.log("Invalid Role");
}
//2.
let value = "apple"; 

switch (value) {

  
  case "apple":
  case "banana":
  case "mango":
    console.log(value + " is a Fruit");
    break;

  
  case "carrot":
  case "potato":
  case "onion":
    console.log(value + " is a Vegetable");
    break;

 
  case "john":
  case "ram":
  case "sita":
    console.log(value + " is a Student");
    break;


  default:
    console.log("Not found in any category");
}
//3.
let a = 0; // change this from 0 to 5

switch(a) {
  case 0:
    console.log("What is your name?");
    break;

  case 1:
    console.log("What is your name?");
    break;

  case 2:
    console.log("your name?");
    break;

  case 3:
    console.log("name?");
    break;

  case 4:
    console.log("?");
    break;

  case 5:
    console.log("!");
    break;

  default:
    console.log("Invalid input");
}