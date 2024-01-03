var count=0;
function drag(ev) {
ev.dataTransfer.setData("Text", ev.target.id);
ev.dataTransfer.effectAllowed = "move";
ev.srcElement.style.top = ev.y + "px";
ev.srcElement.style.left = ev.x + "px";
 }
function allowDrop(ev) {
ev.preventDefault();
}
function drop(ev) {
   
ev.preventDefault();
var data = ev.dataTransfer.getData("text");
if (ev.target.getAttribute('data-drop') == data) {
    ev.target.appendChild(document.getElementById(data));
    count++;
    if(count==9){
        let audio = new Audio('r.wav'); 
        audio.play();
    }
}
}