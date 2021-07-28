const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");

const year=document.getElementById("year");

const countdown=document.getElementById("countdown");
const loading=document.getElementById("loading");

const currentyear=new Date().getFullYear();
// console.log(currentyear);

const newyeartime=new Date(`January 01 ${currentyear + 1} 00:00:00`);
// console.log(newyeartime);

year.textContent = currentyear+1;

function updatecountdown(){
    const currenttime=new Date();
    const diff = newyeartime - currenttime;
    // console.log(diff);
    //                       ms    s   m  h   d
    const d = Math.floor(diff/1000/60/60/24);
    // console.log(d);
    const h = Math.floor(diff/1000/60/60)%24;
    // console.log(h);
    const m = Math.floor(diff/1000/60)%60;
    // console.log(m);
    const s = Math.floor(diff/1000)%60;
    // console.log(s);

    days.textContent = d;
    hours.innerText  = h < 10? "0"+h : h;
    minutes.innerText= m < 10? "0"+m : m;
    seconds.innerText= s < 10? "0"+s : s;
}

setTimeout(()=>{
    loading.remove();
    countdown.style.display="flex";
},1000)

setInterval(updatecountdown,1000);