//lcm of two numbers
let a = 4;
let b = 6;

for(let i = a; ; i++){
    if(i % a == 0 && i % b == 0){
        console.log(i);
        break;
    }
}

//fibonacci series
let a = 0;
let b = 1;
console.log(a);
console.log(b);
for(let i=1;i<=5;i++){
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}

//largest number in array
let arr = [2,8,4,10];
let large = arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i] > large){
        large = arr[i];
    }
}
console.log(large);

//counting digits
let num = 12345;
let count = 0;
for (; num > 0; num = Math.floor(num / 10)) {
    count++;
}
console.log("Number of digits =", count);

//Right triangle pattern
for(let i=1;i<=5;i++){
    let star="";
    for(let j=1;j<=i;j++){
        star+="*";
    }
    console.log(star);
}

//left triangle pattern
for(let i=1;i<=5;i++){
    let star="";
for(let j=1;j<=5-i;j++){
        star+=" ";
    }
for(let k=1;k<=i;k++){
        star+="*";
    }
    console.log(star);
}

//normal triangle pattern
for(let i=1;i<=5;i++){

    let star="";

    for(let j=1;j<=5-i;j++){
        star+=" ";
    }

    for(let k=1;k<=2*i-1;k++){
        star+="*";
    }

    console.log(star);
}

// counting vowels
let str="Hello";
let count=0;
for(let i=0;i<str.length;i++){

    if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
        count++;
    }
}
console.log(count);

//counting uppercase
let str="HeLLo";
let count=0;

for(let i=0;i<str.length;i++){

    if(str[i]>="A" && str[i]<="Z"){
        count++;
    }
}
console.log(count);

//reverse the string
let str = "varsha";
let rev = "";
for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
}
console.log(rev);