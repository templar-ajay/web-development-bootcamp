$("h1").css("color", "lightgreen");
console.log($("h1").css("color"));
console.log($("h1").css("font-size"));
// to get and set css

$("h1").addClass("big-title margin-50");
console.log($("h1").hasClass("margin-50"));
// to add, remove and check classes

$("h1").text("Byee");
$("button").text("Don't Click Me");
// to get and set innerText

$("button").html("<em>Hey</em>");
// to get and set innerHTML

console.log($("a").attr("href"));
$("a").attr("href", "https://www.duckduckgo.com/");
// to get and set attributes

$("h1").click(function () {
  $("h1").css("color", "darkorange");
});
// $("button").click(() => {
//   $("h1").css("color", "darkorange");
// });
// to listen for events

$("input").keypress(function (e) {
  console.log(e.key);
});
$(document).keypress(function (e) {
  $("h1").text(e.key);
});
// detecting keypress

$("h1").on("mouseover", function () {
  $("h1").css("color", "orange");
});
// to use javascript eventListeners

/**
 * adding and removing javascript elements
 */

$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>I'm inside h1 element</button>");
$("h1").append("<button>I'm inside h1 element</button>");

$("h1").append("<a>hi</a>");
$("h1 a").remove();

// website animations with jquery
$("button").on("click", function () {
  //   $("h1").fadeToggle();
  //   $("h1").fadeIn();
  //   $("h1").fadeOut();
  //   $("h1").slideUp();
  //   $("h1").slideDown();
  //   $("h1").slideToggle();
  $("h1").animate({ margin: "1rem" });
  $("h1").slideUp().slideDown().animate({ margin: "40px" });
});
