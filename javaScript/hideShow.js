function mobileNav(){
    let sight, idName;
    let divName = ["LaptopIcon", "MobileICon" , "TabletIcon", "Laptop", "Tablet", "Mobile"];
    for(let i = 0; i < 6; i++){
        idName = "hideShow" + divName[i];
        sight = document.getElementById(idName);
        if(i < 5){
            sight.style.display = "none";
        }    
        else{
            sight.style.display = "block";
        }
    }   
}
function laptopNav(){
    let sight, idName;
    let divName = ["LaptopIcon", "MobileICon" , "TabletIcon","Tablet", "Mobile", "Laptop"];
    for(let i = 0; i < 6; i++){
        idName = "hideShow" + divName[i];
        sight = document.getElementById(idName);
        if(i < 5){
            sight.style.display = "none";
        }    
        else{
            sight.style.display = "block";
        }
    }  
}
function tabletNav(){
    let sight, idName;
    let divName = ["LaptopIcon", "MobileICon" , "TabletIcon", "Mobile", "Laptop","Tablet"];
    for(let i = 0; i < 6; i++){
        idName = "hideShow" + divName[i];
        sight = document.getElementById(idName);
        if(i < 5){
            sight.style.display = "none";
        }    
        else{
            sight.style.display = "block";
        }
    }  
}
function hideShowMobile(){
    let sight, idName;
    let divName = ["LaptopIcon", "MobileICon" , "TabletIcon", "Mobile"];
    for(let i = 0; i < 4; i++){
        idName = "hideShow" + divName[i];
        sight = document.getElementById(idName);
        if(sight.style.display === "none"){
            sight.style.display = "block"; 
        }
        else{
            sight.style.display = "none";
        }    
    }    
}
function hideShowLaptop(){
    let sight, idName;
    let divName = ["LaptopIcon", "MobileICon" , "TabletIcon","Laptop"];
    for(let i = 0; i < 4; i++){
        idName = "hideShow" + divName[i];
        sight = document.getElementById(idName);
        if(sight.style.display === "none"){
            sight.style.display = "block"; 
        }
        else{
            sight.style.display = "none";
        }    
    }    
}
function hideShowTablet(){
    let sight, idName;
    let divName = ["LaptopIcon", "MobileICon" , "TabletIcon","Tablet"];
    for(let i = 0; i < 4; i++){
        idName = "hideShow" + divName[i];
        sight = document.getElementById(idName);
        if(sight.style.display === "none"){
            sight.style.display = "block"; 
        }
        else{
            sight.style.display = "none";
        }    
    }    
}
