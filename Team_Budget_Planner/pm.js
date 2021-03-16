
function storeInSession(){
    var obj = {}
    obj.cname= document.getElementById("cname").value;
    obj.pname= document.getElementById("pname").value;
    obj.budget= document.getElementById("budget").value;
    console.log(obj);
    var budString = JSON.stringify(obj)
    var i = parseInt(sessionStorage.getItem("index"));
    if(!i){
        sessionStorage.setItem("index", 1);
        i = parseInt(sessionStorage.getItem("index"));
    }
    sessionStorage.setItem("bud"+i,budString);
    sessionStorage.setItem("index", i+1);
    alert("Record Added");
    
}

function resetData(){
     document.getElementById("cname").value="";
     document.getElementById("pname").value="";
     document.getElementById("budget").value="";
}