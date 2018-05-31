$(document).ready(function() {
    var whoCalls = ["freecodecamp", "test_channel", "twitchpresents"];
    var twitchTRUE = "https://wind-bow.glitch.me/twitch-api/streams/";
    var twitchINFO = "https://wind-bow.glitch.me/twitch-api/channel/";
    
//Loop through the defaults and create a unique link for each
    for(var i = 0; i < whoCalls.length; i++){
        var twitchUNIQUE;
        twitchUNIQUE = twitchTRUE + whoCalls[i];

//call the API to confirm if the channel is offline      
        $.getJSON(twitchUNIQUE, isItOnline);
        
        
        function isItOnline(maybeItIS){
            if(maybeItIS.stream == "null"){
                stream status offline
            } 
        }
//loop assigns new links for channel info
        var twitchGET;
        twitchGET = twitchINFO + whoCalls[i];
        
//call the API for information

        $.getJSON(twitchGET,twitchPUSH)
        
        function twitchPUSH(pushedInfo){
            Push info gotten from the channel
        }
    }
});