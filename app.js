const display = document.querySelector(".display");
const btns = document.querySelectorAll("button");

btns.forEach((e)=>{
  e.onclick=()=>{
    if(e.id=="ca"){display.innerText=""}
    else if(e.id=="c"){
      let str = display.innerText.toString();
      display.innerText=str.substring(0,str.length-1);
    }
    else if(display.innerText !="" && e.id=="="){
      display.innerText = eval(display.innerText);
    }
    else if(display.innerText == "" && e.id=="="){
      display.innerText = "0";
      setTimeout(()=>(display.innerText = ""),1500);
    }
    else{
      display.innerText+=e.value;
    }
  }
})