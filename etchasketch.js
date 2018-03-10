for(i = 0; i < 16; i++){
  var div = document.createElement("div");
  function appendDiv(div){
    document.getElementById("container").appendChild(div);
  };
  appendDiv(div);
}
