
    var students = 100; 
    var subjetcs = 4;
    function randGenarator2(from, to){
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
    //console.log(randGenarator2(5, 8));

    function main2(){
        marks.value = "";
        for(var i = 1; i<=students; i++){
            if(i==1)
                marks.value = "{";
            
            for(var j = 1; j<=subjetcs; j++){
                if(j==1)
                    marks.value = marks.value + "{";
        
                marks.value = marks.value + randGenarator2(33, 95) ;
                if(j<subjetcs)
                    marks.value = marks.value + ", ";
                
                if(j==subjetcs)
                    marks.value = marks.value + "}";
                
                if(j==subjetcs && i != students)
                    marks.value = marks.value + ",";

            }
            if(i==students)
                marks.value =  marks.value + "};";
            
            marks.value = marks.value + "\n";
        }
    }
    
    
    main2();




