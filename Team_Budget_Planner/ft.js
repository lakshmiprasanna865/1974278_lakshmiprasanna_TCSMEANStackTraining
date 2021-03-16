function getSessionData(){
    k = "<table id='BudgetList' border='1px solid black'>"+"<thead><tr>";
    k += "<th>Client Name</th>";
    k += "<th>Project Name</th>";
    k += "<th>Budget</th>";
    k += "</tr>";
    k += "</thead>";

    //var k = '<tr>'+'<td>' + data.cname + '</td>'+'</tr>';
    k += "<tbody>";
    count = parseInt(sessionStorage.getItem("index"));
    for(var it = 1; it < count; it++){
        var data=JSON.parse(sessionStorage.getItem("bud"+it));
        k += "<tr>";
        k += '<td>' + data.cname + '</td>';
        k += '<td>' + data.pname + '</td>';
        k += '<td>' + data.budget + '</td>';
        k+= '</tr>';
    }
    k += "</tbody></table></br>";

    document.getElementById('tableData').innerHTML = k;
}
