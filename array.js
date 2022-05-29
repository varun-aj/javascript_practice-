//array is a collection of similar or differernt datA OF DATA types
var myarray = ["joh", 45];
console.log(myarray);

// multidimensional array/nested array
var arraymy = [
    ["yuo", 2],
    [67, 43, "jk"]
];

console.log(arraymy);
console.log(myarray[1]);
console.log(arraymy[0][1]);

//manipulating array with push;

myarray.push(["happy", "joy"]); //push adds to end of the array, unshift adds the rlement to beginning of the array
console.log(myarray);

var newone = myarray.pop(); //removes last element, shift() removes the first function
console.log(myarray);