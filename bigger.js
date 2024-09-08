function bigger (num){
    let big =num[0];
    for(let i=1;i<=num.length;i++){
        if(num[i]>big){
            big=num[i];
            let big2=big;
            if(num[i]>big2){
                big2=num[i];
                big=big2;
            }

        }
    }
    return big;

}
let n =[1,44,5,3,2,78,90,2,32,1,34,23];
let result = bigger(n);
console.log(result);