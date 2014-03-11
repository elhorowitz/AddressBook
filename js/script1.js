(function () {
    
    function getHTTPObject(){
        var xhr;
        if (window.XMLHttpRequest){
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject){
            xhr = new ActiveXObject("Msxm112.XMLHTTP");
        }
        return xhr;
    }
    
    function ajaxCall(dataURL, outputElement, callback){
        var request = getHTTPObject();
        outputElement.innerHTML = "Loading...";
        
        request.onreadystatechange = function(){
            if(request.readyState === 4 && request.status === 200){
                var addresses = JSON.parse(request.responseText);
                if(typeof callback === "function"){
                    callback(addresses);
                }
            }
        }
        
        request.open("GET", "data/contacts.json", true);
        request.send(null);
    }
        
    var input = document.getElementById("searches");
    var output = document.getElementById("addresslist");
    
    var result = {
        search: function(){
            var inputValue = input.value;
            
            ajaxCall('data/contacts.json', output, function(data){
                var book = data.contacts;
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
            })
        }
    }
    
    input.addEventListener("keyup", result.search, false);
                
})();