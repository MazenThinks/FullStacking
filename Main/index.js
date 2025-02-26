$(document).keydown(function () {
  $("#level-title").html("Level 1");
});
var n1 = Math.random();
n1 = n1 * 4;
n1 = Math.floor(n1) + 1;

var n2 = Math.random();
n2 = n2 * 4;
n2 = Math.floor(n2) + 1;

var n3 = Math.random();
n3 = n3 * 4;
n3 = Math.floor(n3) + 1;

var n4 = Math.random();
n4 = n4 * 4;
n4 = Math.floor(n4) + 1;

var greenAudio = new Audio("sounds/green.mp3");
var blueAudio = new Audio("sounds/blue.mp3");
var yellowAudio = new Audio("sounds/yellow.mp3");
var redAudio = new Audio("sounds/red.mp3");

function level1() {
  if (n1 == 1) {
    green();
  } else if (n1 == 2) {
    red();
  } else if (n1 == 3) {
    blue();
  } else if (n1 == 4) {
    yellow();
  }
}

function level2() {
  if (n2 == 1) {
    green();
  } else if (n2 == 2) {
    red();
  } else if (n2 == 3) {
    blue();
  } else if (n2 == 4) {
    yellow();
  }
}

function level3() {
  if (n3 == 1) {
    green();
  } else if (n3 == 2) {
    red();
  } else if (n3 == 3) {
    blue();
  } else if (n3 == 4) {
    yellow();
  }
}

function level4() {
  if (n4 == 1) {
    green();
  } else if (n4 == 2) {
    red();
  } else if (n4 == 3) {
    blue();
  } else if (n4 == 4) {
    yellow();
  }
}

function green() {
  $("#green").animate(
    {
      opacity: "0",
    },
    "fast"
  );
  $("#green").animate(
    {
      opacity: "1",
    },
    "fast"
  );

  greenAudio.play();
}

function yellow() {
  $("#yellow").animate(
    {
      opacity: "0",
    },
    "fast"
  );
  $("#yellow").animate(
    {
      opacity: "1",
    },
    "fast"
  );

  yellowAudio.play();
}

function red() {
  $("#red").animate(
    {
      opacity: "0",
    },
    "fast"
  );
  $("#red").animate(
    {
      opacity: "1",
    },
    "fast"
  );

  redAudio.play();
}

function blue() {
  $("#blue").animate(
    {
      opacity: "0",
    },
    "fast"
  );
  $("#blue").animate(
    {
      opacity: "1",
    },
    "fast"
  );

  blueAudio.play();
}

function greenClick() {
  $("#green").click(green);
}

function redClick() {
  $("#red").click(red);
}

function yellowClick() {
  $("#yellow").click(yellow);
}

function blueClick() {
  $("#blue").click(blue);
}
