var check= document.querySelector("#check");
var box= document.querySelector(".box");
var ball=document.querySelector('.ball');

check.addEventListener('change', function(){
    if(this.checked==true){
        box.setAttribute('style','background-color:white')
        ball.setAttribute('style','transform:translatex(100%);')
        document.body.setAttribute('style', 'background-color:black; color:white')
    }

    if(this.checked==false){
        box.setAttribute('style','background-color:black')
        ball.setAttribute('style','transform:translatex(0%);')
        document.body.setAttribute('style', 'background-color:white; color:black')
    }
})