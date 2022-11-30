//alert("hola!");

/*
    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page
    that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:
    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph 
    must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content
    The items we need are:
    image( a pic of the coffee)
    alt ( a descrption of the img for people who can't see it)
    description ( a note about the coffee)
    weekday 
    color ( to support the coffee)
    The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.
*/

function coffeeTemplate(coffee) {
	return `<p>
            <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong >${coffee.name}</strong>, ${coffee.desc}
            </p>`;
}

let myDate = new Date();
let today = myDate.getDay();
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;

//output to console
console.log(queryString);

//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if (urlParams.has("day")) {
	//from querystring
	today = urlParams.get("day");
}
//convert the string to an interger
today = parseInt(today);

switch (today) {
	case 0:
		today = "Sunday";
		coffee = {
			color: "purple",
			name: "Caramel Latte",
			pic: "caramel-latte.jpg",
			alt: "A picture of a caramel latte ",
			day: "Sunday",
			desc: `Caramel lattes are the best, specially with ice!`,
		};
		break;

	case 1:
		today = "Monday";
		coffee = {
			color: "blue",
			name: "Bubble Tea",
			pic: "bubble-tea.jpg",
			alt: "A picture of a bubble tea",
			day: "Monday",
			desc: `I love bubble tea!`,
		};
		break;

	case 2:
		today = "Tuesday";
		coffee = {
			color: "brown",
			name: "Cold Brew",
			pic: "cold-brew.jpg",
			alt: "A picture of cold brew",
			day: "Tuesday",
			desc: `Cold brew is the best!`,
		};
		break;

	case 3:
		today = "Wednesday";
		coffee = {
			color: "black",
			name: "Drip",
			pic: "drip.jpg",
			alt: "A picture of drip coffee",
			day: "Wednesday",
			desc: `Drip coffee is essential!`,
		};
		break;

	case 4:
		today = "Thrusday";
		coffee = {
			color: "red",
			name: "Frappaccino",
			pic: "frappaccino.jpg",
			alt: "A picture of a frappaccino drink ",
			day: "Thrusday",
			desc: `Who doesnt love frappacinos!`,
		};
		break;

	case 5:
		today = "Friday";
		coffee = {
			color: "green",
			name: "Pumpkin Spice Latte",
			pic: "pumpkin-spice-latte.jpg",
			alt: "A picture of pumpkin spice latte",
			day: "Friday",
			desc: `It is the season, Pumpkin spice season!`,
		};
		break;

	case 6:
		today = "Saturday";
		coffee = {
			color: "yellow",
			name: "Mocha",
			pic: "mocha.jpg",
			alt: "A picture of a mocha ",
			day: "Saturday",
			desc: `I need a caffeine fix! More Mochas Please!!`,
		};
		break;

	default:
		alert("Something went wrong");
}

console.log(coffee);
document.getElementById("coffee-template").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;
