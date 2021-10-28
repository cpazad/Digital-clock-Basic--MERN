let h1= document.querySelector('h1');

// Clock Function
function clock(){
let today = new Date();
let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();
let hourFormat;
let dayNight;

if(h>12){
hourFormat = h -12;
dayNight = "PM"; 
}else{
hourFormat = h;
dayNight = "AM";
}

return `${hourFormat}:${m}:${s} ${dayNight} ` ;
}

clock();
// Load clock function
setInterval(()=>{
    h1.innerHTML= clock();
},1000
)


