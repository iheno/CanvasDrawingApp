const canvas = document.getElementById("jsCanvas");

let painting = false;

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  //console.log(x,y);
}

function stopPainting() {
  painting = false;
}


function onMouseDown(event) {
  painting = true;
}

function onMouseUp(event) {
  stopPainting();
}


// check 
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown); // 클릭했을때 발생하는 이벤트
  canvas.addEventListener("mouseup", onMouseUp); // 클릭을 뗴었을때 이벤트
  canvas.addEventListener("mouseleave", stopPainting) // 클릭 범위를 벗어났을때 이벤트
}  