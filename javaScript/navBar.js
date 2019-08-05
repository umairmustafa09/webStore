let buttonClick = 0;

function increment(){
    buttonClick++;
    return buttonClick;
}
function extendNavBar(){
    let col;
    col = (increment() % 2 == 0) ?  "col-lg-2 col-md-2 d-none d-sm-none d-md-block listLength" : "col-12 col-lg-2 col-md-2 d-md-block listLength";
    return col;
}
function hideShowHam(){
  const addClass = extendNavBar();
  let hide = [];
  for(let i = 1; i < 7; ++i){
      hide[i] = "hideShow" + i;
      document.getElementById(hide[i]).className = addClass;
  }
}