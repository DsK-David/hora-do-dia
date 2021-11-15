
function carregar(){
var msg=document.getElementById("msg")
var img=document.getElementById("imagem")
var agora=new Date()
var hora=agora.getHours()
msg.innerHTML="Agora são "+hora+" horas"
if(hora >= 0 && hora < 12){
        //bom dia
        img.src="Fotodia.jpeg"
        body.style.background="#3AB6CE"
}
else if(hora >= 12 && hora < 18  ){
        //boo tarde
        img.src="Fototarde.jpeg"
        body.style.background="#D55411"
}
if(hora >= 19){
        //boa noite
        img.src="Fotonoite.jpeg"
        body.style.background="#000"
}
}