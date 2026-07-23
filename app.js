function clickEffect(event){


let z=document.createElement("div");

z.innerHTML="Z";

z.className="click-z";


z.style.left=
event.clientX+"px";


z.style.top=
event.clientY+"px";


document.body.appendChild(z);



setTimeout(()=>{

z.remove();

},800);


}



function clickSound(){


let audio =
new Audio(
"https://www.soundjay.com/buttons/sounds/button-16.mp3"
);


audio.volume=0.4;


audio.play();


}
