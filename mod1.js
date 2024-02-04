<script>
  function selectE(x){return document.querySelector(x);}
function createE(x,y){return document.body.appendChild(document.createElement(x)).id=y;}function setStyle(x,y){return selectE(x).setAttribute("style",y);}function setTask(x,y,z){return selectE(x).addEventListener(y,z);} function hold(x,y) {return selectE(x).appendChild(selectE(y));}

  </script>
