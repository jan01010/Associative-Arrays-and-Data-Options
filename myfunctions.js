function getCircle() {
  var aCircle = {
    x: Math.random() * cnv.width,
    y: Math.random() * cnv.height,
    radius: Math.random() * 20,
    colour: "maroon",
    xSpeed: Math.random() * 6 - 3,
    ySpeed: Math.random() * 6 - 3,
  };

  return aCircle;
}

// Takes an array of circles and draws them

function drawCircles(allCircles) {
  for (let i = 0; i < allCircles.length; i++) {
    ctx.fillStyle = allCircles[i].colour;
    ctx.beginPath();
    ctx.arc(
      allCircles[i].x,
      allCircles[i].y,
      allCircles[i].radius,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }
}
