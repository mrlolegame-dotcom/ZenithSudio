function clickZ(e){


let z=document.createElement("div");


z.innerHTML="Z";


z.className="z";


z.style.left=e.clientX+"px";

z.style.top=e.clientY+"px";


document.body.appendChild(z);



setTimeout(()=>{

z.remove();

},800);



}
