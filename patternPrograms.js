// for (let i=1;i<=5;i++){
//     let star = "";
//     for(let j=1;j<=4;j++){
//         // console.log("*");
//         let stars = star + "*"
//     }
// }

// console.log(stars);


// let rows=5;
// let cols = 5;

// for (let i=1;i<=5;i++){
//     let star = "";

//     for (let j=1;j<=5;j++){
//         star = star + "*"

//     }
//     console.log(star);
// }


// for (let i=1;i<=5;i++){
//     let star = "";
//     for(let j=1;j<=i;j++){
//         star = star + "*"
//     }
//     console.log(star);
// }


// for (let i=5;i>=1;i--){
//     let star = "";

//     for (let j=i;j>=1;j--){
//         star = star + "*"
//     }
//     console.log(star);
// }



// for (let i=5;i>=1;i--){
//     let star = "";

//     for (let j=5;j>=i;j--){
//         star = star + "*"
//     }
//     console.log(star);
// }


// for (let i=5;i>=1;i--){
//     let star = "";

//     for (let j=i;j>=1;j--){
//         star = star + i
//     }
//     console.log(star);
// }


// for (let i=5;i>=1;i--){
//     let star = "";

//     for (let j=i;j>=1;j--){
//         star = star + j
//     }
//     console.log(star);
// }



// for (let i = 1; i <= 5; i++) {
//     let star = "";
//     for (let j = i; j >= 1; j--) {
//         star = star + "*"
//     }
//     console.log(star);

// }


// for (let i = 1; i <= 5; i++) {
//     let star = "";
//     for (let j = i; j >= 1; j--) {
//         star = star + j
//     }
//     console.log(star);

// }


// for (let i = 5; i >= 1; i--) {
//     let star = "";
//     for (let j = i; j <= 5; j++) {
//         star = star + "*"
//     }
//     console.log(star);

// }



// for (let i = 5; i >= 1; i--) {
//     let star = "";
//     for (let j = i; j <= 5; j++) {
//         star = star + i
//     }
//     console.log(star);

// }


// for (let i = 5; i >= 1; i--) {
//     let star = "";
//     for (let j = i; j <= 5; j++) {
//         star = star + j
//     }
//     console.log(star);

// }


// for(let i=1;i<=5;i++){
//     let star = ""
//     for(let j=i;j<=5;j++){
//         star = star + "*"
//     }
//     console.log(star);
// }

// for(let i=1;i<=5;i++){
//     let star = ""
//     for(let j=1;j<=i;j++){
//         star = star + "*"
//     }
//     console.log(star);
// }















// for(let i=1;i<=5;i++){
//     let row = "";
//     for(let j=1;j<=5;j++){
//         row = row + "*"
//     }
//     console.log(row)
// }

// output:
// *****
// *****              Square
// *****
// *****
// *****

// for(let i=0;i<=5;i++){
//     let star = "";
//     for(let j=1;j<=i;j++){
//         star= star + "*";
//     }
//     console.log(star);
// }

// output:
// *
// **            Right Angle Triangle
// ***
// ****
// *****


// for(let i=5;i>=0;i--){
//     let star ="";
//     for(let j=1;j<=i;j++){
//         star = star+"*"
//     }
//     console.log(star);
// }

// output:

// *****
// ****
// ***          Reverse Right Angle Triangle
// **
// *



// for(let i=1;i<=5;i++){
//     let row= "";                         
//     for(let j=1;j<=i;j++){
//         row = row + i;           just we replace "*" with "i" and it will print numbers 
//     }
//     console.log(row);
// }


// output:
// 1
// 22
// 333
// 4444
// 55555


// for(let i=5;i>=0;i--){
//     let row= "";
//     for(let j=1;j<=i;j++){
//         row=row+ i
//     }
//     console.log(row);
// }

// output:
// 55555
// 4444
// 333
// 22
// 1


// for(let i=1;i<=5;i++){
//     let row= "";
//     for(let j=1;j<=i;j++){
//         row = row + j                insted of "i" we print "j" it will come order wise numbers
//     }
//     console.log(row);
// }



// output:
// 1
// 12
// 123
// 1234
// 12345


// for(let i=5;i>=0;i--){
//     let row = "";
//     for(let j=1;j<=i;j++){
//         row= row + j
//     }
//     console.log(row);
// }


// output:
// 12345
// 1234
// 123
// 12
// 1



// // Pyramid [Important]
// for(let i=1;i<=5;i++){
//     let row="";

//     // Spaces
//     for(let j=1;j<=5-i;j++){  
//         row = row + " "
//     }
//     // Stars
//     for(let k=1;k<=i;k++){
//             row = row+"* "           here we need to give----> row=row+{star+space}
//         }
//     console.log(row)
// }

// output:
//     * 
//    * * 
//   * * *
//  * * * *
// * * * * *


// for(let i=1;i<=5;i++){
//     let row="";
//     for(let j=i;j<=5;j++){           //for spaces
//         row=row+" ";
//     }
//     for(let k=1;k<=i;k++){          //for stars
//         row=row+"*"
//     }
//     console.log(row);
// }

// output:

//      *
//     **
//    ***
//   ****
//  *****



// for(let i=1;i<=5;i++){
//     let row="";
//     for(let j=i;j<=5;j++){           //for spaces
//         row=row+" ";
//     }
//     for(let k=1;k<=i;k++){          //for stars
//         row=row+i
//     }
//     console.log(row);
// }

// output:
//      1
//     22
//    333
//   4444
//  55555


// for(let i=1;i<=5;i++){
//     let row="";
//     for(let j=i;j<=5;j++){           //for spaces
//         row=row+" ";
//     }
//     for(let k=1;k<=i;k++){          //for stars
//         row=row+k
//     }
//     console.log(row);
// }

// output:
//      1
//     12
//    123
//   1234
//  12345