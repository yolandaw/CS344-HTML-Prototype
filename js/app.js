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

    $('#q1answer').hide();
    $('#q2answer').hide();
    $('#question2').hide();
    $('.difficulty-buttons').hide();
    $('#new-card-after').hide();
    $('#studying-good').hide();
    $('#studying-hard').hide();
    $('#done-after').hide();
    $('#show-answer-btn-q2').hide();
    $('#q2-cards').hide();


// show answer buttons for q1 and q2
    $('#show-answer-btn-q1').on(
        'click',
        function() {
            $('#q1question, #q1answer').toggle();
            $('#show-answer-btn-q1').toggle();
            $('#difficulty-btn-q1').toggle();
        }
    );    
    $('#show-answer-btn-q2').on(
        'click',
        function() {
            $('#q2question, #q2answer').toggle();
            $('#show-answer-btn-q2').toggle();
            $('#difficulty-btn-q2').toggle();
        }
    );

// difficulty buttons (hard, good, easy) for q1 and q2
    $('#difficulty-btn-q1 button').on(
        'click',
        function() {
            $('#question1, #question2').toggle();
            $('#q2question').show();
            $('#q2answer').hide();
            $('#difficulty-btn-q1, #show-answer-btn-q2').toggle();
        }
    );
    $('#difficulty-btn-q2 button').on(
        'click',
        function() {
            $('#question1, #question2').toggle();
            $('#q1question').show();
            $('#q1answer').hide();
            $('#difficulty-btn-q2, #show-answer-btn-q1').toggle();

        }
    );

// individual difficulty buttons for q1, which toggle the images of the card piles
    $('#new-card-hard').on(
        'click',
        function() {
            $('#q1-cards #new-card-after').show();
            $('#q1-cards #new-card').hide();
            $('#q1-cards #studying').hide();
            $('#q1-cards #studying-hard').show();
        }
    );
    $('#new-card-good').on(
        'click',
        function() {
            $('#q1-cards #new-card-after').show();
            $('#q1-cards #new-card').hide();
            $('#q1-cards #studying').hide();
            $('#q1-cards #studying-good').show();
        }
    );
    $('#new-card-easy').on(
        'click',
        function() {
            $('#q1-cards #new-card-after').show();
            $('#q1-cards #new-card').hide();
            $('#q1-cards #done').hide();
            $('#q1-cards #done-after').show();
        }
    );

// individual difficulty buttons for q2, which toggle the images of the card piles
    $('#review-card-hard').on(
        'click',
        function() {
            $('#q2-cards #new-card-after').show();
            $('#q2-cards #new-card').hide();
            $('#q2-cards #studying').hide();
            $('#q2-cards #studying-good').show();
        }
    );
    $('#review-card-good').on(
        'click',
        function() {
            $('#q2-cards #new-card-after').show();
            $('#q2-cards #new-card').hide();
            $('#q2-cards #done').hide();
            $('#q2-cards #done-after').show();
        }
    );
    $('#review-card-easy').on(
        'click',
        function() {
            $('#q2-cards #new-card-after').show();
            $('#q2-cards #new-card').hide();
            $('#q2-cards #done').hide();
            $('#q2-cards #done-after').show();
        }
    );


}); 
