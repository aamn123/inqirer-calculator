import inquirer from "inquirer";  // install inquirer  old version so that it works 
// npm i inquirer@9.3.6           and         npm install --save-dev @types/inquirer
import chalk from "chalk";

import { sum,sub,mult,div } from "./function.js";

import showBanner from 'node-banner'   //node banner is used to make it beautiful and its command is npm i node-banner

import  gradient from "gradient-string" //grdient string is used to give colors to text


let answers=[    //npm init -y   and tsc --init commands  for package.json and tsconfig and write type =module in package.json file before debug word
{
    name :"num1",
    type:"number",
    message:gradient.rainbow ("Enter first number?"),
},
{
    name :"num2",
    type:"number",
    message:gradient.rainbow("Enter second number?"),
},



{
    name :"operation",
    type:"list",
    choices:["multiplication", "division", "subtraction","Addition"],
    message:gradient.rainbow("Enter your operation "),
},
];

let answer=[
    {
    name:"again",
    type:"confirm",    // on inqirer page , confirm means boolean 
     message:"Do you want to continue?" , 
     validate:(input:number)=>{                           //validate is like a function that retutn true if condition is true and throw error otherwise
         if(NaN=input){
              return "please enter a number ";
         }
       return false;
     }   
}
];

(async () => {
    await showBanner('CALCULATOR', 'This calculator can perform addition, subtraction, multiplication and division ',"green","red");
})();



async function calculator(){                                        // async function ki wajah se await chalay ga
let condition=true;
while(condition){
    let {num1,num2,operation}=await inquirer.prompt(answers)


if(operation==='Addition'){
    console.log(  'the sum of two number is ',sum(num1,num2))
}

else if(operation==='subtraction'){
    console.log(  'the sub of two number is ',sub(num1,num2))
}

else if(operation==='multiplication'){
    console.log(  'the multplication of two number is ',mult(num1,num2))
}

else if(operation==='division'){
    console.log(  'the division of two number is ',div (num1,num2))
}
let {again}=await inquirer.prompt(answer)
condition=again;

}
}

setTimeout(() => {   // we use setTimeout so that time delay 1sec and enter first number appear after calculator title
   calculator()  
}, 1000);
                //call function 