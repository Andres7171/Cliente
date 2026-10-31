let papel = document.getElementById("papel");
let papelera = document.getElementById("papelera");
let posX = 0;
let posY = 0;
let arrastrando = false;


papel.style.position = "absolute";
papel.addEventListener("mousedown", (event) => {
    event.preventDefault()
  arrastrando = true;
});

document.addEventListener("mousemove", (event) => {
  if (!arrastrando) return;
  posX = event.clientX;
  posY = event.clientY;
  papel.style.left = posX + "px";
  papel.style.top = posY + "px";
});
document.addEventListener('mouseup',(event)=>{
    if(!arrastrando) return
    arrastrando=false

    let x=event.clientX
    let y=event.clientY

    if(x>=papelera.offsetLeft && x<=papelera.offsetLeft+papelera.offsetWidth &&
       y>=papelera.offsetTop && y<=papelera.offsetTop+papelera.offsetHeight){
        papel.style.display='none'
        papelera.src='llena.jpg'
    }
})