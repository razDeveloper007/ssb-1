/*-Task N1-
    For sum, difference, product
*/

let op;
function selectOperation(el) {
  op = el.innerHTML;
}

function calc(){
  let result;
  let num1=parseInt(document.getElementById("num1").value);
  let num2=parseInt(document.getElementById("num2").value);

  switch(op){
    case '+':
    result = num1+num2;
    break;

    case '-':
    result=num1-num2;
    break;

    case 'x':
    result=num1 * num2;
    break;

    case ':':
    result=num1/num2;
    break;
  }

  document.getElementById("result").innerHTML = result;
}


/*-- for Quotient and Remainder  --*/

let a=14
let b=5

console.log(Math.floor(a/b))
console.log((a % b))

/*-Task N2-*/

let person={
    name: "Razmik",
    age: "18"
}

console.log("My name is Razmik, I am 18")

/*-Task N3-*/

let numbers=[0, -71, 89]

for(let j=0; j<numbers.length; j++){
    if(numbers[j]>=0){
        console.log("no")
    }else{
        console.log("yes")
    }
}

/*-Task N4-*/

let numbers2=[123, 35, 70]

for(i=0; i<numbers2.length; i++){
    if(123 && 35){
        console.log("odd")
    }else{
        console.log("even")
    }
}


/*-Task N5-*/

let x=3 
let y=14

if(x % y == 0){
    console.log('1')
}else{
    console.log('0')
}

let k=18
let z=2

if(k % z == 0){
    console.log('1')
}else{
    console.log('0')
}

let m=7
let n=21

if(m % n == 0){
    console.log('1')
}else{
    console.log('0')
}