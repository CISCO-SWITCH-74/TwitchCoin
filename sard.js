function getTwitchCoin(){
  var button = document.querySelector('[aria-label="Récupérer un bonus"]');
  if(button){button.click();console.log("Click : " + new Date());}
}

setInterval(getTwitchCoin, 10000);