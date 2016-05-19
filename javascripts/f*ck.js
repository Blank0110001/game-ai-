var canvas = document.getElementById("tictacocanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFFF";
ctx.fillRect(, 0, 1000, 2);
var imageObj = new Image();
imageObj.src="/game-ai-/images/tictactoe_O.png";
  imageObj.onload = function() {
    ctx.drawImage(imageObj,0,0,100,100)
  };
