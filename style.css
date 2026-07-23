let cart = 0;



function addCart(name){

cart++;

document.getElementById("cartNumber").innerHTML = cart;


alert(
"✅ "+name+" ajouté au panier"
);


clickEffect(event);

}




function searchProduct(){

let text =
document
.getElementById("search")
.value
.toLowerCase();



document
.querySelectorAll(".product")
.forEach(product=>{


let name =
product.dataset.name;


if(name.includes(text)){

product.style.display="block";

}else{

product.style.display="none";

}


});


}





function filter(type){


document
.querySelectorAll(".product")
.forEach(product=>{


if(
type=="all" ||
product.dataset.type==type
){

product.style.display="block";

}else{

product.style.display="none";

}


});


}





function clickEffect(e){


let z=document.createElement("div");


z.innerHTML="Z";


z.style.position="fixed";

z.style.left=e.clientX+"px";

z.style.top=e.clientY+"px";

z.style.fontSize="50px";

z.style.color="#8b5cf6";

z.style.fontWeight="900";

z.style.animation="jump .8s";


document.body.appendChild(z);



setTimeout(()=>{

z.remove();

},800);


}
