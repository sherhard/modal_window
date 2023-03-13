let myModalWindow=document.getElementById('myModalWindow');
let modal=document.getElementById('modal');
let close=document.getElementsByClassName('close')[0];


myModalWindow.addEventListener('click',modalWindow);
function modalWindow(){
	modal.style.display='block'
}

close.onclick=function(){
	modal.style.display='none';
}
window.addEventListener('click',windowClose);
function windowClose(event){
	if(event.target==modal){
		modal.style.display='none'
	}
}