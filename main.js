var canvas=document.getElementById("mycanvas");

var ctx;

ctx=canvas.getContext("2d");

var mouseevent="empty";

var color="black";

var widthofline=1;

var radius;

var lastpositionofx,lastpositionofy;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    mouseevent="mousedown";
    widthofline=document.getElementById("width").Value;
    color=document.getElementById("color").Value;
    radius=document.getElementById("radius").Value;
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseevent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseevent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    var currentmousex=e.clientX-canvas.offsetLeft;
    var currentmousey=e.clientY-canvas.offsetTop;

    if(mouseevent=="mousedown"){
        console.log("current position of X and Y is =");
        console.log("X="+currentmousex+"y="+currentmousey);

        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;
        ctx.arc(currentmousex,currentmousey,radius,0,2*Math.PI);
        ctx.stroke();
    }
     lastpositionofx=currentmousex;
     lastpositionofy=currentmousey
}