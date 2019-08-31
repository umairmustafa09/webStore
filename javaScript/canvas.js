let canvas = document.getElementById( "canvas" );
let ctx = canvas.getContext( "2d" );

let x = [], y = [];
let count = 0, localCount = 0;

setInterval( clear, 20 );

function clear(){
    for(let i = localCount + 1; i < count; i++){
        ctx.beginPath();
        if( localCount === 1 ){
            ctx.arc( x[ 0 ], y[ 0 ], 22, 0, 2*Math.PI );
            ctx.arc( x[ i ], y[ i ], 22, 0, 2*Math.PI );
        }
        else{
            ctx.arc( x[ i ], y[ i ], 22, 0, 2*Math.PI );
        }
        ctx.strokeStyle = "rgb(39, 61, 80)";
        ctx.stroke();
        ctx.fill();
        localCount = i;
        break;
    }
}

//canvas background.
function display(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    ctx.fillStyle = "rgb(39, 61, 80)" ;
    ctx.fillRect( 0, 0, canvas.width, canvas.height );
}

canvas.onmousemove = function position( event ){
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
    // display(); //calling display functin again incase of resizing of browser.
}
display();