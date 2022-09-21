let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 200;

let cnvTwo = document.getElementById("canvasTwo");
let ctxTwo = cnvTwo.getContext("2d");
cnvTwo.width = 600;
cnvTwo.height = 200;
let frameCount = 0;

let arcX = {
  one: 30,
  two: 90,
  three: 150,
  four: 210,
  five: 270,
  six: 330,
  seven: 390,
  eight: 450,
  nine: 510,
  ten: 570,
  eleven: 630,
  twelve: 690,
};

let arcXTwo = {
  one: 30,
  two: 90,
  three: 150,
  four: 210,
  five: 270,
  six: 330,
  seven: 390,
  eight: 450,
  nine: 510,
  ten: 570,
  eleven: 630,
  twelve: 690,
};

let arcXThree = {
  one: 30,
  two: 90,
  three: 150,
  four: 210,
  five: 270,
  six: 330,
  seven: 390,
  eight: 450,
  nine: 510,
  ten: 570,
  eleven: 630,
  twelve: 690,
};

setInterval(loop, 20);

function loop() {
  arcX.one -= 0.5;
  arcX.two -= 0.5;
  arcX.three -= 0.5;
  arcX.four -= 0.5;
  arcX.five -= 0.5;
  arcX.six -= 0.5;
  arcX.seven -= 0.5;
  arcX.eight -= 0.5;
  arcX.nine -= 0.5;
  arcX.ten -= 0.5;
  arcX.eleven -= 0.5;
  arcX.twelve -= 0.5;

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.beginPath();
  ctx.arc(arcX.one, 100, 30, 0, Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(arcX.two, 100, 30, Math.PI, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(arcX.three, 100, 30, 0, Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(arcX.four, 100, 30, Math.PI, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(arcX.five, 100, 30, 0, Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(arcX.six, 100, 30, Math.PI, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(arcX.seven, 100, 30, 0, Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(arcX.eight, 100, 30, Math.PI, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(arcX.nine, 100, 30, 0, Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(arcX.ten, 100, 30, Math.PI, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(arcX.eleven, 100, 30, 0, Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(arcX.twelve, 100, 30, Math.PI, 0);
  ctx.stroke();

  if (arcX.one == -30) {
    arcX.one += 720;
  }
  if (arcX.two == -30) {
    arcX.two += 720;
  }
  if (arcX.three == -30) {
    arcX.three += 720;
  }
  if (arcX.four == -30) {
    arcX.four += 720;
  }
  if (arcX.five == -30) {
    arcX.five += 720;
  }
  if (arcX.six == -30) {
    arcX.six += 720;
  }
  if (arcX.seven == -30) {
    arcX.seven += 720;
  }
  if (arcX.eight == -30) {
    arcX.eight += 720;
  }
  if (arcX.nine == -30) {
    arcX.nine += 720;
  }
  if (arcX.ten == -30) {
    arcX.ten += 720;
  }
  if (arcX.eleven == -30) {
    arcX.eleven += 720;
  }
  if (arcX.twelve == -30) {
    arcX.twelve += 720;
  }
  ctx.save();
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(0, 131);
  ctx.lineTo(0, 131);
  ctx.lineTo(600, 131);
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(0, 69);
  ctx.lineTo(0, 69);
  ctx.lineTo(600, 69);
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.strokeStyle = "blue";
  ctx.beginPath();
  ctx.moveTo(20, 75);
  ctx.lineTo(20, 75);
  ctx.lineTo(20, 125);
  ctx.moveTo(15, 75);
  ctx.lineTo(15, 75);
  ctx.lineTo(25, 75);
  ctx.moveTo(15, 125);
  ctx.lineTo(15, 125);
  ctx.lineTo(25, 125);
  ctx.stroke();
  ctx.restore();

  ctx.font = "10px Comic Sans MS";
  ctx.fillStyle = "red";
  ctx.fillText("1mm", 23, 100);
}

setInterval(loopTwo, 20);

function loopTwo() {
  arcXTwo.one -= 1;
  arcXTwo.two -= 1;
  arcXTwo.three -= 1;
  arcXTwo.four -= 1;
  arcXTwo.five -= 1;
  arcXTwo.six -= 1;
  arcXTwo.seven -= 1;
  arcXTwo.eight -= 1;
  arcXTwo.nine -= 1;
  arcXTwo.ten -= 1;
  arcXTwo.eleven -= 1;
  arcXTwo.twelve -= 1;

  ctx.beginPath();
  ctx.arc(arcXTwo.one, 100, 30, Math.PI, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(arcXTwo.two, 100, 30, 0, Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(arcXTwo.three, 100, 30, Math.PI, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(arcXTwo.four, 100, 30, 0, Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(arcXTwo.five, 100, 30, Math.PI, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(arcXTwo.six, 100, 30, 0, Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(arcXTwo.seven, 100, 30, Math.PI, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(arcXTwo.eight, 100, 30, 0, Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(arcXTwo.nine, 100, 30, Math.PI, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(arcXTwo.ten, 100, 30, 0, Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(arcXTwo.eleven, 100, 30, Math.PI, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(arcXTwo.twelve, 100, 30, 0, Math.PI);
  ctx.stroke();

  if (arcXTwo.one == -30) {
    arcXTwo.one += 720;
  }
  if (arcXTwo.two == -30) {
    arcXTwo.two += 720;
  }
  if (arcXTwo.three == -30) {
    arcXTwo.three += 720;
  }
  if (arcXTwo.four == -30) {
    arcXTwo.four += 720;
  }
  if (arcXTwo.five == -30) {
    arcXTwo.five += 720;
  }
  if (arcXTwo.six == -30) {
    arcXTwo.six += 720;
  }
  if (arcXTwo.seven == -30) {
    arcXTwo.seven += 720;
  }
  if (arcXTwo.eight == -30) {
    arcXTwo.eight += 720;
  }
  if (arcXTwo.nine == -30) {
    arcXTwo.nine += 720;
  }
  if (arcXTwo.ten == -30) {
    arcXTwo.ten += 720;
  }
  if (arcXTwo.eleven == -30) {
    arcXTwo.eleven += 720;
  }
  if (arcXTwo.twelve == -30) {
    arcXTwo.twelve += 720;
  }
}

let radius = 30;

ctxTwo.beginPath();
ctxTwo.arc(arcXThree.one, 100, radius, 0, Math.PI);
ctxTwo.stroke();

ctxTwo.beginPath();
ctxTwo.arc(arcXThree.two, 100, radius, Math.PI, 0);
ctxTwo.stroke();

ctxTwo.beginPath();
ctxTwo.arc(arcXThree.three, 100, radius, 0, Math.PI);
ctxTwo.stroke();

ctxTwo.beginPath();
ctxTwo.arc(arcXThree.four, 100, radius, Math.PI, 0);
ctxTwo.stroke();

ctxTwo.beginPath();
ctxTwo.arc(arcXThree.five, 100, radius, 0, Math.PI);
ctxTwo.stroke();

ctxTwo.beginPath();
ctxTwo.arc(arcXThree.six, 100, radius, Math.PI, 0);
ctxTwo.stroke();

ctxTwo.beginPath();
ctxTwo.arc(arcXThree.seven, 100, radius, 0, Math.PI);
ctxTwo.stroke();

ctxTwo.beginPath();
ctxTwo.arc(arcXThree.eight, 100, radius, Math.PI, 0);
ctxTwo.stroke();

ctxTwo.beginPath();
ctxTwo.arc(arcXThree.nine, 100, radius, 0, Math.PI);
ctxTwo.stroke();

ctxTwo.beginPath();
ctxTwo.arc(arcXThree.ten, 100, radius, Math.PI, 0);
ctxTwo.stroke();

ctxTwo.beginPath();
ctxTwo.arc(arcXThree.eleven, 100, radius, 0, Math.PI);
ctxTwo.stroke();

ctxTwo.beginPath();
ctxTwo.arc(arcXThree.twelve, 100, radius, Math.PI, 0);
ctxTwo.stroke();

setInterval(max, 2400);

function max() {
  ctxTwo.fillStyle = "white";
  ctxTwo.fillRect(0, 0, cnv.width, cnv.height);
  ctxTwo.save();
  ctxTwo.scale(0.5, 1);

  ctxTwo.beginPath();
  ctxTwo.arc(60, 100, 60, Math.PI, 0, true);
  ctxTwo.stroke();

  ctxTwo.beginPath();
  ctxTwo.arc(180, 100, 60, Math.PI, 0);
  ctxTwo.stroke();

  ctxTwo.beginPath();
  ctxTwo.arc(300, 100, 60, Math.PI, 0, true);
  ctxTwo.stroke();

  ctxTwo.beginPath();
  ctxTwo.arc(420, 100, 60, Math.PI, 0);
  ctxTwo.stroke();

  ctxTwo.beginPath();
  ctxTwo.arc(540, 100, 60, Math.PI, 0, true);
  ctxTwo.stroke();

  ctxTwo.beginPath();
  ctxTwo.arc(660, 100, 60, Math.PI, 0);
  ctxTwo.stroke();

  ctxTwo.beginPath();
  ctxTwo.arc(780, 100, 60, Math.PI, 0, true);
  ctxTwo.stroke();

  ctxTwo.beginPath();
  ctxTwo.arc(900, 100, 60, Math.PI, 0);
  ctxTwo.stroke();

  ctxTwo.beginPath();
  ctxTwo.arc(1020, 100, 60, Math.PI, 0, true);
  ctxTwo.stroke();

  ctxTwo.beginPath();
  ctxTwo.arc(1140, 100, 60, Math.PI, 0);
  ctxTwo.stroke();

  ctxTwo.restore();

  ctxTwo.save();
  ctxTwo.strokeStyle = "red";
  ctxTwo.beginPath();
  ctxTwo.moveTo(0, 161);
  ctxTwo.lineTo(0, 161);
  ctxTwo.lineTo(600, 161);
  ctxTwo.stroke();
  ctxTwo.restore();

  ctxTwo.save();
  ctxTwo.strokeStyle = "red";
  ctxTwo.beginPath();
  ctxTwo.moveTo(0, 39);
  ctxTwo.lineTo(0, 39);
  ctxTwo.lineTo(600, 39);
  ctxTwo.stroke();
  ctxTwo.restore();

  ctxTwo.save();
  ctxTwo.strokeStyle = "blue";
  ctxTwo.beginPath();
  ctxTwo.moveTo(20, 45);
  ctxTwo.lineTo(20, 45);
  ctxTwo.lineTo(20, 155);
  ctxTwo.moveTo(15, 45);
  ctxTwo.lineTo(15, 45);
  ctxTwo.lineTo(25, 45);
  ctxTwo.moveTo(15, 155);
  ctxTwo.lineTo(15, 155);
  ctxTwo.lineTo(25, 155);
  ctxTwo.stroke();
  ctxTwo.restore();

  ctxTwo.font = "10px Comic Sans MS";
  ctxTwo.fillStyle = "red";
  ctxTwo.fillText("2mm", 23, 100);
}

setInterval(zero, 4800);

function zero() {
  ctxTwo.fillStyle = "white";
  ctxTwo.fillRect(0, 0, cnv.width, cnv.height);
  ctxTwo.beginPath();
  ctxTwo.moveTo(0, 100);
  ctxTwo.lineTo(0, 100);
  ctxTwo.lineTo(600, 100);
  ctxTwo.stroke();
}
