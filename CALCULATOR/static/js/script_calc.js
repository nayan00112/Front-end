s = 0 
function nextChar(a) {
    if(s == 1){
        document.getElementById("disp").innerHTML = "";
    }
    if (a == "B") {
        let temp = document.getElementById("disp").innerHTML;
        let len = temp.length;
        if (len != 0) {
            document.getElementById("disp").innerHTML = temp.slice(0, len - 1);
        }
        s = 0;
    }
    else if (a == "C") {
        document.getElementById("disp").innerHTML = "";
        s = 0;
    }
    else if (a == "=") {
        try {
            document.getElementById("disp").innerHTML = eval(document.getElementById("disp").innerHTML);
            s = 0;
        }
        catch (e) {
            s = 1;
            document.getElementById("disp").innerHTML = "Error";
        }
    }    
    else {
        document.getElementById("disp").innerHTML = document.getElementById("disp").innerHTML + a;
        s = 0;
    }
    if(document.getElementById("disp").innerHTML == "Infinity"){
        s = 1;
    }
}