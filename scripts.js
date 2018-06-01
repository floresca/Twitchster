$(document).ready(function() {
    var whoCalls = ["freecodecamp", "test_channel", "twitchpresents"];
    var twitchTRUE = "https://wind-bow.glitch.me/twitch-api/streams/";
    var twitchINFO = "https://wind-bow.glitch.me/twitch-api/channels/";
    
//Loop through the defaults and create a unique link for each
    for(var i = 0; i < whoCalls.length; i++){
        var twitchGET;
        twitchGET = twitchINFO + whoCalls[i];

//Call the API and get information from it
        $.getJSON(twitchGET,twitchPUSH)
        
        function twitchPUSH(pushedInfo){
            var Cicon = pushedInfo.logo;
            var CName = pushedInfo.display_name;
            var CShowing = pushedInfo.status;
            var CLink = pushedInfo.url;
            
//Create an LI element with span children to share the same space
            var list =  "<a href='"+CLink+"'>" +
                            "<li class='ChannelItem'>" +
                                "<span class='channel_icon'>" +
                                    "<img src='"+Cicon+"' class='icon'>" +
                                "</span>" +
                                "<span class='channel_name'>"+CName+"</span>" +
                                "<span class='channel_showing'>"+CShowing+"</span>" +
                                // "<span class='channel_remove glyphicon glyphicon-remove'></span>" +
                            "</li>" +
                        "</a>";

//Append our new LI into the UL element for every channel
            $("ul").append(list);
        }
    }
});


//call the API to confirm if the channel is offline    

        // var twitchUNIQUE;
        // twitchUNIQUE = twitchTRUE + whoCalls[i];
        
        // $.getJSON(twitchUNIQUE, isItOnline);
        
        
        // function isItOnline(maybeItIS){
        //     if(maybeItIS.stream == null){
        //         $("li").css({"background-color": "#d9d9d9"});
        //     } else {
        //         $("li").css({"background-color": "#99ff66"});
        //     }
        // }