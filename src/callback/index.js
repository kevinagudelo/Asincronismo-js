

function date (callback) {
    console.log(new Date);
    setTimeout(function (){
        let date = new Date;
        callback(date);
    },3000)
}

function printDate (dateNow) {
    console.log(dateNow)
}

date(printDate);