var xmlhttp = new XMLHttpRequest();
var url = "data.json";

xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status = 200) {
                data = JSON.parse(xmlhttp.responseText);
        }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

function printMsg(arr) {
        var out = "";
        var output = getElementById("messages").innerHTML;
        for(i = 0; i < arr.length, i++) {
                out += "<span class='msg'>" + arr[i].content +
                        " - " + arr[i].username + "</span><br>";
        }

        output = out;
}