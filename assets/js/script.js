// get elements 
let h1 = document.querySelector('h1');

/**
 * Clock function 
 */
function clock(){
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let realH;
  let am;
  if( h > 12 ){
    am = "PM";
    realH = h -12;
  }else {
    realH = h;
    am = "AM";
  }

  return `${realH}:${m}:${s} ${am}`;
}


/**
 * start clock function
 */
 clock();
setInterval(() => {
  h1.innerHTML = clock();
}, 1000);


