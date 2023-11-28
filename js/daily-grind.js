//alert("Can you see this?");

/*

Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:

One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content

pic - the src of the coffee
alt - the alt tag for the coffee pic
desc - a description of the coffee
day - the day of the week for the coffee
name - the name of the coffee
color - the color associated with the coffee

*/

function coffeeTemplate(coffee){
    return `
    <p>
    <img src="${coffee.pic}" alt="${coffee.pic}" id="coffee" />
    <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, 
    ${coffee.desc}
    </p>
    `;
}

let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//get query string
    myDay = urlParams.get("day");
}

//change string to an integer
myDay = parseInt(myDay);


switch(myDay){

    case 0:
        today = "Sunday";
        coffee = {
            name: "pumpkin spice",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "a picture of a bubble tea",
            color: "pink",
            day: "Sunday",
            desc: `Try out largebucks!`,
        };
    break;

    case 1:
        today = "Monday";
        coffee = {
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "a picture of a cold brew",
            color: "blue",
            day: "Monday",
            desc: `Like something chilly!`,
        };
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "a picture of a bubble tea",
            color: "pink",
            day: "Tuesday",
            desc: `I like some Bubble Tea!`,
        };
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "a picture of a Mocha",
            color: "brown",
            day: "Wednesday",
            desc: `Which is nice and chocolatey!`,
        };
    break;

    case 4:
        today = "Thursday";
        coffee = {
            name: "frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "a picture of a frappaccino",
            color: "gray",
            day: "Thursday",
            desc: `Tastes good!`,
        };
    break;

    case 5:
        today = "Friday";
        coffee = {
            name: "caramel latte",
            pic: "images/caramel-latte.jpg",
            alt: "a picture of a frappaccino",
            color: "green",
            day: "Friday",
            desc: `You should try it!`,
        };
    break;

    case 6:
        today = "Saturday";
        coffee = {
            name: "drip",
            pic: "images/drip.jpg",
            alt: "a picture of a drip",
            color: "white",
            day: "Saturday",
            desc: `The drip is real!`,
        };
    break;

    

    default:
        today = "Something went wrong!";
}




let coffeeData = coffeeTemplate(coffee);

alert(coffeeData)

//places our coffee object on the page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

//changes color of html element
document.querySelector("html").style.backgroundColor = coffee.color;

console.log(today);