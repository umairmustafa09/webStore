let incrmt = 0;

//modelBox function.
function modelBox(){
    document.getElementById( "modelBox" ).style.display = "block";
    //calling slideShow function.
}

//display none modelBox if user click any part screen excep model box.
window.onclick = function(event){
    let sight = document.getElementById("modelBox");
    if(event.target == sight){
        sight.style.display = "none";
    }
}


function signInUp(){
    incrmt++;
    if( incrmt % 2 != 0 ){
        document.getElementById( "logIn" ).style.display = "none";
        document.getElementById( "signUp" ).style.display = "block";
    }
    else{
        document.getElementById( "logIn" ).style.display = "block";
        document.getElementById( "signUp" ).style.display = "none";
    }
}