let backgrounds = ["url('images/streetWithPeople.jpeg')", "url('images/topViewPeople.jpeg')", ];
let counter = 0;
let backgroundChangeTimer;
let headerBackground = document.getElementById('headerBackground');
function backgroundChange()
{
    backgroundChangeTimer = setInterval(function()
    {
        counter++;
        if(counter > 1)
            counter = 0;
        headerBackground.style.backgroundImage = backgrounds[counter];
        headerBackground.style.transition = "500ms ease-in"
    }, 5000);
    
}