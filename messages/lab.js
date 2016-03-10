function parse() {
        request = new XMLHttpRequest();
        request.open("GET", "data.json", true);
        messages = document.getElementById("messages");

        request.onreadystatechange = function() {
                if(request.readyState == 4 && request.status == 200) {
                        raw = request.responseText;
                        data = JSON.parse(raw);
                        out = "";
                        
                        for(i = 0; i < data.length; i++) {
                                out += "<p>" + data[i].content + " - " + 
                                        data[i].username + "</p>";
                        }

                        messages.innerHTML = out;
                }
        }
        request.send(null);
}