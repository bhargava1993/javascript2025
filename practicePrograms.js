

// Reverse a string



// let a = "Venukumar";

// let reverse = "";


// for (let i=a.length-1;i>=0;i--){
//     reverse = reverse + a[i]
// }

// console.log(reverse)





// palindrome program



// let a = "venu";


// let b= a.toLowerCase()

// console.log(b)


// let reverseWord = ""


// for(let i=b.length -1;i>=0;i--){

//     reverseWord = reverseWord+b[i]
// }

// console.log("reverseWord--------",reverseWord)


// if(b===reverseWord){
//     console.log("the word is palindrome")
// }else{
//     console.log("the word is not palindrome")
// }




// let  a = "Venukumar"


// let unique = [];


// for (let i=0;i<a.length;i++){
//     let exist = unique.includes(a[i])

//     if(!exist){
//         unique.push(a[i])
//     }
// }

// console.log(unique)




// let a = "Venukumar";

// let unique = "";


// for (let i=0;i<a.length;i++){


//     if(unique.indexOf(a[i]) === -1){
//         unique =  unique+ a[i]
//     }
// }

// console.log(a);
// console.log(unique)




// let str = "programming";
// let result = "";

// for (let i = 0; i < str.length; i++) {

//   // If character is not already in result, add it
//   if (result.indexOf(str[i]) === -1) {
//     result += str[i];
//   }
// }

// console.log("Original String:", str);
// console.log("After Removing Duplicates:", result);



//  Finding unique values of a string (or) Removing duplicates of a string


// let str = "Venukumar and Jagan"

// let unique = "";


// for(let i=0;i<str.length;i++){

//     if(unique.indexOf(str[i])=== -1){
//         unique = unique + str[i]

//     }
// }

// console.log(str)
// console.log(unique)



// finding first Non Repeating character of a string


// let str = "aabbccdeefd"

// let firstNonRepeat = "";

// for (let i = 0; i < str.length; i++) {
//     let count = 0;

//     for (let j = 0; j < str.length; j++) {

//         if (str[i] === str[j]) {
//             count = count + 1;
//         }
//     }

//     // console.log(count)


//     if (count === 1) {
//         firstNonRepeat = str[i]
//     }

//     // console.log(firstNonRepeat);

// }

// console.log(firstNonRepeat);


// if(count === 1){
//     firstNonRepeat = str[i]
// }

// console.log(firstNonRepeat);




// let str = "aabbccddefgh"

// let firstNonRepeat =""

// for(let i=0;i<str.length;i++){
//     let count = 0;

//     for(let j=0;j<str.length;j++){
//         if(str[i]=== str[j]){
//             count = count +1;
//         }
//     }

//     if(count===1){
//         firstNonRepeat = str[i]
//     }
// }

// console.log(firstNonRepeat)


// Find occurance of each character


// let a = "Venukumar and Venukumar";

// let count ={}

// for(let i=0;i<a.length;i++){

//     let char = a[i];

//     if(count[char]){
//         count[char] = count[char]+ 1;
//      }else{
//         count[char] = 1
//      }
    
    

// }
// console.log(count);




// let str = "Venukumar and Venukumar and Venukumar";

// let obj = {}

// for (let i=0;i<str.length;i++){
    
//     if(obj[str[i]]){
//         obj[str[i]] = obj[str[i]]+1
//     }else{
//         obj[str[i]] =1;
//     }
// }
// console.log(obj)

// console.log(Object.keys(obj))




// Check if two strings are angrams

// let a = "Heart"

// let b = "Earth"

// let c = a.toLowerCase()
// let d = b.toLowerCase()


// firstWord = c.split("").sort().join("")

// secondWord = d.split("").sort().join("")

// console.log("firstWord--------",firstWord)
// console.log("secondWord---------",secondWord)

// if(firstWord===secondWord){
//     console.log("It is an angram")
// }


// Find the longest substring of a string

let str = "venukumar and vkvkavak"

let longest ="";

for(let i=0;i<str.length;i++){
    let temp ="";

    for(let j=0;j<str.length;j++){

        if(temp.includes(str[i])){
            break;
        }



        temp = temp + str[j];
    }

    if(temp.length > longest.length){
        longest = temp;
    }
}

console.log("longest substring------",longest)
console.log("length of longest substring-------",longest.length)