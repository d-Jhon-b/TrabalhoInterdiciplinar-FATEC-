let count=1;
document.getElementById('radioData1').checked = true;
setInterval(function(){
    nextImgData()
},5000)
function nextImgData(){
    count++
    if(count >4){
        count = 1;
    }
    document.getElementById('radioData'+count).checked=true
}