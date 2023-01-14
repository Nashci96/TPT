// #-fibonaci
// bilangan pertama
let x =1 
// bilangan kedua
let y =1
// bilangan jumlah 
let z =1
// total input bilangan
let input = 10

for (let i = 0;i<input;i++){
    console.log(z+" ")
    z = x + y
    x = y
    y = z  
}