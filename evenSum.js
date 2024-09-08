function evenSum(num){
    let sum=0;
    for(let i =0;i<=num.length;i++){
        if(num[i]%2==0){
            sum=sum+num[i];
        }
    }
    return sum;
}
let result = evenSum([23,44,55,1,2,4,6,5,8.9]);
console.log(result);