// console.log("Hello")

// let a = 10

// a = "hello"

// console.log(a)


// {
//     let b  // local scope
//     var c // global scope 
//     b = 10 
//     c =20
//     const a = "hello"

//     console.log(c)
//     console.log(b)
// }
// console.log(c)
// console.log(b)

//data types 

    // 1. Primitive - number , string , boolean, null , undefined

    // 2. Non Primitive - array , object

// a = 10
// console.log(typeof(a));
// a = "hello"
// console.log(typeof(a));
// a = true    
// console.log(typeof(a));
// a = null    
// console.log(typeof(a));
// a = undefined    
// console.log(typeof(a));

// console.log(a)
// Single line comment
/* 
    lorem multi line comment
    hi 

*/

//operators - 
    // 1. Arithmetic - + , - , * , / , % , **(power)

    // 2. Assignment - = , += , -= - A = A - 1 => A-=1 , *= , /= , %=

    // 3. Comparison - == , === , != , !== , > , < , >= , <=

    // 4. Logical - && , || , !

    // 5. Unary - ++ , --

    // 6. Ternary - condition ? value_if_true : value_if_false

 n = 10 
 m = "10"

//  if(n === m){
//     console.log("Equal");
//  }else{
//     console.log("Not Equal");
//  }

//  if(n != m){
//     console.log("Equal");
//  }else{
//     console.log("Not Equal");
//  }

//  function greet(){
//     console.log("Hello World");
//  }

//  greet()

//  //arrow function 

//  let hello = () =>{
//     console.log("Hello from arrow function");

//  }

//  hello()

//  for( i = 0 ; i < 5 ; i++){
//     console.log(i);
//  }

// Non Primitive datatypes - array and object 

let arr  = [0 , 1 , 2 , 3 , "hello" , [5,6,7] , {c:210}] // array declaration

console.log(arr[6].c)

arr[1] = 7
console.log(arr)
console.log(arr.length)

arr.push(5)
arr.unshift(1)
console.log(arr)
arr.pop()
arr.shift()
console.log(arr)

arr.splice(3,0,2)

console.log(arr)

let obj = {
    name : "joe",
    age:20,
    boolean : true ,
    arr :[1,2,"hello"]
}

console.log(obj.name)
console.log(obj["name"])

obj.age = 30
console.log(obj)

obj["no"]=327;
obj.city = "Chennai"
console.log(obj)

delete obj.boolean
delete obj["arr"]
console.log(obj)