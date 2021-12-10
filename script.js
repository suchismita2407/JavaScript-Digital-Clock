function Digiclock(){ 
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var time = "AM";

    if(h>12){
        time = "PM";
    }

    h = (h < 10)? "0" + h : h;
    m = (m < 10)? "0" + m : m;
    s = (s < 10)? "0" + s : s;

    document.getElementById("Clock").innerHTML = h + ':' + m + ':' + s + " " + time;

    setTimeout(Digiclock, 1000);

   }

   Digiclock();