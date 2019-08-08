var slideIndex = 1;
setInterval(slideShow, 2000);

function slideShow(){
    for(let i = 1; i <= 3; i++){
        document.getElementById("slide" + i).style.display = "none";
    }
    slideIndex++;
    if(slideIndex > 3){
        slideIndex = 1;
    }
    document.getElementById("slide" + slideIndex).style.display = "block";
}