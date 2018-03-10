for(i = 0; i < 256; i++){
  var div = document.createElement("div");
  function appendDiv(div){
    document.getElementById("container").appendChild(div);
  };
  div.setAttribute("id",i + 1);
  div.setAttribute("class", "blue");
  div.style.cssText = "margin: 1px; padding: 20px";
  div.style.cssFloat = "left";
  if((i-1) % 16 == 0){
    document.getElementById(i).style.clear = "left";
  };
  appendDiv(div);
}


document.addEventListener("mouseover", function(event) {
  document.getElementById(event.target.id).setAttribute("class", "white");
});






//this is a loop I wrote to float every set of 8 items alternating left and right.
//It wasn't the right thing to do, but I am proud of the code...
//for(i = 1; i < 257; i++){
//  var r = Math.floor((i - 1)/16) + 1;
//  if(i - ((r-1)*16) < 9){
//    document.getElementById(i).style.cssFloat = "left";
//  } else{
//  document.getElementById(i).style.cssFloat = "right";
//  };
//  if((i-1) % 16 == 0){
//    document.getElementById(i).style.clear = "left";
//  }
// }
