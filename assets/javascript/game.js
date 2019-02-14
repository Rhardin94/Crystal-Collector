//Creating an h1 for the game title
const titleText = $("<h1>");
// Creating the text for the h1
$(titleText).text("CrystalsCollector!");
// appending the h1 text inside the game-title div to appear on page
$("#game-title").append(titleText);
// Creating a paragraph elements for the text
const instructionsText1 = $("<p>");
const instructionsText2 = $("<p>");
const instructionsText3 = $("<p>");
const instructionsText4 = $("<p>");
const instructionsText5 = $("<p>");
// Creating text for each <p> element
$(instructionsText1).text("You will be given a random number at the start of the game.");
$(instructionsText2).text("There are four crystals below. By clicking on a crystal you will add a specfic amount of points to your total score.");
$(instructionsText3).text("You win the game by matching your total score to the random number, you lose the game if your total score goes above the random number. ");
$(instructionsText4).text("The value of each crystal is hidden from you until you click on it.")
$(instructionsText5).text("Each time when the game starts, the game will change the values of each crystal.");
//Append text created to instructions div
$("#instructions").append(instructionsText1, instructionsText2, instructionsText3, instructionsText4, instructionsText5);
// Creating variable for random number between 19 & 120
//Making Math.random work how I wanted referenced by #TeamRoPo as well as "https://stackoverflow.com/questions/43791101/how-does-math-floor-math-random-10-1-work"
const randomNumber = Math.floor(Math.random() * 100) + 19;
// Creating a div for randomNumber to occupy
const randomDiv = $("<h3>");
// Inserting randomNumber into randomDiv
$(randomDiv).text(randomNumber);
// Adding randomDiv to HTML
$("#random-number").append(randomDiv);
//Making variables for wins and losses
let wins = 0;
let losses = 0;
// Creating h3 for wins and losses to display
let winsText = $("<h3>");
let lossesText = $("<h3>");
//Added text to winsText and lossesText
$(winsText).text("Wins:" + wins);
$(lossesText).text("Losses: " + losses);
//Inserting winsText and lossesText to HTML
$("#wins-losses").append(winsText, lossesText);
//Creating variables assoicated with each crystal
const redCrystal = $("<img>");
const blueCrystal = $("<img>");
const orangeCystal = $("<img>");
const greenCrystal = $("<img>");
// Attach each img to the img tag
redCrystal.attr("src", "assets/images/red.png");
blueCrystal.attr("src", "assets/images/blue.png");
orangeCystal.attr("src", "assets/images/orange.png");
greenCrystal.attr("src", "assets/images/green.png");
// Added each image to the page, will add data value later
$("#crystals").append(redCrystal, blueCrystal, orangeCystal, greenCrystal);


/* Pseudo Code
/1. Add title and instructions to the page.
/2. Add random number to the page.
/3. Add wins/losses to the page
/4. Add crystals to the page.
5. Add total player score to the page.
*/