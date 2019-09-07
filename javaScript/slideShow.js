var slideIndex = 0;
setInterval(slideShow, 2000);

//slideShow Function.
function slideShow(){
    for(let i = 0; i < 3; i++){
        document.getElementById("slide" + i).style.display = "none";
    }
    slideIndex++;
    if(slideIndex > 2){
        slideIndex = 0;
    }
    document.getElementById("slide" + slideIndex).style.display = "block";
}

//calling slide Show function.
slideShow();

