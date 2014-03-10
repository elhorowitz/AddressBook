$(document).ready(function() {
    
    $('#searches').keyup( function() {
        var search = document.getElementById("searches");
        var results = "";
        
        //start ajax call
        $.getJSON('data/contacts.json', function(data){
            var addresses = data.contacts;
            
            $.each(addresses, function(i){
                var name = addresses[i].Name;
                var email = addresses[i].Address;
                if (name.toLowerCase().match(search.value.toLowerCase())){
                    results += "<li><a class=\"contact\" href=\"mailto:"+email+"\">"+name+"</a></li>";
                }
            });
            $('#addresslist').html(results);
        });
        
    });
});
