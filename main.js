menu_list_array = ["Chicken Tandoori Pizza",
                    "Veg Supreme Pizaa",
                     "Paneer Tikka Pizza",
                     "Delexe Vegie Pizaa",
                     "Veg Extravaganza Pizza"]
function getmenu(){
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(var  i=0;i<menu_list_array.length;i++){
 htmldata=htmldata+'<1i>' + menu_list_array[i]  + '<1i>'
}
htmldata=htmldata+"</ol>"
document.getElementById(display_menu).innerHTML = htmldata;
}
function add_item(){
var htmldata;
var item=document.getElementById("add_item").nodeValue;
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<div class="card" ' +'<img scs="images/pizzaImg.png"/>' + menu_list_array[i] + '</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
}