let date = new Date();
let todaydate = date.getDate();

document.getElementById("update").innerHTML = date.toDateString();

function main(){
    doBanner();
    getDay();
    
}

function doBanner(data){
    if (new Date().getDay() == "5" || data== true){
        document.getElementById('banner').classList.toggle('hidden');
    }
    document.documentElement.scrollTop = 0;
}