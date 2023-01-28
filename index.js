document.getElementById("webs-btn")
            .onclick = function(){
                window.setTimeout(function(){location.href = 'https://emirakgunnet.github.io/emirakgun';}, 1);                        
             };
yazi = "#coding ♥ @akgunxt ♥ emirakgun ";
        function step() {
            yazi = yazi.substr(1) + yazi.substr(0,1);
            document.title = yazi.substr(0,30);
        }
        