const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  //console.log(x,y);
  // path 만들기 시작점
  if(!painting) {
    ctx.beginPath(); 
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseDown(event) {
  painting = true;
}


// check 
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting); // 클릭했을때 발생하는 이벤트
  canvas.addEventListener("mouseup", stopPainting); // 클릭을 뗴었을때 이벤트
  canvas.addEventListener("mouseleave", stopPainting) // 클릭 범위를 벗어났을때 이벤트
}  