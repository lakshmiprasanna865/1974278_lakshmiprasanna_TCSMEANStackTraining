let http = require("http");
let url = require("url")
const fs = require("fs");

let port = 9090;
let taskHtml = `
<form action="/store" method="get"><br/>
<label>Emp Id</label>
<input type="text" name="empId"/><br/><br/>
<label>Task Id</label>
<input type="text" name="taskId"/><br/><br/>
<label>Task</label>
<input type="text" name="task"/><br/><br/>
<label>Deadline</label>
<input type="date" name="date"/><br/><br/>
<input type="submit" value="Add task"/><br/></form>

<br/><br/><br/><br/>

<form action="/delete" method="get"><br/>
<label>Task ID</label>
<input type="number" name="taskId"/><br/><br/>
<input type="submit" value="Delete Task"></form>

<form action="/display" method="get"><br/>
<input type="submit" value="view records"></form>
`
var tInfo = [];
let app = http.createServer((req,res)=> {
    var path = url.parse(req.url,true).pathname;
    if(path == "/"){
        res.setHeader("content-type","text/html");
        res.end(taskHtml);
    }
    if(path == "/store"){
        var data = url.parse(req.url,true).query;

        var recordsArr=[];

var arr = fs.readFileSync("taskInfo.json");

if(JSON.parse(arr.length) !==0){
    const ob = JSON.parse(arr);
    if(ob.length!= 0){
        for(let i=0; i<ob.length; i++){
            recordsArr.push(ob[i]);
        }
    }
}

        //console.log(`EmpId: ${data.empId}, taskId: ${data.taskId}, Date: ${data.date}`);
        

        var empId=data.empId;
            var taskId=data.taskId;
            var task=data.task;
            var deadline=data.date;

        var taskObj={EmployeeID:empId,TaskID:taskId,Task:task,Deadline:deadline};


        recordsArr.push(taskObj);
      let jsonData = JSON.stringify(recordsArr);

    fs.writeFileSync("taskInfo.json", jsonData);
    console.log('file written');

    res.setHeader("content-type","text/html");
        res.end(taskHtml);
    }
     if(path == "/display"){
        var tFile = fs.readFileSync("taskInfo.json");
        let o=JSON.parse(tFile);
        console.log(o);

        var table = `
        <table border = "1">
        <tr>
        <th>Employee Id</th>
        <th>Task Id</th>
        <th>Task</th>
        <th>Date</th>
        </tr>
        `
        for(let i=0;i<o.length;i++){
            const s = o[i];
            table +=`
            <tr>
            <td>${s.EmployeeID}</td>
            <td>${s.TaskID}</td>
            <td>${s.Task}</td>
            <td>${s.Deadline}</td>
            `
        }
        table += `</table>`
        var final = taskHtml + table
        res.setHeader("content-type","text/html");
        res.end(final);
    }
    if(path == "/delete"){
        var data1 = url.parse(req.url,true).query;
        var taskId1=data1.taskId;

        var arr1 = JSON.parse(fs.readFileSync("taskInfo.json"));

        const index = arr1.findIndex(x => x.taskId === taskId1);

        if (index !== undefined) arr1.splice(index, 1);

    console.log("After removal:", arr1);

fs.writeFileSync("taskInfo.json", JSON.stringify(arr1));       
    
res.setHeader("content-type","text/html");
        res.end(taskHtml);        
    }     
})


app.listen(port,()=>console.log(`Server running on port number ${port}`));