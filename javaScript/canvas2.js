let canvas = document.getElementById( "canvas" );
let ctx = canvas.getContext( "2d" );

// let countA = 6, x =  100, y = 100;
let count = 0, j = 0, op = 9;
let circles = [ { } ];
let x = [];
x.shift();
circles.shift();

setInterval( make, 10 );

function make(){
    display();
    count++;
    for(let i = 0; i < circles.length; i++){
        if( count <= 200 ){
            ctx.fillStyle = "grey";
            ctx.beginPath();
            ctx.arc( x[i], circles[i].y, circles[0].r, 0, 2*Math.PI );
            ctx.strokeStyle = "rgb(39, 61, 80)";
            ctx.stroke();
            ctx.fill();
            circles[i].y = canvas.height - count;
        }
        else if( count >= 200 && count  <= 400 ){
            ctx.fillStyle = "grey";
            ctx.beginPath();
            ctx.arc( x[i], circles[i].y + j, circles[0].r, 0, 2*Math.PI );
            ctx.strokeStyle = "rgb(39, 61, 80)";
            ctx.stroke();
            ctx.fill();
            if( i == circles.length - 1 ){
                j++;}
        }
        else{
            count = 0;
            j = 0;
            circles[i].y = canvas.height;
        }
    }
}
//canvas background.
function display(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    ctx.fillStyle = "rgb(39, 61, 80)" ;
    ctx.fillRect( 0, 0, canvas.width, canvas.height );
}

//random Apple function.
function randomX(){
    for( let i = 0; i < 20; i++ ){
        //caluculating x axis.
        x.push( Math.floor(( Math.random() * ( canvas.width ) ) ) );
        circles.push( { y: canvas.height, r: 50 } );
    }
}

display();
randomX();