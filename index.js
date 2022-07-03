function implemnet(args){
    let p=args;
    
    console.log(args);
   var p1=new Audio("sounds/crash.mp3");
    var p2=new Audio("sounds/kick-bass.mp3");
    var p3=new Audio("sounds/snare.mp3");
    var p4=new Audio("sounds/tom-1.mp3");
    var p5=new Audio("sounds/tom-2.mp3");
    var p6=new Audio("sounds/tom-3.mp3");
    var p7=new Audio("sounds/tom-4.mp3");
    
    switch(args){
        case "w":
            
            p1.play();
            
            break;
        case "a":
            
            p2.play();

            
            break;
        case "s":
            
            p3.play();
            
            break;
        case "d":
            
            p4.play();
            break;
        case "j":
            
            p5.play();
            break;
        case "k":
            
            p6.play();
            break;
        case "l":
            
            p7.play();
            break;
        default:
            console.error();
            break;
    }
    
}

var fun=function(event){
    var ab=this.classList[0];

    implemnet(ab);
    anim("."+ab);
    
}
var ab=document.querySelectorAll(".drum").length;
for (var  i = 0; i <ab; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",fun);
}
document.addEventListener("keydown",fun2);
 
function fun2(e){
    
    var abc=e.key;
    implemnet(abc);
    anim("."+abc);
    console.log(e);
}
function anim(xyz){
    var ty=document.querySelector(xyz);
    ty.classList.add("pressed");
    setTimeout(df,200,ty);
    
}
function df(ty){
    ty.classList.remove("pressed");
}


