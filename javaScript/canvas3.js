let canvas = document.getElementById( "canvas" );
let ctx = canvas.getContext( "2d" );

//canvas background.
function display(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    ctx.fillStyle = "rgb(39, 61, 80)" ;
    ctx.fillRect( 0, 0, canvas.width, canvas.height );
    ctx.fillStyle = "grey";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo( 100, 0, 600, 0, 0, canvas.height);
    ctx.strokeStyle = "rgb(39, 61, 80)";
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(canvas.width, 0);
    ctx.bezierCurveTo( 100, 0, 600, 0, 0, canvas.height);
    ctx.strokeStyle = "rgb(39, 61, 80)";
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(canvas.width, 0);
    ctx.bezierCurveTo( 0, 0, 900, 900, 0, canvas.height);
    ctx.strokeStyle = "rgb(39, 61, 80)";
    ctx.stroke();
    ctx.fill();
}
display();