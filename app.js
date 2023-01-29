let backgrounds = ["url('images/streetWithPeople.jpeg')", "url('images/topViewPeople.jpeg')", ];
let counter = 0;
let backgroundChangeTimer;
let headerBackground = document.getElementById('headerBackground');
let dropDownThings = document.getElementById('myDropdown');
let searchBox = document.getElementById('searchBar');
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
function dropDown()
{
    downDownThings.classList.add("show");
}
searchBox.addEventListener("click", function() {
    downDownThings.classList.add("show");
  });

let people = 
[
    {
        "name": "Ali Vayani",
        "rating": "100%",
        "location": "Keller TX",
        "height": "5' 11\"",
        "age": 16,
        "hours": "7:30 am - 12:00 am",
        "headerImage": "images/aliImage.jpeg"
    },
    {
        "name": "Zach Hickman",
        "rating": "78%",
        "location": "Fort Worth TX",
        "height": "6' 2\"",
        "age": 16,
        "hours": "5:30 am - 11:30 am",
        "headerImage": "images/aliImage.jpeg"
    },
    {
        "name": "Hunter Honikes",
        "rating": "63%",
        "location": "Fort Worth TX",
        "height": "5' 10\"",
        "age": 15,
        "hours": "1:30 pm - 2:00 pm",
        "headerImage": "images/aliImage.jpeg"
    }
];
