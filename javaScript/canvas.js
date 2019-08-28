let canvas = document.getElementById( "canvas" );
let ctx = canvas.getContext( "2d" );

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let x = Math.round( canvas.width / 2 ), y = Math.round( canvas.height / 2 );
let count = 0;

setInterval( position, 1000 );

function display(){
    ctx.clearRect( 0, 0, canvas.width, canvas.height );
    ctx.fillStyle = "black" ;
    ctx.fillRect( 0, 0, canvas.width, canvas.height );
    ctx.fillStyle = "white";
    ctx.fillRect( x,y, 100, 100 );
}

function position(){
     //caluculating x and y axis.
    count <= 10 ? y = y + count : count = 0;
    count++;
    display();
}