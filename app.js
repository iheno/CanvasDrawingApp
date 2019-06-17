const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

//Canvas 기본 배경 색상 설정
ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

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
    //ctx.closePath();
  }
}

// 컬러 체인지
function handleColorClick(event) {
  //console.log(event.target.style);
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  //console.log(event.target.value);
  const size = event.target.value;
  ctx.lineWidth = size;
}
 
function handleModeClick() { 
  if(filling === true){
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function handleCanvasClick() {
  if(filling){
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

// 마우스 우클릭 방지
function handleCM(event) {
  event.preventDefault();
}

// save img
function handleSaveClick() {
  const image = canvas.toDataURL("image/png");
  //console.log(image);
  const link = document.createElement("a");
  link.href = image;
  link.download = "sample";
  //console.log(link);
  link.click();

}

// check 
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting); // 클릭했을때 발생하는 이벤트
  canvas.addEventListener("mouseup", stopPainting); // 클릭을 뗴었을때 이벤트
  canvas.addEventListener("mouseleave", stopPainting); // 클릭 범위를 벗어났을때 이벤트
  canvas.addEventListener("click", handleCanvasClick);
  //contextmenu hidden
  canvas.addEventListener("contextmenu", handleCM);
}  

// 각 아이템을 배열로 만들고 클릭 이벤트 추가
Array.from(colors).forEach(color => 
  color.addEventListener("click", handleColorClick)
);
  //console.log(Array.from(colors));s


if(range){
  range.addEventListener("input", handleRangeChange);
}

if(mode){
  mode.addEventListener("click", handleModeClick);
}

if(saveBtn){
  saveBtn.addEventListener("click", handleSaveClick);
}