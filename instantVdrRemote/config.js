var host =  "";
//put in the hostname of your VDR here, example:
//host = "http://mylocalvdr:8002";

var useMiniButtons = true;

/*
*  buttonCaptions
*  This object contains the visible labels/captions on the buttons
*  You can change the values inside the single quotes to adapt them 
*  to your needs or your language
*
*/

var buttonCaptions = {

    User0 : 'User0',
    User1 : 'User1',
    User2 : 'User2',
    User3 : 'User3',
    User4 : 'User4',
    User5 : 'User5',
    User6 : 'User6',
    User7 : 'User7',
    User8 : 'User8',
    User9 : 'User9',
    
    Power : 'Power',
    Setup : 'Setup',
    Audio : 'Audio',
    Subtitles : 'Subtitles',
    Channels : 'Channels',
    Schedule : 'Schedule',
    Timers : 'Timers',
    Recordings : 'Recordings',
    Commands : 'Commands',
    
    Record : 'Record',
    Play : 'Play',
    Pause : 'Pause',
    Stop : 'Stop',
    
    Prev : 'Previous',
    FastRew : 'Fast Rewind',
    FastFwd : 'Fast Forward',
    Next : 'Next',
    
    Red : 'Red',
    Green : 'Green',
    Yellow : 'Yellow',
    Blue : 'Blue',
    
    Menu : 'Menu',
    Info : 'Info',
    Ok : 'OK',
    Back : 'Back',
    
    Up : 'Up',
    Left : 'Left',
    Right : 'Right',
    Down : 'Down',
    
    VolUp : 'VolUp',
    VolDn : 'VolDn',
    Mute : 'Mute',
    
    ChanUp : 'ChanUp',
    ChanDn : 'ChanDn',
    ChanPrev : 'ChanPrev',
    
    None : 'None',
    Kbd : 'Kbd'
};

var buttonConfig = {
     Power      : {icon: 'alert'  ,theme: 'b'},
     Setup      : {icon: 'gear'   ,theme: 'b'},
     Audio      : {icon: 'grid'   ,theme: 'b'},
     Subtitles  : {icon: 'bars'   ,theme: 'b'},
     
     Channels   : {icon: 'bars'   ,theme: 'e'},
     Schedule   : {icon: 'bars'   ,theme: 'e'},
     Timers     : {icon: 'bars'   ,theme: 'e'},
     Recordings : {icon: 'bars'   ,theme: 'e'},
     
     Commands   : {icon: 'grid'   ,theme: 'b'},
     
     Record     : {icon: 'grid'   ,theme: 'b'},
     Play       : {icon: 'grid'   ,theme: 'b'},
     Pause      : {icon: 'grid'   ,theme: 'b'},
     Stop       : {icon: 'grid'   ,theme: 'b'},
     
     Prev       : {icon: 'back'   ,theme: 'c'},
     FastRew    : {icon: 'arrow-l',theme: 'c'},
     FastFwd    : {icon: 'arrow-r',theme: 'c'},
     Next       : {icon: 'forward',theme: 'c'},
     
     1 : {icon: 'grid',theme: 'e'},
     2 : {icon: 'grid',theme: 'e'},
     3 : {icon: 'grid',theme: 'e'},
     4 : {icon: 'grid',theme: 'e'},
     5 : {icon: 'grid',theme: 'e'},
     6 : {icon: 'grid',theme: 'e'},
     7 : {icon: 'grid',theme: 'e'},
     8 : {icon: 'grid',theme: 'e'},
     9 : {icon: 'grid',theme: 'e'},
     0 : {icon: 'grid',theme: 'c'},
     
     Red    : {icon: 'star',theme: 'b'},
     Green  : {icon: 'star',theme: 'b'},
     Yellow : {icon: 'star',theme: 'c'},
     Blue   : {icon: 'star',theme: 'b'},
     
     Menu  : {icon: 'home',theme: 'b'},
     Info  : {icon: 'info',theme: 'b'},
     Ok    : {icon: 'check',theme: 'e'},
     
     Back  : {icon: 'back',theme: 'b'},
     Up    : {icon: 'arrow-u',theme: 'a'},
     Left  : {icon: 'arrow-l',theme: 'a'},
     Right : {icon: 'arrow-r',theme: 'a'},
     Down  : {icon: 'arrow-d',theme: 'a'},
     
     VolUp : {icon: 'plus',theme: 'c'},
     VolDn : {icon: 'minus',theme: 'c'},
     Mute  : {icon: 'delete',theme: 'c'},
     
     ChanUp   : {icon: 'arrow-u',theme: 'c'},
     ChanDn   : {icon: 'arrow-d',theme: 'c'},
     ChanPrev : {icon: 'grid',   theme: 'c'},
     
     User0 : {icon: 'edit',theme: 'e'},
     User1 : {icon: 'edit',theme: 'e'},
     User2 : {icon: 'edit',theme: 'e'},
     User3 : {icon: 'edit',theme: 'e'},
     User4 : {icon: 'edit',theme: 'e'},
     User5 : {icon: 'edit',theme: 'e'},
     User6 : {icon: 'edit',theme: 'e'},
     User7 : {icon: 'edit',theme: 'e'},
     User8 : {icon: 'edit',theme: 'e'},
     User9 : {icon: 'edit',theme: 'e'},
     
     None  : {icon: 'grid',theme: 'b'},
     Kbd   : {icon: 'grid',theme: 'b'}
};

/*in here, we override some button icons 
  because the icons from 
  https://github.com/commadelimited/jQuery-Mobile-Icon-Pack
  offer us some nice icons for specific media contreol buttons
  on the remote control
*/
buttonConfig.Power.icon   = 'power';
buttonConfig.Record.icon  = 'circle';
buttonConfig.Play.icon    = 'play';
buttonConfig.Pause.icon   = 'pause';
buttonConfig.Stop.icon    = 'stop';
buttonConfig.Prev.icon    = 'step-backward';
buttonConfig.FastRew.icon = 'fast-backward';
buttonConfig.FastFwd.icon = 'fast-forward';
buttonConfig.Next.icon    = 'step-forward';
buttonConfig.VolUp.icon   = 'volume-up';
buttonConfig.VolDn.icon   = 'volume-down';
buttonConfig.Mute.icon    = 'volume-off';
buttonConfig.ChanUp.icon  = 'plus-sign';
buttonConfig.ChanDn.icon  = 'minus-sign';
buttonConfig.Channels.icon    = 'list-ol';
buttonConfig.Timers.icon  = 'time';
buttonConfig.Recordings.icon = 'film';
buttonConfig.Schedule.icon    = 'calendar';
buttonConfig.Audio.icon    = 'music';
buttonConfig.Subtitles.icon    = 'eye-open';
    
var remoteLayout = [
    //first breakable container with two areas
    [
        //first remote section (with 4 rows of buttons)
        [
            [ "Menu" ,  "Up" , "Info"   ],
            [ "Left" ,  "Ok" , "Right"  ],
            [ "Back" , "Down","ChanPrev"],
            [ "VolDn", "Mute", "VolUp", "ChanDn", "ChanUp" ]
        ],
        //second remote section (with 4 rows of buttons)
        [
         [ "Red", "Green", "Yellow", "Blue" ],
         [ "Channels", "Schedule", "Timers", "Recordings" ],
         [ "Record", "Play", "Pause", "Stop" ],
         [ "Prev", "FastRew", "FastFwd", "Next" ]
     ]
    ]
];

var cutterPageContent = [
    [ "1", "2", "3" ],
    [ "4", "5", "6" ],
    [ "7", "8", "9" ],
    [ "" , "0" , "" ],
    [ "Ok" ]
];

var keyMacroPageContent = [
    [ "User1", "User2", "User3" ],
    [ "User4", "User5", "User6" ],
    [ "User7", "User8", "User9" ],
    [ "None" , "User0", "Kbd"   ],
    [ ""     ,"Commands",""     ]
];
/*
var keyMacroPageContent = [
   [ "", "User1", "User2", "User3", "" ],
   [ "", "User4", "User5", "User6", "" ],
   [ "", "User7", "User8", "User9", "" ],
   [ "", "None" , "User0", "Kbd", ""   ],
   [ "", ""     ,"Commands","", ""     ]
];
*/

var panelContent = { 
    right: [
        [ "1", "2", "3" ],
        [ "4", "5", "6" ],
        [ "7", "8", "9" ],
        [ "" , "0" , "" ],
        [ "Ok" ]
    ],
    left: [
        [ "Power", "Setup" ],
        ["Audio", "Subtitles" ],
        [ "User1", "User2" ],
        [ "User3", "User4" ],
        [ "User5", "User6" ],
        [ "User7", "User8" ],
        [ "User9", "User0" ],
        [ "None",  "Kbd"   ],
        [ "Commands"       ]
    ]
};

var ivrButton = {
    ClosePanel_left : {
        theme: "a",
        icon: "arrow-l",
        caption: "Close Panel"
    },
    ClosePanel_right : {
        theme: "a",
        icon: "arrow-r",
        caption: "Close Panel"
    }
};