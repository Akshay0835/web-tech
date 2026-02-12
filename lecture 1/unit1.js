// var x=10
// console.log("Test",x)


 function abc(){
    console.log("Hello")
 }
 abc();

 let show1=function(){
    console.log("Annonymous Function")
 }

 show1()

let show2=()=>console.log("Arrow......")

show2()

let add=(a,b)=>a+b;

console.log(add(5,6))

class student{
    constructor(name,marks){
        this.name=name;
        this.marks=marks;
    }
}

const s1=new student("Akshay",55)
const s2=new student("Akshat",66)
const s3=new student("Yash",77)

const num=[10,55,98,77,66,55];
num.sort();
console.log(num[3])

let oddEven=function(x){
    if(x%2==0)console.log("Even")
    else console.log("Odd")
}

oddEven(86757647654764764765475465)

let number=(a,b)=>(a>b)?a:b;

console.log(number(5,6));

let cal=(a,b,c)=>{
    if(c==="Add") console.log(a+b)
    else if(c==="Subs") console.log(a-b)
    else if(c==="Mul") console.log(a*b)
    else if(c==="Div") console.log(a/b)
}

cal(5,6,"Subs")

const user={
    name:"Akshay",
    age:40,
    welcome:function()
    {
        console.log(`${this.name} welcome to ES6 ,your age is ${this.age}`)
        console.log(this)
    }
};
user.welcome();
user.name="Test"
user.welcome()
console.log(this.name)


const employee={
    name:"Akshay",
    age:21,
    experience:2,
    company:"Amazon",

    intro:function(){
        console.log(`My name is ${this.name}. My age is ${this.age}. My years of experience is ${this.experience} and the company i am working in is ${this.company}`)
    }
};
employee.intro();


function outer(){
    let x=10;
    function inner(){
        console.log(x)
    }
    inner()
}
outer()

let a=5;
function outer(){
    let b=10
    function inner(){
        let c=15
        console.log(a ,b ,c)
    }
    inner()
}
outer()

let abc={
    name:"Akshay",
    outer : function(){
        console.log("Here in log", this.name),
        inner =()=>{
            console.log("this here", this.name)
        }
        inner()
    }
}
abc.outer()

let numbers=[10,20,30]

let[d,b,c]=numbers
console.log("d =",d)
console.log(b)
console.log(c)

let[x,y]=numbers
console.log("x =",x)
console.log("y =",y)

let myObj={
    name:"Abhishek",
    age:43,
    key:"XYZ"
}

myObj.name="Akshay"
let{name,age:Currentage}=myObj
console.log(name)
console.log(Currentage)

let objemp={
    name:"Akshay",
    age:22,
    Empid:"5567"
}

let dub={...objemp}

function baleCake(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag=true;
            if(flag)
            resolve("Cake is ready")
            else
            reject("Cake is not ready")
        },2000)
    })
}
baleCake().then((message)=>{
    console.log(message)
}).catch((error)=>{
    console.log(error)
})


console.log("1")

setTimeout(()=>{
    console.log("2")
},5000)

console.log("3")

console.log("before Execution")
for(var i=0;i<2;i++){
    setTimeout(function(){
        console.log("Set time put message")
        func1()
    },1000)
    func2()
}

console.log("After Execution")

function func1(){
    console.log("Function 1")
}

function func2(){
    console.log("Function 2")
}

console.log("1 . Start")
setTimeout(()=>{
    console.log("2. Cake is ready to eat");
},2000)
console.log("3. End")

function bakeCake(mycallback){
    console.log("1. Cake is in the oven")
    setTimeout(()=>{
        console.log("2. Cake is baked")
        mycallback()
    },2000)
}

bakeCake(()=>{
    console.log("3. cake is ready")
})

function bakeCake(){
    return new Promise((myresolve,myreject)=>{
        console.log("1. Baking cake")
        setTimeout(() => {
            let flag=true;
            if(flag){
                myresolve("2. Cake is ready")
            }else{
                myreject("2. Cake is burnt")
            }
        }, 2000);
    })
}

bakeCake().then((msg)=>{
    console.log(msg)
    console.log("3. Lets eat cake");
}).catch((msg)=>{
    console.log(msg)
    console.log("3. Go to pizza inst")
})


function bakeCake(){
    return new Promise((myresolve,myreject)=>{
        console.log("1. Baking cake")
        setTimeout(() => {
            let flag=false;
            if(flag){
                myresolve("2. Cake is ready")
            }else{
                myreject("2. Cake is burnt")
            }
        }, 2000);
    })
}

async function party(){
    console.log("1. Start Baking")
    try{
        const cake=await bakeCake();
        console.log(cake)
        console.log("3. Enjoy the cake")
    }
    catch(e){
        console.log(e)
        console.log("3. Go to pizza inst")
    }
}

party()