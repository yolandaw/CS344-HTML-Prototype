// timer

var flagclock = 0;
var flagstop = 1;
var stoptime = 0;
var currenttime;
var splitdate = '';
var output;
var clock;

function startstop()
{
    var startstop = document.getElementById('startstoptimer');
    var startdate = new Date();
    var starttime = startdate.getTime();
    if(flagclock==0)
    {
        startstop.value = 'Pause';
        flagclock = 1;
        counter(starttime);
    }
    else
    {
        startstop.value = 'Resume';
        flagclock = 0;
        flagstop = 1;
        splitdate = '';
    }
}

function counter(starttime)
{
    output = document.getElementById('output');
    clock = document.getElementById('clock');
    currenttime = new Date();
    var timediff = currenttime.getTime() - starttime;
    if(flagstop == 1)
    {
        timediff = timediff + stoptime
    }
    if(flagclock == 1)
    {
        clock.value = formattime(timediff,'');
        refresh = setTimeout('counter(' + starttime + ');',10);
    }
    else
    {
        window.clearTimeout(refresh);
        stoptime = timediff;
    }
}

function formattime(rawtime,roundtype)
{
    if(roundtype == 'round')
    {
        var ds = Math.round(rawtime/100) + '';
    }
    else
    {
        var ds = Math.floor(rawtime/100) + '';      
    }
    var sec = Math.floor(rawtime/1000);
    var min = Math.floor(rawtime/60000);
    ds = ds.charAt(ds.length - 1);
    if(min >= 60)
    {
        startstop();
    }
    sec = sec - 60 * min + '';
    if(sec.charAt(sec.length - 2) != '')
    {
        sec = sec.charAt(sec.length - 2) + sec.charAt(sec.length - 1);
    }
    else
    {
        sec = 0 + sec.charAt(sec.length - 1);
    }   
    min = min + '';
    if(min.charAt(min.length - 2) != '')
    {
        min = min.charAt(min.length - 2)+min.charAt(min.length - 1);
    }
    else
    {
        min = 0 + min.charAt(min.length - 1);
    }
    return min + ':' + sec;
}

// review screens: toggle showing question and answer & animations of card piles


$(document).ready(function(){

    $('#answer').hide();
    $('.difficulty-buttons').hide();
    $('#new-card-after').hide();
    $('#studying-good').hide();
    $('#studying-hard').hide();
    $('#done-after').hide();

    $('#show-answer-btn').on(
        'click',
        function() {
            $('#question, #answer').toggle();
            $('#show-answer-btn').toggle();
            $('.difficulty-buttons').toggle();
        }
    );
    $('.difficulty-buttons button').on(
        'click',
        function() {
            $('#question, #answer').toggle();
            $('.difficulty-buttons').toggle();
            $('#show-answer-btn').toggle();

        }
    );


    $('#new-card-hard').on(
        'click',
        function() {
            $('#new-card-after').show();
            $('#new-card').hide();
            $('#studying').hide();
            $('#studying-hard').show();
        }
    );
    $('#new-card-good').on(
        'click',
        function() {
            $('#new-card-after').show();
            $('#new-card').hide();
            $('#studying').hide();
            $('#studying-good').show();
        }
    );
    $('#new-card-easy').on(
        'click',
        function() {
            $('#new-card-after').show();
            $('#new-card').hide();
            $('#done').hide();
            $('#done-after').show();
        }
    );




}); 