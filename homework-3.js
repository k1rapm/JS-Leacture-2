// 1

// function task1(a) {
//   let first = Math.floor(a / 1000);
//   let nth = Math.floor(a % 10);
//   if (first == nth) {
//     return "true";
//   } else return "false!";

// }
// console.log(task1(2021));

// 2

// function task2(a,b) {
//     let s = b/a
//     return s;
// }
// console.log(task2(4,5));

// 3

// function task3(a) {
//     let a1 =0;
//     let a2 = 1;
//     let a3 = 0;
//     for (let i = 0; i < a; i++) {
//         a3 = a2; //1 //
//         a2 = a2+a1; //1 //3
//         a1 = a3; //1 // 2

//     }
//     return Math.floor(a1)
// }
// console.log(task3(8));

// 4

// function task4(a) {
//   let cnt = 0;
//   for (let i = a; i >= 0; i =  Math.floor(i/= 2)) {
//     if (i == 2) {
//       cnt++;
//     }

//     if (cnt > 0) {
//       return "true";
//     }
//   }

//   if (cnt == 0) {
//     return "false";
//   }

// }
// console.log(task4(24));

// 5

// function task5(n) {
//   let cnt = "";
//   for (let i = n; i>0; i ++) {
//     if (i%2 == 0) {
//         i +=  i/2;
        
//     }
//     if (i%2!=0) {
//        i += i*3+1
//     }
//     if (i==1) {
//         return cnt;
//     }
//   }

 
// }

// console.log(task5(6));
