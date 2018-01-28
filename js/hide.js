var sec1Pos = $("#section1").offset();
var sec2Pos = $("#section2").offset();
var sec3Pos = $("#section3").offset();
var sec4Pos = $("#section4").offset();
var sec5Pos = $("#section5").offset();
var sec6Pos = $("#section6").offset();
var sec7Pos = $("#section7").offset();
var fabPos =  $("#FAB").offset();
$(window).scroll(function () {
    var currentPos = $(window).scrollTop();
    var knowMore = $("#knowAbout");
    var fab = $("#FAB");

    // console.log(currentPos);

    // Transition for know more button
    if(currentPos < 600) {
        // console.log('Asddasfd');
        knowMore.css({
            'visibility': 'visible',
            'opacity': '1',
            'transition': 'opacity 0.8s linear; '
        });
        fab.css({
            'visibility': 'hidden',
            'opacity': '0',
        })
    }
    if(currentPos > sec1Pos.top) {
        knowMore.css({
            'visibility': 'hidden',
            'opacity': '0'
        });
        fab.css({
            'visibility': 'visible',
            'opacity': '1',
        })
    }

    // transition for register button
    
    console.log('sec1: ',sec2Pos.top - currentPos);
    console.log('fab: ',fabPos.top - currentPos);
    // if((sec2Pos.top - currentPos) - ())

});