console.log("hour,minutes");

// Working_time_calculation(hour,minutes);
function Working_time_calculation() {
    var hour = document.getElementById("hour").value;
    var minutes = document.getElementById("minutes").value;
    let perHour = 31; // price per hour
    let sum = 0; // sum Price
    console.log("minutes:"+minutes);
    let totalHourInMinuts = hour * 60;// converte hour to minutes && collect with minutes 
    totalHourInMinuts = totalHourInMinuts+minutes;
    console.log("totalHourInMinuts",totalHourInMinuts);
    // ex: 8 * 60 -->  480 + 30 = 510

    
    if (totalHourInMinuts <= 480) {
        //console.log("if " + sum);
        sum = sum + ((totalHourInMinuts/60) * perHour);
        // console.log("sum",sum,totalHourInMinuts,perHour);
        // console.log("if " + sum);
        // culculator first 8 hour
    } else {
        //console.log("else"+ sum);
        sum = sum + ((480/60) * perHour);
        totalHourInMinuts = totalHourInMinuts - 480;
        if (totalHourInMinuts <= 120) {
            // console.log("else if"+ sum);
            sum = sum + ((totalHourInMinuts/60) * (perHour * 0.25+(perHour)));
        }
        else{
            //console.log("else if else"+ sum);
            let temp2 = totalHourInMinuts - 120;
            sum = sum + ((temp2/60) * (perHour * 0.25+(perHour)));
            sum = sum + ((totalHourInMinuts/60) * (perHour * 0.50+(perHour)));
        }
    }

    console.log("The Sum is: ",sum);
    console.log("---------");
    document.getElementById("txt100%").innerHTML = sum;
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

