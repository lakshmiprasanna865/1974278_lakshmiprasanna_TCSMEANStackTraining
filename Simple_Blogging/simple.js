function addBlog(){
    //var obj = {}
    var title = document.getElementById("title").value;
    var desc = document.getElementById("articles").value;
    var imageInfo = document.getElementById("imageId").files[0].name;
    //var budString = JSON.stringify(obj)
    var titles = JSON.stringify(title)
    var descs = JSON.stringify(desc)
    var imageInfos = JSON.stringify(imageInfo)
    var i = parseInt(sessionStorage.getItem("index"));
    if(!i){
        sessionStorage.setItem("index", 1);
        i = parseInt(sessionStorage.getItem("index"));
    }
    sessionStorage.setItem("titles"+i,titles);
    sessionStorage.setItem("descs"+i,descs);
    sessionStorage.setItem("imageInfos"+i,imageInfos);
    sessionStorage.setItem("index", i+1);
   // alert("Record Added");

   count = parseInt(sessionStorage.getItem("index"));

    insertNewBlog(title, desc, imageInfo, count)
    
    // document.getElementById("titleInfo").innerHTML=title;
    // document.getElementById("descInfo").innerHTML=desc;
    // document.getElementById("imageInfo").src=imageInfo;
}

function insertNewBlog(title, desc, imageInfo, count){
 
 var newDiv1 = document.createElement("div");
 newDiv1.className = 'center';
 
 newDiv1.appendChild(document.createElement("br"));
 
 //link external CCS
 if (!document.getElementById) document.write('<link rel="stylesheet" type="text/css" href="simplejs.css">');
  
 var t1 = document.createTextNode("Title:  "+ title);
 newDiv1.appendChild(document.createElement("br"));
 newDiv1.appendChild(t1);
 
 var d1 = document.createTextNode("Article:  "+ desc);
 newDiv1.appendChild(document.createElement("br"));
 newDiv1.appendChild(d1);


 var i1 = document.createTextNode("Image  "+ imageInfo);
 var elem = document.createElement("img");
 elem.setAttribute("src", imageInfo);
 newDiv1.appendChild(document.createElement("br"));
 newDiv1.appendChild(document.createElement("br"));
 newDiv1.appendChild(elem);
 
 document.body.appendChild(newDiv1);
 var newDiv2 = document.createElement("div");
 newDiv2.appendChild(document.createElement("br"));
 document.body.appendChild(newDiv2);
}

