const api_url = 'https://ferien-api.de/api/v1/holidays/NI';
var nummer = 0;
async function getFerien(params) {
    const response = await fetch(api_url);
    const data = await response.json();
    
    
    var countDownDate = new Date (data[nummer].start).getTime();
    
    var x = setInterval(function(){
            
        var now = new Date().getTime();
        var distance = countDownDate - now;
        while(distance < 0)
        {
            nummer++;
            countDownDate = new Date (data[nummer].start).getTime();
            distance = countDownDate - now;
            console.log(distance);
        }   
        document.getElementById('end').textContent = data[nummer].end;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;

            if(distance < 0){
                clearInterval(x);
                document.getElementById("days").innerHTML = 00;
            document.getElementById("hours").innerHTML = 00;
            document.getElementById("minutes").innerHTML = 00;
            document.getElementById("seconds").innerHTML = 00;
            }
             
        },1000)
        
}
getFerien();