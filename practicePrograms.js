

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


// Find the longest substring  without repeatingof a string

// let str = "venukumar and vkvkavak"

// let longest ="";

// for(let i=0;i<str.length;i++){
//     let temp ="";

//     for(let j=0;j<str.length;j++){

//         if(temp.includes(str[i])){
//             break;
//         }



//         temp = temp + str[j];
//     }

//     if(temp.length > longest.length){
//         longest = temp;
//     }
// }

// console.log("longest substring------",longest)
// console.log("length of longest substring-------",longest.length)




// let str = "abaabcabacabacbacbabcabc"

// let longest = "";

// for(let i=0;i<str.length;i++){
//     let temp = "";

//     for(let j=0;j<str.length;j++){
//       if(temp.includes(str[i])){
//         break;
//       }

//       temp = temp +str[j];
//     }

//     if(temp.length > longest.length){
//         longest = temp;
//     }
// }

// console.log("longest substring---------",longest)
// console.log("longest substring length-------",longest.length)


// convert string into interger 


// let str= "1234";

// let num = 0;


// for(let i=0;i<str.length;i++){
//     num = num *10 + (str[i] - "0")
// }

// console.log("num---",num)


// let str = "563748";

// let num =0;

// for(let i=0;i<str.length;i++){
//     num = num *10 + (str[i] - "0")
// }

// console.log("num------",num)




// Find most frequent character in astring



// let str = "venukumarvenukumarvenukumar"

// let maxCount = 0;
// let maxChar = "";


// for(let i=0;i<str.length;i++){
//     let count = 0;

//     for(let j=0;j<str.length;j++){

//         if(str[i] === str[j]){
//             count = count +1;
//         }
//     }

//     if(count >maxCount){
//         maxCount =count;
//         maxChar = str[i];

//     }
// }


// console.log("Most Frequent number -----",maxChar);
// console.log("maxCount ----------",maxCount);



// let str = "venukuamrafdjoweireimnfvsd.fnga;wiottarwiv ,askgjar";

// let maxChar ="";
// let maxCount = 0;


// for(let i=0;i<str.length;i++){
//     let count =0;

//     for(let j=0;j<str.length;j++){
//         if(str[i] === str[j]){
//             count = count +1;
//         }
//     }

//     if(count >maxCount){
//         maxCount = count;
//         maxChar = str[i];

//     }
// }\

// console.log("maximum count-------",maxCount)
// console.log("most freqquent character----------",maxChar)




// let str = "abc";

// for(let i=0;i<str.length;i++){
//     let substring = "";

//     for(let j=i;j<str.length;j++){
//         substring = substring + str[j];
        
//     }
//     console.log(substring);

// }


// let str = "Venukumar";


// for(let i=0;i<str.length;i++){
//     let substring = "";

//     for(let j=i;j<str.length;j++){
//         substring = substring +str[i]
//     }
//     console.log(substring)
// }



// Remove all white spaces from a string


// let str = "Hello Venukumar How are you "

// let result = "";

// for(let i=0;i<str.length;i++){
//     if(str[i] !== " "){
//         result = result + str[i]
//     }
// }

// console.log(result)





// Convert String to Title Case 

// str = "hello world welcome";

// let result = "";


// let words = str.split(" ")
// console.log(words);


// for(let i=0;i<words.length;i++){
//     let word  = words[i];

//     result = result + word[0].toUpperCase() + word.slice(1) + " ";

// }
// console.log("result-------",result.trim())




// Find the No.of words in a string 

// let str = "Hello Venukumar How are You"

// let words = str.split(" ")

// console.log("no.of words-----",words.length)


// let str = "Hello Venukumar How are you";

// let words = str.split(" ");
// let shorter = words[0];

// for(let i=0;i<words.length;i++){
//     if(words[i].length < shorter.length){
//         shorter = words[i];
//     }
// }

// console.log("shortest word-----",shorter)


// let str = "Hello Venukumar How are you";

// let words = str.split(" ");
// let shorter = words[0];

// for(let i=0;i<words.length;i++){
//     if(words[i].length < shorter.length){
//         shorter = words[i];
//     }
// }
// console.log("shorter words--------",shorter)



function longestPalindrome(str){
    let longest = "";

    for(let i=0;i<str.length;i++){

        for(let j=1;j<str.length;j++){

            let substring =str.slice(i , j+1);


            if(isPalindrome(substring)&& substring.length >longest.length){
                longest = substring;
            }
        }
    }
    return longest;
}


function isPalindrome(s){
    let left = 0;
    let right = s.length -1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

let str = "level and racecar and abcdcba";
console.log("Longest Palindrome:", longestPalindrome(str));



// function longestPalindrome(str) {
//     let longest = "";

//     for (let i = 0; i < str.length; i++) {

//         for (let j = i; j < str.length; j++) {

//             let substring = str.slice(i, j + 1);

//             // Check if substring is palindrome
//             if (isPalindrome(substring) && substring.length > longest.length) {
//                 longest = substring;
//             }
//         }
//     }

//     return longest;
// }

// Function to check palindrome
// function isPalindrome(s) {
//     let left = 0;
//     let right = s.length - 1;

//     while (left < right) {
//         if (s[left] !== s[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }

//     return true;
// }

// Example
// let str = "babad";
// console.log("Longest Palindrome:", longestPalindrome(str));
