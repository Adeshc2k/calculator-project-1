let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button => {
  button.addEventListener('click',(e)=>{
      console.log(e.target.innerText);
    switch (e.target.innerText) {

      case 'c':
        display.innerText = '';
        break;


    case "Del":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0,-1);
        }
          break;
    
          case '=':
          try{
            console.log(typeof(display.innerText));
            console.log(display.innerText);
            display.innerText = eval(display.innerText);
          }catch{
            display.innerText = 'Error!';
          }
          break;

      default:
      display.innerText += e.target.innerText;

    }
  });
});
