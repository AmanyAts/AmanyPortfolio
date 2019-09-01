// Get the modal

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

var modal = "";

$(".close").on("click", function() {
  modal.style.display = "none";
});

var slideIndex = 1;
var x = "";

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  console.log(x.length);
  //  x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
modal = document.getElementById("Modal");
function showWebsite(event) {
  id = event.target.id;
  console.log("id " + id);
  if (id == "tic" || id == "tic1") {
    $("#img").html("");
    $("#img").prepend(
      "<h3>Tic-tac-toe </h3><p>Tic-Tac-Toe game as front-end website,two players can play the user will be able to select the character X or O" +
        " and there is a choice to play verse computer also the player score will counted</p>" +
        ' <a href="https://amanyats.github.io/Tic-Tac-Toe-project/">Demo</a>' +
        '<img class="mySlides" src="tic-tac-toe.PNG" style="width:100%"><img class="mySlides" src="tic2.PNG" style="width:100%"><img class="mySlides" src="tic 3.PNG" style="width:100%"><img class="mySlides" src="tic5.PNG" style="width:100%">'
    );
    modal.style.display = "block";
    x = document.getElementsByClassName("mySlides");
  } else if (id == "trip") {
    $("#img").html("");
    $("#img").prepend(
      "<h3>Trip planner </h3><p>Trip planner website that helps you to build a custsmised plan so you can add a destinaation where you will go and add the places or the activites to the plan" +
        "it will help you to review and orginise your trip" +
        " Also you can add the budget that you want to spend and add expenss to see how much left from your travel wallet </p>" +
        '<a href="https://murmuring-bastion-48982.herokuapp.com/users/sign_up/">Demo</a>' +
        '<img class="mySlidess"  src="TripPlanner.PNG" style="width:100%"> <img class="mySlidess"  src="trip2.PNG" style="width:100%">' +
        '<img class="mySlidess"   src="trip3.PNG" style="width:100%">' +
        '<img class="mySlidess"  src="trip5.PNG" style="width:100%">' +
        ' <img class="mySlidess"  src="trip6.PNG" style="width:100%">' +
        '<img class="mySlidess"  src="trip7.PNG" style="width:100%">'
    );
    // modal = document.getElementById("ModalTR");
    modal.style.display = "block";
    x = document.getElementsByClassName("mySlidess");
  } else if (id == "cur") {
    $("#img").html("");
    $("#img").prepend(
      "<h3>Currancy Exchange </h3>" +
        "<p>This website builded using React framWork and restful API " +
        " it helps you to convert the currency you choose what ever currency to convert to other, there is also a list of currency so it helps during your trip or transaction" +
        "<br> created with Tech Team: Amany , Wijdan ,Maha and Taha  </p>" +
        '<a href="https://wdi-techteam.github.io/project-3/#/">Demo</a>' +
        '<img class="curr"  src="cur.PNG" style="width:100%">' +
        '<img class="curr"  src="cur2.PNG" style="width:100%">' +
        ' <img class="curr"  src="cur3.PNG" style="width:100%">' +
        '<img class="curr"  src="cur4.PNG" style="width:100%">'
    );
    modal.style.display = "block";
    x = document.getElementsByClassName("curr");
  } else if (id == "word") {
    $("#img").html("");
    $("#img").prepend(
      "<h3>Cross-word </h3>" +
        "<p>Word search puzzle that it gaves you a word and you should find it depend on catogries" +
        "After solving it calculate time you spend it and sotre it into your game data</p>" +
        '<a href="https://amanyats.github.io/project-4-frondend/#/">Demo</a>' +
        '<img class="wor"  src="word.PNG" style="width:100%">' +
        '<img class="wor"  src="word1.PNG" style="width:100%">' +
        ' <img class="wor"  src="word2.PNG" style="width:100%">' +
        '<img class="wor"  src="word3.PNG" style="width:100%">' +
        '<img class="wor"  src="word4.PNG" style="width:100%">' +
        '<img class="wor"  src="word5.PNG" style="width:100%">'
    );
    modal.style.display = "block";
    x = document.getElementsByClassName("wor");
  }

  showDivs(slideIndex);
}
function yy(event) {
  event.target.css("color", "white");
}
$(".card").on("click", showWebsite);
$("a").on("click", yy);
