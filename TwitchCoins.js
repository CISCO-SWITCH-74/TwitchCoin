function getTwitchCoin(){
  var button = document.querySelector('[aria-label="Claim Bonus"]');
  if(button){button.click();console.log("Click : " + new Date());}
}

setInterval(getTwitchCoin, 10000);