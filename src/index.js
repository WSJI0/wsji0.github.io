var menu1=true, menu2=true;
function press(n){
    if(n==1){
        if(menu1) document.getElementById("menu1").className="menu show";
        else document.getElementById("menu1").className="menu hide";
        document.getElementById("menu2").className="menu hide";
        menu1^=1;
    } else if(n==2){
        if(menu2) document.getElementById("menu2").className="menu show";
        else document.getElementById("menu2").className="menu hide";
        document.getElementById("menu1").className="menu hide";
        menu2^=1;
    } else{
        
    }
}
