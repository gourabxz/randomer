
    var days = 31; 
    var cities = 10;
    function randGenarator(from, to){
        to++;
        var starting_range = to;
        var ending_range = (from - to);
        var num = Math.floor((Math.random() * ending_range) + starting_range);
        return num;
    }
    //  {
    //      {12,      12}, 
    //      {28,      28}, 
    //      {12,      28}
    //  };
    //console.log(randGenarator(5, 8));

    function main(){
        
        display.value = "";
        for(var i = 1; i<=days; i++){
            if(i==1)
                display.value = "{";
            
            for(var j = 1; j<=cities; j++){
                if(j==1)
                    display.value = display.value + "{";
        
                display.value = display.value + randGenarator(20, 55) ;
                if(j<cities)
                    display.value = display.value + ", ";
                
                if(j==cities)
                    display.value = display.value + "}";
                
                if(j==cities && i != 31)
                    display.value = display.value + ",";

            }
            if(i==31)
                display.value =  display.value + "};";
            
            display.value = display.value + "\n";
        }
    }
    
    
    main();




