$(document).ready(function(){

    var selection_text = "";

    var replaceAll = function(str, search, replacement) {
        var target = str+"";
        return target.replace(new RegExp(search, 'g'), replacement);
    };


    $('body').append($("<div id='quick-menu-view'><span id='search' class='quick-menu-button left'>WEB SEARCH</span><span id='close' class='quick-menu-button right'>CLOSE</span></div>"))

    $(document).on("mouseup keyup", function(e){
        var selection = window.getSelection().toString();
        var qmv = $("#quick-menu-view");
        if(selection != ""){
            // alert("selected: " + selection);
            qmv.css({"top": e.pageY -80+"px", "left": e.pageX-80+"px"});
            qmv.show();
            selection_text = selection;
        }else{
            if(qmv.is(":visible")){
                qmv.hide();
            }
        }

    });

    $("#quick-menu-view span#search").click(function(){
        searchSelection();
    });

    $(document).keydown(function (e) {
        var qmv = $("#quick-menu-view");

        if (e.ctrlKey && e.keyCode == 13 && qmv.is(":visible")) {
            searchSelection();
        }
    });

    var searchSelection = function(){
        var selection = selection_text;
        selection = encodeURIComponent(selection);
        var search_link = "http://www.google.com/search?q="+selection;
        window.open(search_link).focus();
    }
});