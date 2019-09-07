//global  variable.  
let oldArray = JSON.parse(localStorage.getItem('itemsArray'));
let eachItemCountArray = [];
let itemPurchase;



if( oldArray != undefined )
    itemPurchase = oldArray;
else{
    itemPurchase = [ {  } ];
    itemPurchase.shift();
}

if( itemPurchase != "[]" )
    counter();


//add to cart function
function addToCart(item, price, id, imageName){
    let eachItemCount = 0;
    //adding item value to array.
    itemPurchase.push( { "item": item, "price": price, "id": id, "imageName": imageName} );
    for(let i = 0; i < itemPurchase.length; i++){
        if(id == itemPurchase[i].id)
            eachItemCount++;
    }  
    //changing state of Add to Cart button.
    if(eachItemCount != 0)
        document.getElementById( id ).innerHTML = eachItemCount + " +";
    //calling counter function.
    counter();
}





//Delete Item from Cart Function Function.
function deleteButton(id){   
    let eachItemCount = 0;
    //delete item and price one by one from array.
    for(let i = 0; i < itemPurchase.length; i++){
        if(id == itemPurchase[i].id){
            itemPurchase.splice(i, 1);
            break;
        }    
    }    
    for(let i = 0; i < itemPurchase.length; i++){
        if(id == itemPurchase[i].id){
            eachItemCount++;
        }
    }  
    //changing state of Add to Cart button.
    eachItemCount == 0 ? document.getElementById(id).innerHTML =  "Add to Cart" : document.getElementById(id).innerHTML = eachItemCount + " +";
    
    //calling counter function.
    counter();
}



//counter function.
function counter(){
    let count = 0, eachItemCount = 0; 
    for(let i = 0; i < itemPurchase.length; i++){
        for(let j = 0; j < itemPurchase.length; j++){
            if(itemPurchase[i].id == itemPurchase[j].id){
                 eachItemCount++;
            }
        }

        let id = itemPurchase[i].id.substring(4,5);
        let ele = document.getElementById(itemPurchase[i].id);
        if( id === "M" && ele != null )
            eachItemCount == 0 ? ele.innerHTML =  "Add to Cart" : ele.innerHTML = eachItemCount + " +";
        if( id === "L" && ele != null )
            eachItemCount == 0 ? document.getElementById(itemPurchase[i].id).innerHTML =  "Add to Cart" : document.getElementById( itemPurchase[i].id ).innerHTML = eachItemCount + " +";
        if( id === "T" && ele != null )
            eachItemCount == 0 ? document.getElementById(itemPurchase[i].id).innerHTML =  "Add to Cart" : document.getElementById( itemPurchase[i].id ).innerHTML = eachItemCount + " +";
       
        eachItemCountArray[i] = eachItemCount;
        eachItemCount = 0;
        if(itemPurchase[i].item != ""){
            count++;
        }
    }


    
    let sight = document.getElementById("stickyCard");
    
    count != 0 ? sight.style.display = "block" : sight.style.display = "none";
    
    document.getElementById("stickyCard").innerHTML = count + " " +"Item added to Cart " + "Click to view!";
    
    localStorage.setItem('itemsArray', JSON.stringify(itemPurchase));

    
    return count;
}





//Show model box and model box content function.
function showModelBox(){
    let itemValue = "", totalPrice = 0;
    
    let sight = document.getElementById("modelBox");
    
    sight.style.display = "block";
    
    sight = document.getElementById("modelContent").innerHTML = "<h1>Item Added to cart " + '<span class="badge badge-success">' + counter() + "</span>" + "</h1>";
    
    //displaYing how many item Add to cart.
    for(let i = 0; i < itemPurchase.length; i++){
        if(itemPurchase[i].item != undefined && itemPurchase[i].item != itemValue){
            sight = document.getElementById("modelContent").innerHTML += '<p>'  + ' <span class="badge badge-success">' +  eachItemCountArray[i] +  'x' +'</span>' + '<img src = "../images/' + itemPurchase[i].imageName + '" ' +  'alt = "HP_Notebook_245_G7">' +  itemPurchase[i].item + ' ' +  itemPurchase[i].price + "Rs" + '</p>' + "<br>";
            totalPrice = totalPrice + (+(itemPurchase[i].price) * eachItemCountArray[i]); //golbal variable
            itemValue = itemPurchase[i].item;
        }
    }    
    
    sight = document.getElementById("modelContent").innerHTML += '<p>' + 'Total Price = ' + totalPrice.toLocaleString() + ' Rs' +'</p>' + "<br>";
    sight = document.getElementById("modelContent").innerHTML += "<button class = 'btn btn-primary'>Shop Now!</button>";
}





//display none modelBox if user click any part screen excep model box.
window.onclick = function(event){
    let sight = document.getElementById("modelBox");
    
    if(event.target == sight){
        sight.style.display = "none";
    }
}
