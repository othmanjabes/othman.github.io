console.log("hour,minutes");

// Working_time_calculation(hour,minutes);
function Working_time_calculation() {
    var hour = document.getElementById("hour").value;
    var minutes = document.getElementById("minutes").value;
    let perHour = 31; // price per hour
    let sum = 0; // sum Price
    let totalHourInMinuts = hour * 60;// converte hour to minutes && collect with minutes 
    let _150 = 0;
    let _125 = 0;
    let _100 = 0;
    console.log(totalHourInMinuts+"   "+minutes);
    totalHourInMinuts = minutes+ totalHourInMinuts;
    console.log(totalHourInMinuts+"   "+minutes);
    // ex: 8 * 60 -->  480 + 30 = 510
    if(totalHourInMinuts < 0)return;
    if (totalHourInMinuts <= 480) {
        _100 = ((totalHourInMinuts/60) * perHour);
    } else {
        _100 = _100 + ((480/60) * perHour);
        totalHourInMinuts = totalHourInMinuts - 480;
        if (totalHourInMinuts <= 120) {
            _125 = ((totalHourInMinuts/60) * (perHour * 0.25+(perHour)));
        }
        else{
            let temp2 = totalHourInMinuts - 120;
            _125 = ((temp2/60) * (perHour * 0.25+(perHour)));
            totalHourInMinuts = totalHourInMinuts - 120;
            _150 = ((totalHourInMinuts/60) * (perHour * 0.50+(perHour)));
        }
    }
    let sumAll = _100+_125+_150;
    printData(_100,_125,_150,sumAll);
}


function printData(_100,_125,_150,sumAll) {
    document.getElementById("txt100%").innerHTML = _100;
    document.getElementById("txt125%").innerHTML = _125;
    document.getElementById("txt150%").innerHTML = _150;
    document.getElementById("txtSum").innerHTML = sumAll;
}







// hour = 8 // minuts = 30
// 8 * 60 =     480 + 30 = 510
// 510 - 480
// 510 / 60
// 8.5
// 8 * 31 = 248
// 0.5 * 37

// let hour = 8; // input hour
// let minutes = 30; // input minutes

