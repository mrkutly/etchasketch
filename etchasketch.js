for(i = 0; i < 256; i++){
  var div = document.createElement("div");
  function appendDiv(div){
    document.getElementById("container").appendChild(div);
  };
  div.setAttribute("id",i + 1);
  appendDiv(div);
};

for(i = 1; i < 257; i++){
  var r = Math.floor((i - 1)/16) + 1;
  if(i - ((r-1)*16) < 9){
    document.getElementById(i).style.cssFloat = "left";
  } else{
  document.getElementById(i).style.cssFloat = "right";
  }
}
