function clickEffect(e){

let z=document.createElement("div");

z.innerHTML="Z";

z.style.position="fixed";
z.style.left=e.clientX+"px";
z.style.top=e.clientY+"px";

z.style.fontSize="50px";
z.style.color="#8b5cf6";
z.style.fontWeight="900";

z.style.animation="jump .8s forwards";


document.body.appendChild(z);


let sound=new Audio(
"https://www.soundjay.com/buttons/sounds/button-16.mp3"
);

sound.volume=0.3;
sound.play();


setTimeout(()=>{

z.remove();

},800);

}
