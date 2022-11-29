// Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:

// One unique image, with appropriate and matching content in the alt tag.
// A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
// A unique color that supports the image and paragraph of content
// The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.

let myDate = new Date();
let today = myDate.getDay();

switch (today) {
	case 0:
		today = "Sunday";
		c;
		break;
	case 1:
		today = "Monday";
		coffee = {
			color: "pink",
			name: "Bubble Tea",
			pic: "bubble-tea.jpg",
			alt: "A picture of a bubble tea",
			day: "Monday",
			desc: "I like me some bubble tea!",
		};
		break;
	case 2:
		today = "Tuesday";
		coffee = {
			color: "brown",
			name: "Caramel Latte",
			pic: "caramel-latte.jpg",
			alt: "A picture of a caramel latte ",
			day: "tuesday",
			desc: "It's cold, so a caramel latte sounds good right now ",
		};
		break;
	case 3:
		today = "Wednesday";
		break;
	case 4:
		today = "Thursday";
		break;
	case 5:
		today = "Friday";
		break;
	case 6:
		today = "Saturday";

	default:
		console.log("something went wrong");
}

console.log(coffee);
