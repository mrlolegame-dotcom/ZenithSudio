let cart=[];



function clickEffect(element){


let sound=
document.getElementById(
"clickSound"
);


sound.currentTime=0;

sound.play();



let z=document.createElement("div");

z.innerHTML="Z";

z.className="jump-z";


let rect=
element.getBoundingClientRect();


z.style.left=
rect.left+
rect.width/2+
"px";


z.style.top=
rect.top+
"px";


document.body.appendChild(z);



setTimeout(()=>{

z.remove();

},800);



}




function joinCommunity(btn){

clickEffect(btn);


window.open(
"https://discord.gg/4jqYkZrfs",
"_blank"
);


}




function addCart(product){

cart.push(product);


alert(
product+
" ajouté au panier 🛒"
);


}
