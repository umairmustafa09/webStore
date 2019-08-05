//golbal variable and array declaration.

let count = 0; 
let itemArray = []; 
let itemName = []; 
let itemPrice = [];  
let image = [];   
let eachItemCountArray = [];  
let totalPrice = 0;  

//Add to Cart Function.
function addToCart(item, price, thing, imageName){
    //local variable
    let eachItemCount = 0;
    //adding item value to array.
    itemArray[count] =  thing; //golbal variable
    itemPrice[count] = price; //golbal variable
    itemName[count] = item; //golbal variable
    image[count] = imageName;  //golbal variable
    //checking if any item in present in array or not.
    for(let i = 0; i < itemArray.length; i++){
        if(thing == itemArray[i]){
            eachItemCount++;
        }    
    }  
    //changing state of Add to Cart button.
    if(eachItemCount != 0){
        itemAddedToCart = thing + "Cart"; //golable variable and concatinating string for id.
        document.getElementById(itemAddedToCart).innerHTML = eachItemCount + " +";
    } 
    //sticky div to display block.
    document.getElementById("stickyCard").innerHTML = counter() + " " +"Item added to Cart " + "Click to view!";  
    let sight = document.getElementById("stickyCard");
    sight.style.display = "block";
    //displaying delete button 
    sight = document.getElementById(thing);
    sight.style.display = "inline-block";
}




//Delete Item from Cart Function Function.
function deleteButton(item, price, thing, imageName){
    //local variable
    let eachItemCount = 0;
     //delete item and price one by one from array
    for(let i = 0; i < itemArray.length; i++){
        if(thing == itemArray[i] && price == itemPrice[i]){
            delete(itemArray[i]); //golbal variable
            delete(itemPrice[i]); //golbal variable
            delete(itemName[i]); //golbal variable
            delete(image[i]); //golbal variable
            break;
        }    
    }    
    //searching if any selecting item is present or not
    for(let i = 0; i < itemArray.length; i++){
        if(thing == itemArray[i]){
            eachItemCount++;
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
    }  
    
    //removing delete button  
    if(eachItemCount == 0){
        let sight = document.getElementById(thing);
        sight.style.display = "none";
    }    
    //Changing state of sticy Element.
    if(count > 0){
        document.getElementById("stickyCard").innerHTML = (counter() - 2) + " " +"Item added to Cart " + "Click to view!";
        count = count - 2;
    }   
    if(count == 0){
        sight = document.getElementById("stickyCard");
        sight.style.display = "none";
    }
    //returning count
    return count;
}
function counter(){
    if(count >= 0){
        count++;
    }
    return count;
}


//Show model box and model box content function.
function showModelBox(){
    //local variable.
    let eachItemCount = 0;
    let itemValue = "";

    //displaying model box.
    let sight = document.getElementById("modelBox");
    sight.style.display = "block";

    //counting each number of item.
    for(let i = 0; i < itemArray.length; i++){
        for(let j = 0; j < itemArray.length; j++){
            if(itemArray[i] == itemArray[j]){
                 eachItemCount++;
            }
        }
        eachItemCountArray[i] = eachItemCount;
        eachItemCount = 0;
    }

    let tempCount = (counter() - 1); // counter function 
    count--; //golable variable.


    //deleting model box Content in case if user change the cart value.
    sight = document.getElementById("modelContent").innerHTML = "<h1>Item Added to cart " + '<span class="badge badge-success">' + tempCount + "</span>" + "</h1>";


    //displating how many item Add to cart.
    for(let i = 0; i < itemName.length; i++){
        if(itemName[i] != undefined && itemArray[i] != itemValue){
            sight = document.getElementById("modelContent").innerHTML += '<p>'  + ' <span class="badge badge-success">' +  eachItemCountArray[i] +  'x' +'</span>' + '<img src = "../images/' + image[i] + '" ' +  'alt = "HP_Notebook_245_G7">' +  itemName[i] + ' ' +  itemPrice[i] + "Rs" + '</p>' + "<br>";
            totalPrice = totalPrice + (+(itemPrice[i]) * eachItemCountArray[i]); //golbal variable
            itemValue = itemArray[i];
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