function compare(num){
    const evens = [];
    for(let i =0;i<=num.length;i++){
    if(num[i]%2==0){
       evens.push(num[i]);
    }
 }
 return evens;
}
const n=[1,2,4,5,6];
const isEven = compare(n);
console.log(isEven);