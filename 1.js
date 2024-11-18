// var a;// declare
// a=10;// initialisation
// a=30;//re initialisation
// var a=40;// re declare
// console.log(a);

// let b=15;// declare
// b=30;// initialisation
// b="hi";//re initialisation
// // let b=10; //! re declare

// console.log(b);

// const c=100;
// // const c="b" //!re declare
// // c="hi";// !re initialisation
// console.log(c);

// let a=10;
// let b="10";
// let b=2;
// console.log(a===b);
// console.log(a!==b);
// console.log(a**b);

// let b=12;
// console.log(typeof(b));//12

// let str="12";
// console.log(typeof(str));
// console.log(10-str); //12
/*
let a = 10;
console.log(typeof a);
let b = 0.23;
console.log(typeof b);
// let c=1.2e2;
// console.log(typeof(c));
let str = "12";
console.log(typeof str);
console.log(a + str);
console.log(a - str);
let str1 = "";
console.log(typeof str1);
let c = true;
console.log(typeof c);
console.log(true + false);
// console.log(true + false);
console.log(true + true);
let d = null;
console.log(d);
console.log(typeof d);

let e;
console.log(typeof e);

*/
// function print(){
//     console.log("This is a ")
// }



// function add(a,b){
//     var sum=a+b;
//     return sum;
// }
// let total=add(349,54);
// console.log(total);


// c=9;
// console.log(c);


// let a=10;
// console.log(a);




// function multiply(a,b){
// let c=a*b;
// return c;
// }

// let multi=multiply(5,2);
// console.log(multi);


// let a=[true,null,[34,"hy"],10,"hello"];

// console.log(a.length);
// console.log(a);
// console.log(a[0]);
// console.log(a[2][0]);
// a.push(100,210);
// console.log(a);
// a.pop();
// console.log(a);
// a.unshift("first","Jay");
// console.log(a);
// a.shift();
// console.log(a);
// a.splice(0,2);// second argument is used for how many elements will be deleted  and its use to delete a element in an array
// console.log(a);
// a.splice(1,2,1,2,3)
// let b=a.slice(1,5);// its use to make copy of an array
// console.log(b);





// let a=[true,null,[34,"hy"],10,"hello"];


// let str="Jay Prakash Mangal";
// console.log(str.length);
// console.log(str[0]);

// let str1=str.toLowerCase();
// console.log(str1);

// console.log(str.length);
// console.log(str[0]);
// console.log(str[4]);

// let str1=str.toUpperCase();
// console.log(str1);


// let str2=str.toLowerCase();
// console.log(str2);


// let str3=str.slice(0,4);
// console.log(str3);

// let str4=str.indexOf("s",2);
// console.log(str4);

// let str5=str.lastIndexOf("s");
// console.log(str5);

// let str6=str.charAt(6);
// console.log(str6);

// let str7=str.split(" ");
// console.log(str7);

// let str8=str.replace('s',"L");
// console.log(str8);


// let str9=str.replaceAll('s',"L");
// console.log(str9);


// let student={
//     id: 99,
//     name: "abc",
//     marks:[12,343],
//     subject:{web:80,java:80},
//     isPresent: true
// }

// // get

// console.log(student.name);
// console.log(student);
// console.log(student.marks);
// console.log(student.subject.java);

// // edit
// student.isPresent=false
// console.log(student);
// // add
// student.age="20"
// console.log(student);

// // delete
// delete student.marks
// console.log(student);


// function student(id,name,marks,subject){
//     this.id=id;
//     this.name=name; 
//     this.marks=marks;
//     this.subject=subject;
    
// }

// let stu1=new student(1,"abc",23,"java");
// console.log(stu1);

// class Bikes {
//     constructor(name,price,id,engines) {
//         this.name=name;
//         this.price=price;
//         this.id=id;
//         this.engines=engines;
//     }
// }

// let bike1=new Bikes("Bajaj",10000,1,"100cc");
// let bike2=new Bikes("Bajaj",10000,1,"100cc");
// console.log(bike1);
// console.log(bike2);



// anonyms function

// function(){
//     for(let i=0;i<50;i++){
//         if(i%2!=0){
//             console.log("The Odd is :"+i);
            
//         }
//     }
// }



// function with Expression


// let oddNum=function(){
//     for(let i=0;i<50;i++){
//         if(i%2!=0){
//             console.log("The Odd is :"+i);
            
//         }
//     }
// }

// oddNum();
// console.log(typeof oddNum);


// Immediate Invoke funtion Expression


// (function(a,b){
//     for(let i=0;i<50;i++){
//         if(i%2!=0){
//             console.log("The Odd is :"+i);
//         }
//         console.log(a+b);
//     }
// })(10,20)


function add(a,b){
    return a+b;
}


function mul(a,b){
    return a*b;
}


function operation(funName,x,y){
    return funName(x,y);
}


let total=operation(add,10,20);

console.log(total);















