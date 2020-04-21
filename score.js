
var num=prompt("how many num of games")
var para=document.getElementById("games")
para.textContent="Playing to: "+num
var sone=document.getElementById("d1")
var stwo=document.getElementById("d2")
var pone=document.getElementById("one")
var ptwo=document.getElementById("two")
var rst=document.getElementById("reset")
var head = document.querySelector("h1")
rst.addEventListener("click",function(){
	 num=prompt("how many num of games")
	para.textContent="Playing to: "+num
	p1=0
	sone.innerHTML=p1
	p2=0
	sone.classList.remove("win")
	stwo.classList.remove("win")
	stwo.innerHTML=p2
	pone.style.background="red"
	
})


p1=0
p2=0
pone.style.background="red"
pone.addEventListener("click",function(){
	if (p1<num && p2!=num){
		p1=p1+1
	sone.innerHTML=p1
	if (p1==num){
		sone.classList.add("win")
	}

}	
})
	
	
ptwo.addEventListener("click",function(){
	if (p2<num && p1!=num){
	p2=p2+1
	stwo.innerHTML=p2
	}
	if (p2==num){
		stwo.classList.add("win")
	}
})

