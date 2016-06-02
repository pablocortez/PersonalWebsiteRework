$(document).ready(function() {
$("#nojs").hide();
$("body").hide().fadeIn(600);
$(".content").hide();
$("h2").wrapInner("<a href=\"javascript:;\"></a>");
$("h2 a").prepend("<span class=\"toggle\">+</span>");
});

$("h2").on("click", function() {
$(this).next("div").slideToggle("fast");
$(this).find("span").text($(this).find("span").text() === "+" ? "-" : "+");
});