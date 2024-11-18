// // function PrintFactorial(n){
// //     var fact=1;
// //     for(let i=2;i<=n;i++){
// //         fact*=i;
// //     }
// //     return fact;
// // }
// // let store=PrintFactorial(10);
// // console.log(store);


// // function validatePassword(password) {
// //     var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// //     return regex.test(password);
// // }
// // console.log(validatePassword("Hello@123"));



// // function findAverage(n){
// //     let sum = 0;
// //     for(let i=1;i<=n;i++){
// //         sum+=i;
// //     }
// //     return sum/n;
// // }
// // let store=findAverage(100);
// // console.log(store);

// // 1st approach
// // function findSmallestNumber(start, end) {
// //     return start;
// // }


// // 2nd approach

function findSmallestNumber(num1, num2) {
    let smallest = num1;

    for (let i = num1; i <= num2; i++) {
        if (i < smallest) {
            smallest = i;
        }
    }

    return smallest;
}
let store=findSmallestNumber(-4, 3);
console.log(store);




// function switch_code(n){
//     let menu=n;
//     switch(menu){
//         case 1:
//             return("Dal Rice");
//             break;
//         case 2:
//             return("Curry Rice");
//             break;
//         case 3:
//             return("Butter Paneer");
//             break;
//         case 4:
//             return("Mushroom Masala");
//             break;
//         default:
//             return("Invalid Input");   
            
        
//     }
// }
// let store=switch_code(2);
// console.log(store);







