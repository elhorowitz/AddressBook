<!DOCTYPE html>
<html>
    <head>
        <title>Address Book</title>
        <meta charset="utf-8">
        <script>
            function searchIt() {
                var addresses = {
                    "contacts": [
                        { "Name":"Jack Johnson" , "Address":"jack.johnson@fake.com"}, 
                        { "Name":"Kack Keihls" , "Address":"kack.keihls@fake.com"}, 
                        { "Name":"Lack Lamont" , "Address":"lack.lamont@fake.com"},
                        { "Name":"Mack McPherson" , "Address":"mack.mcpherson@fake.com"}, 
                        { "Name":"Nack Norris" , "Address":"nack.norris@fake.com"}, 
                        { "Name":"Oack Otis" , "Address":"oack.otis@fake.com"}
                    ]
                }
                var search = document.getElementById("searches");
                var results = "";
                
                for (i = 0; i < addresses.contacts.length; i = i + 1){
                    var name = addresses.contacts[i].Name;
                    var email = addresses.contacts[i].Address;
                   
                    if (name.match(search.value) || email.match(search.value)){
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