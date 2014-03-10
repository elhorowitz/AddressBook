(function($){
    
    //define plugin
    $.fn.searchAddresses = function(options){
        
        //Define default options
        var defaults = {
            path: "data/contacts.json",
            output: "#addresslist"
        };
        
        //let options be customizable
        var options = $.extend(defaults, options);
        
        $(this).keyup(function() {
            var search = document.getElementById("searches");
            var results = "";
            
            //start ajax call
            $.getJSON(options.path, function(data){
                var addresses = data.contacts;
                
                $.each(addresses, function(i){
                    var name = addresses[i].Name;
                    var email = addresses[i].Address;
                    if (name.toLowerCase().match(search.value.toLowerCase())){
                        results += "<li><a class=\"contact\" href=\"mailto:"+email+"\">"+name+"</a></li>";
                    }
                });
                $(options.output).html(results);
            });
        });
    };

})(jQuery);


$(document).ready(function() {
    
    //attach searchAddresses plug-in to search
    $('#searches').searchAddresses();
    
});
