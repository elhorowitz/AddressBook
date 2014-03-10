<!DOCTYPE html>
<html>
    <head>
        <title>Address Book</title>
        <meta charset="utf-8">
        <script>
            function searchIt() {
                
                var xhr;
                if (window.XMLHttpRequest){
                    xhr = new XMLHttpRequest();
                } else if (window.ActiveXObject){
                    xhr = new ActiveXObject("Msxm112.XMLHTTP");
                }
                
                var request = getHTTPObject();
                
                request.onreadystatechange = function(){
                    if(request.readyState === 4 && request.status === 200){
                        console.log(request.responseText);
                    }
                }
                request.open("GET", "data/contacts.json", true);
                request.send(null);
                
                
                var search = document.getElementById("searches");
                var results = "";
                
                if (search.value != ""){
                    for (i = 0; i < addresses.contacts.length; i = i + 1){
                        var name = addresses.contacts[i].Name;
                        var email = addresses.contacts[i].Address;
                       
                        if (name.toLowerCase().match(search.value.toLowerCase())){
                            results += "<li><a class=\"contact\" href=\"mailto:"+email+"\">"+name+"</a></li>";
                        } 
                    }
                    
                    document.getElementById("addresslist").innerHTML = results;
            }
        </script>
    </head>
    <body>
        <h1>Address Book</h1>
        <div id="searchfield">
            <input id="searches" type="text" name="FirstName" value="Search Addresses" onkeyup="searchIt()">   
        </div>
        <div id="results">
            <ul id="addresslist">
            </ul>
        </div>
    </body>
</html>