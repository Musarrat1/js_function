function add(price1,price2){
    const total = price1+price2;
    const sub = total*price1;
    const double = sub - price2;
    return double;
}
const price1 =200, price2=400;
const bill = add(price1,price2);
console.log(bill);