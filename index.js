//var let const

var a=5;
let b=10;
const c=2;
console.log("before scope ",a,b,c);
for(let i=0;i<=0;i++)
{
    a=10;
    b=30;
   // c=5; its is constant
    console.log("after changing ");
    console.log(a);
    console.log(b);
    console.log(c)
}
for(let j=0;j<=0;j++){
    var a=70;
    let b=80;
    const c=90;
    console.log("after declaring");
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a,b,c);  
// var redeclared,upadte  --- let update ,notredeclared ---  
// const will not update
console.log("------------");
//string
let string="HELLO WORLD"
console.log(string);
let low=string.toLowerCase();
let len=string.length;
let cha=string.charAt(3);
let join=string.concat(" ",low);
let charr=string.charCodeAt(0);
let sli=string.slice(2,7);
console.log(low,"-",len,"-",cha,"-",charr,"-",join,"-",sli);
console.log("------------");
//objects
const obj=new Object();
obj.first="sudhan";
obj.last="S";
obj.number="9384*****4";
obj.role="software develoer";
obj.salary="1000000";
console.log("object",obj);
obj.ent=function(){
    return this.first+" "+this.last+" "+this.salary;
}
console.log(obj.ent(),obj.role);
console.log("------------");

//array
var list=[1,5,4,3,9,3,2];
var sor=list.sort();
var max=Math.max.apply(null,list);
var pop=list.pop();
var push=list.push(25);
var unshift=list.unshift(70);
console.log(sor+"-"+ max+"-"+pop+"-"+push);
console.log("------------");

//operators
var first=5;
var second=1;
var any=(first>second)?"first is big":"second is big";
console.log(first&second,first|second,any);
console.log("------------");
//if else 
function check(){
    if(first>second){
       console.log("1st");
    }
    else if(second>first){
        console.log("2nd");
    }
    else{
        console.log("none")
    }
}
check();
console.log("------------");

//switch
switch(10){
    case 1:
        console.log("num is 1");
        break;
    case 5:
        console.log("num is 5");
        break;
    case 10:
        console.log("num is 10");
        break;
    default:
        console.log('none');
}
console.log("------------");

//loop

let vals='SARAVANASUDHAN';
let ans1='';
let ans2='';
for(let x in vals){
    ans1+=x;
}
for(let x of vals){
    ans2+=x;
}
console.log(ans1,ans2);
console.log("------------");
//function
var arrow=(a,b)=>{
    return a+b;
}
console.log(arrow(5,10));
console.log("------------");
//rest and default
//default
function print(name='guest'){
   return `hello ${name}`;
}
console.log(print("sudhan"));
console.log(print());
//rest
function numbers(...num){
    return num.reduce((sum,n)=>sum+n,0);
}
console.log(numbers(1,2,3,4,9));
console.log("THE END");