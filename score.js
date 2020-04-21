
var num=prompt("how many num of games")
var para=document.getElementById("games")
para.textContent="Playing to: "+num
var pone=document.getElementById("one")
var ptwo=document.getElementById("two")
var rst=document.getElementById("reset")
var head = document.querySelector("h1")
rst.addEventListener("click",function(){
	location.reload()
})
p1=0
p2=0
pone.style.background="red"
head.textContent=p1+" To "+p2
pone.addEventListener("click",function(){
	if (p1<num && p2!=num){
		p1=p1+1
	head.textContent=p1+" To "+p2
}
})
	
	
ptwo.addEventListener("click",function(){
	if (p2<num && p1!=num){
	p2=p2+1
	head.textContent=p1+" To "+p2

	}
})

