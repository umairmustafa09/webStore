let canvas = document.getElementById( "canvas" );
let ctx = canvas.getContext( "2d" );

let x = [], y = [];
let count = 0, localCount = 0;

setInterval( clear, 20 );

function clear(){
    art();
    for(let i = localCount + 1; i < count; i++){
        ctx.beginPath();
        if( localCount === 1 ){
            ctx.arc( x[ 0 ], y[ 0 ], 22, 0, 2*Math.PI );
            ctx.arc( x[ i ], y[ i ], 22, 0, 2*Math.PI );
        }
        else{
            ctx.arc( x[ i ], y[ i ], 22, 0, 2*Math.PI );
        }
        ctx.fillStyle = "rgb(39, 61, 80)";
        ctx.strokeStyle = "rgb(39, 61, 80)";
        ctx.stroke();
        ctx.fill();
        localCount = i;
        break;
    }
}

//canvas background.
function display(){
    canvas.height = window.innerHeight + scrollY;
    canvas.width = window.innerWidth + scrollX;
    ctx.fillStyle = "rgb(39, 61, 80)" ;
    ctx.fillRect( 0, 0, canvas.width, canvas.height);
    document.getElementById( "btn" ).style.left = canvas.width - 100;
    art();
}

canvas.onmousemove = function position( event ){
    art();
    x[ count ] = event.clientX, y[ count ] = event.clientY;
    ctx.fillStyle = "grey";
    ctx.beginPath();
    ctx.arc( x[ count ], y[ count ], 22, 0, 2*Math.PI );
    ctx.strokeStyle = "rgb(39, 61, 80)";
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc( x[ count ], y[ count ], 20, 0, 2*Math.PI );
    ctx.fillStyle = "rgb(39, 61, 80)" ;
    ctx.stroke();
    ctx.fill();
    count++;
}
function art(){
    ctx.beginPath();
    ctx.strokeStyle = "rgb(39, 61, 80)";
    ctx.fillStyle = "grey";
    ctx.moveTo( 0, canvas.height / 2 );
    ctx.bezierCurveTo( 900 , 0, 400 , 100, 0, 0 );
    ctx.stroke();
    ctx.fill();
}
display();