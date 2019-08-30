//golbal variable and array declaration.
let itemPurchase = [{}];
let eachItemCountArray = [];

itemPurchase.shift();

//Add to Cart Function.
function addToCart(item, price, thing, imageName){
    //local variable
    let eachItemCount = 0;
    //adding item value to array.
    itemPurchase.push( { "item": item, "price": price, "thing": thing, "imageName": imageName} );
    for(let i = 0; i < itemPurchase.length; i++){
        if(item == itemPurchase[i].item)
            eachItemCount++;
    }  
    //changing state of Add to Cart button.
    if(eachItemCount != 0){
        itemAddedToCart = thing + "Cart"; //golable variable and concatinating string for id.
        document.getElementById(itemAddedToCart).innerHTML = eachItemCount + " +";
    } 
    //calling counter function.
    counter();
    sight = document.getElementById(thing); //change this ///////
    sight.style.display = "inline-block";
}

//Delete Item from Cart Function Function.
function deleteButton(item, price, thing, imageName){
    //local variable.
    let eachItemCount = 0;
    //delete item and price one by one from array.
    for(let i = 0; i < itemPurchase.length; i++){
        if(thing == itemPurchase[i].thing && price == itemPurchase[i].price){
            itemPurchase.splice(i, 1);
            break;
        }    
    }    
    for(let i = 0; i < itemPurchase.length; i++){
        if(thing == itemPurchase[i].thing){
            eachItemCount++;
        }
    }  
    //changing state of Add to Cart button.
    if(eachItemCount == 0){
        itemAddedToCart = thing + "Cart"; //golable variable and concatinating string for id.
        document.getElementById(itemAddedToCart).innerHTML = "Add to Cart";    
    }
    else{
        itemAddedToCart = thing + "Cart"; //golable variable and concatinating string for id.
        document.getElementById(itemAddedToCart).innerHTML = eachItemCount + " +";
    }    
    //removing delete button  
    if(eachItemCount == 0){
        let sight = document.getElementById(thing);
        sight.style.display = "none";
    }    
    //calling counter function.
    counter();
}
function counter(){
    let count = 0, eachItemCount = 0; // local variable.
    for(let i = 0; i < itemPurchase.length; i++){
        for(let j = 0; j < itemPurchase.length; j++){
            if(itemPurchase[i].item == itemPurchase[j].item){
                 eachItemCount++;
            }
        }
        eachItemCountArray[i] = eachItemCount;
        eachItemCount = 0;
        if(itemPurchase[i].item != ""){
            count++;
        }
    }
    let sight = document.getElementById("stickyCard");
    count != 0 ? sight.style.display = "block" : sight.style.display = "none";
    document.getElementById("stickyCard").innerHTML = count + " " +"Item added to Cart " + "Click to view!";

    return count;
}


//Show model box and model box content function.
function showModelBox(){
    // local variable.
    let itemValue = "", totalPrice = 0;

    //displaying model box.
    let sight = document.getElementById("modelBox");
    sight.style.display = "block";

    //deleting model box Content in case if user change the cart value.
    sight = document.getElementById("modelContent").innerHTML = "<h1>Item Added to cart " + '<span class="badge badge-success">' + counter() + "</span>" + "</h1>";


    //displating how many item Add to cart.
    for(let i = 0; i < itemPurchase.length; i++){
        if(itemPurchase[i].item != undefined && itemPurchase[i].item != itemValue){
            sight = document.getElementById("modelContent").innerHTML += '<p>'  + ' <span class="badge badge-success">' +  eachItemCountArray[i] +  'x' +'</span>' + '<img src = "../images/' + itemPurchase[i].imageName + '" ' +  'alt = "HP_Notebook_245_G7">' +  itemPurchase[i].item + ' ' +  itemPurchase[i].price + "Rs" + '</p>' + "<br>";
            totalPrice = totalPrice + (+(itemPurchase[i].price) * eachItemCountArray[i]); //golbal variable
            itemValue = itemPurchase[i].item;
        }
    }    
    sight = document.getElementById("modelContent").innerHTML += '<p>' + 'Total Price = ' + totalPrice.toLocaleString() + ' Rs' +'</p>' + "<br>";
}


//display none modelBox if user click any part screen excep model box.
window.onclick = function(event){
    //display none modelBox if user click any part screen excep model box.
    let sight = document.getElementById("modelBox");
    if(event.target == sight){
        sight.style.display = "none";
    }
}