let s = 0;
function navbtn(){
    if(s == 0){
        document.getElementById("nav_ul").style  = 'display:flex;';
        s = 1;
    }
    else{
        document.getElementById("nav_ul").style  = 'display:none;';
        s = 0;
    }
}