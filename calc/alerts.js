let display = document.getElementById('display')

  function equal() {
    alert("=");
  }
  function plus() {
    alert("+");
  }
  function divide() {
    alert("/");
  }
  function multiply() {
    alert("x");
  }
  function subtract() {
    alert("-");
  }

  function buttonClick(theButton){
    let pushed = theButton.innterHTML;
    if (pushed == 'clear'){
      display.innerHTML = '0';
    }
    else{
      display.innerHTML += pushed;
    }
  }
 /* function buttonClick(theButton){
    let pushed = theButton.innerHTML
    
    if (pushed == "clear"){
      display.innerHTML = "0"
    }
    else{
      if(display.innerHTML = "0"){
        display.innerHTML = pushed;
      }
      else {
        display.innerHTML += pushed;
      }
    }
  }*/