/* Set the current tab to be a darker color and have a larger weight */

var path = window.location.pathname;
var page = path.split("/").pop();

if (page === "index.html") {
    $("#about").css("color", "#077725");
    $("#about").css("font-weight", "550");
}
else if (page === "skills.html") {
    $("#skills").css("color", "#077725");
    $("#skills").css("font-weight", "550");
}
else if (page === "calisthenics.html") {
    $("#calisthenics").css("color", "#077725");
    $("#calisthenics").css("font-weight", "550");
}
else if (page === "photos.html") {
    $("#photos").css("color", "#077725");
    $("#photos").css("font-weight", "550");
}

/* Remove the controls of a video unless hovered over */

$(".vid").removeAttr("controls");

$(".vid").hover(function(event) {
    if(event.type === "mouseenter") {
        $(this).attr("controls", "");
    } else if(event.type === "mouseleave") {
        $(this).removeAttr("controls");
    }
});

/* Set the height equal to the width for photos */

$(document).ready(function() {
    $(".photo-block").css({
      'height': ($(".photo-block").width() + 'px')
    });
});