let count=1;
let countmobile=1;
document.getElementById('radioData1').checked = true;
document.getElementById('radio1').checked=true
setInterval(function(){
    nextImgData()
    nextImg();
},5000)
function nextImgData(){
    count++
    if(count>4){
        count = 1;
    }
    document.getElementById('radioData'+count).checked=true
}
function nextImg(){
    countmobile++
    if(countmobile >4){
        countmobile = 1;
    }
    document.getElementById('radio'+countmobile).checked=true
}