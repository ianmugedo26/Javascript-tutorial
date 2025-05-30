// js nuggets : Ternary operator

// condition ? expr1 : expr2     

var age = 15;

if (age >= 18) {
    console.log("You are an adult!");
} else {
    console.log("You are a kid!");
};
 
console.log((age >= 18)? "You are an adult!" :"You are a kid!")


var stop;

age > 18 ? (
    console.log("OK, you can go."),
    stop = false
) : (
    console.log("Sorry, you are much young!"),
    stop = true
);

