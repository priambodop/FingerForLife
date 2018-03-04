function getRandInt(){
  var text = "";
  text = Math.floor(Math.random() * (999999 - 111111)) + 111111;
  document.getElementById("code").innerHTML = text;
}
