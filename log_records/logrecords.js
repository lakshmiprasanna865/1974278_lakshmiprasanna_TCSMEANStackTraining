let fs = require("fs");
let obj = require("readline-sync");

//console.log(date.getDate());
let n = obj.questionInt("Enter the number of records ");
debugger;
let recordsArr=[];
debugger;
let arr = fs.readFileSync("logs.json");
debugger;
if(JSON.parse(arr.length) !==0){
    const ob = JSON.parse(arr);
    if(ob.length!= 0){
        for(let i=0; i<ob.length; i++){
            recordsArr.push(ob[i]);
        }
    }
}

//console.log(recordsArr,'recordsArr outside');
for (let i=0;i<n;i++){
    console.log("Enter "+(i+1)+"st record")
const date = new Date();
let fname = obj.question("Enter the first name ");
//console.log("Your fname is "+fname);
let lname = obj.question("Enter the last name ");
//console.log("Your lname is "+lname);
let gender = obj.question("Enter the gender ");
//console.log("Your gender is "+gender);
let email = obj.question("Enter the email ");
//console.log("Your email is "+email);
var dd = date.getDate();
var mm = date.getMonth()+1; 
var yyyy = date.getFullYear();
var t1 = date.getHours();
var t2 = date.getMinutes();
var t3 = date.getSeconds();
ctime = t1+':'+t2+':'+t3;
//console.log(t2)
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = mm+'/'+dd+'/'+yyyy;
const record = {"fname":fname, "lname":"lname","gender":gender,"email":email,"date":today,"time":ctime};

recordsArr.push(record);
}
console.log(recordsArr);
debugger;
// convert array object to string 
let jsonData = JSON.stringify(recordsArr);

fs.writeFileSync("logs.json", jsonData);
console.log('file written');


