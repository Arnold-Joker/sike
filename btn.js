const no = document.getElementById("no")
const yes = document.getElementById("yes")

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")

no.addEventListener("click" , function(){
				alert("ZOOM OUT")
				btn1.style.opacity="1"
				no.style.opacity="0"
})

btn1.addEventListener("click" , function(){
				btn2.style.opacity="1"
				btn1.style.opacity="0"

})
btn2.addEventListener("click" , function(){
				btn3.style.opacity="1"
				btn2.style.opacity="0"
})

btn3.addEventListener("click" , function(){
				btn3.style.opacity="0"
				yes.style.fontSize="50px"
				btn4.style.opacity="1"
})

btn4.addEventListener("click" , function(){
				btn4.style.opacity="0"
				btn5.style.opacity="1"
})

btn5.addEventListener("click" , function(){
				btn5.style.opacity="0"
				btn6.style.opacity="1"
})

btn6.addEventListener("click" , function(){
				btn6.style.opacity="0"
})

