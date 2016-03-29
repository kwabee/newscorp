$(function() {
        
        /* Top Section - First News Row */
        var toprow1 = [];

        $.getJSON('json/top-row1.json', function(data) 
        {
            $.each(data.toprow1, function(i, c) 
            {
                var tblRow = "<td>" + c.img + "</td>"
                $(tblRow).appendTo("#newstoprow1 tbody");
                

            });
        });
        
        /* Top Section - Second News Row */
        var toprow2 = [];

        $.getJSON('json/top-row2.json', function(data) 
        {
            $.each(data.toprow2, function(i, d) 
            {
                var tblRow = "<td>" + d.img + "</td>"
                $(tblRow).appendTo("#newstoprow2 tbody");
                

            });
        });
     
        /* Bottom Section - First News Row */
        var newsrow1 = [];

        $.getJSON('json/bottom-row1.json', function(data) 
        {
            $.each(data.row1, function(i, f) 
            {
                var tblRow = "<td valign='top' class='cellstyle' width='400'>" + f.img + f.title + f.content + "</td>"
                $(tblRow).appendTo("#newsrow1 tbody");
            });
        });
        
        
        /* Bottom Section - Second News Row */
        var newsrow2 = [];
        $.getJSON('json/bottom-row2.json', function(data) 
        {
            $.each(data.row2, function(i, b) 
            {
                var tblRow = "<td valign='top' class='cellstyle' width='400'>" + b.img + b.title + b.content + "</td>"
                $(tblRow).appendTo("#newsrow2 tbody");
            });
        });
        
    
    });