(function () {
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
    
    var input = document.getElementById("searches");
    var book = addresses.contacts;
    var output = document.getElementById("addresslist");
    
    var result = {
        search: function(){
            var inputValue = input.value; 
            var results = "";
            
            output.innerHTML = "";
            if (book.length > 0 && inputValue !== ""){
                for(var i = 0; i < book.length; i += 1){
                    var name = book[i].Name;
                    var email = book[i].Address;
                   
                    if (name.toLowerCase().match(inputValue.toLowerCase())){
                        results += "<li><a class=\"contact\" href=\"mailto:"+email+"\">"+name+"</a></li>";
                    } 
                }
                output.innerHTML = results;
            }
        } 
    }
    
    input.addEventListener("keyup", result.search, false);
                
})();