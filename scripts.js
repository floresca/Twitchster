$(document).ready(function() {
    var whoCalls = ["freecodecamp", "test_channel", "twitchpresents"];
    var twitchINFO = "https://wind-bow.glitch.me/twitch-api/channels/";
    var twitchTRUE = "https://wind-bow.glitch.me/twitch-api/streams/";
    var twitchGET;
    var AreWeLive;
    
//Loop through the defaults and create a unique link for each
    for(var i = 0; i < whoCalls.length; i++){
        twitchGET = twitchINFO + whoCalls[i];
        AreWeLive = twitchTRUE + whoCalls[i];
//Call the API and get information from it
        
        $.ajax({
          url: twitchGET,
          dataType: 'json',
          async: false,
          success: function(pushedInfo) {
            var Cicon = pushedInfo.logo;
            var CName = pushedInfo.display_name;
            var CShowing = pushedInfo.status;
            var CLink = pushedInfo.url;
            
//Create an LI element with span children to share the same space
            var listON =  "<a href='"+CLink+"' class='alive'>" +
                            "<li class='ChannelOn channel tooLong'>" +
                                "<span class='channel_icon'>" +
                                    "<img src='"+Cicon+"' class='icon'>" +
                                "</span>" +
                                "<span class='channel_name'>"+CName+"</span>" +
                                "<span class='channel_showing'>"+CShowing+"</span>" +
                                // "<span class='channel_remove glyphicon glyphicon-remove'></span>" +
                            "</li>" +
                        "</a>";
                        
            var listOFF = "<a href='"+CLink+"' class='dead'>" +
                            "<li class='ChannelOff tooLong'>" +
                                "<span class='channel_icon'>" +
                                    "<img src='"+Cicon+"' class='icon'>" +
                                "</span>" +
                                "<span class='channel_name'>"+CName+"</span>" +
                                "<span class='channel_showing'>Offline</span>" +
                                // "<span class='channel_remove glyphicon glyphicon-remove'></span>" +
                            "</li>" +
                        "</a>";
        

//This is the online vs offline   
               $.ajax({
                   url: AreWeLive,
                   dataType: "JSON",
                   success: function(twitchLIVE){
                       if(twitchLIVE.stream !== null){
                           $("ul").append(listON);
                       } else {
                           $("ul").append(listOFF);
                       }
                   }
               });
            }
        });
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