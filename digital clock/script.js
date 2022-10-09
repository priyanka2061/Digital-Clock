let digital=()=>
{   
    let dayb=['Sunday','monday','tuesday','wednesday','thursday','friday','saturday']
    let months=['January','Febuary','March','Aprial','May','June','July','Augest','September','October','November','December']
    let time=new Date();
    let hours=time.getHours();
    let minute=time.getMinutes();
    let second=time.getSeconds();
    let d= hours<12 ?'AM':'PM';
    document.getElementById("clock").innerHTML=hours+":"+minute+":"+second+" "+d;
    let day=time.getDay();
    let year=time.getFullYear();
    let month=time.getMonth();
    document.getElementById("ymd").innerHTML= year+"-"+months[month]+"-"+dayb[day];

}
digital();
setInterval(digital,1000);