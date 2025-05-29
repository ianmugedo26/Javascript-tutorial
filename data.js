//js data types examples
//boolean
var data = true;

if (data) {
    console.log("Boolean rule")
}else{
    console.log("Boolean is lame");
}

// null
 
var n = null;
console.log(n * 32);

// undefined

var a;

console.log(a + 2);

// number

var num = 3.6;
var num2 = 6.4;
console.log(num + num2);

//string 
var name = "Xenon";
console.log("Hi! My name is " + name);

// symbol
var sym1 = symbol("Kratos");
var sym2 = symbol("Kratos");
console.log(sym1 === sym2);
console.log(String(sym1) === String(sym2));
console.log(String(sym1));

//Object
var myCar = new Object();
myCar.make = "Rolls Royce";
myCar.model = "Cullinan";

console.log(myCar.make);