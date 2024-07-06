
document.querySelector("p").classList.add("invisible");



document.querySelector("img").addEventListener("click", pageResponse);



window.addEventListener("keydown", logKey) 

function logKey(e) {

    if (e.code === "Enter" && document.querySelector("input").value !== ""){
        pageResponse()
    }

    if (document.querySelector("input").value === ""){
        document.querySelector("p").classList.add("invisible"); 
    }

}




var mondayMessages = ["Monday called — time to kick some goals!", "Mondays: Coffee's favorite day.", "New week, same awesome you!", "Smile! It’s Monday (yes, seriously).", "Grab some coffee. It's just day one"];

var tuesdayMessages = ["Tuesday: Monday’s less evil twin.", "Keep going, at least it's not Monday!", "Tuesday: The day to remind yourself you survived Monday", "You're doing great! And hey, it’s not Monday.", "Tuesday’s here! Monday’s hangover is over."];

var wednesdayMessages = ["Happy Hump Day! Slide into the weekend.", "Wednesday: It’s like Monday but with a view.", "Midweek crisis? Nah, midweek awesomeness!", "Hang in there, it’s Wednesday! Halfway to freedom.", "Wednesday: We’re halfway to our next nap!"];

var thursdayMessages = ["The weekend is so close, you can almost taste it", "Keep calm, it’s almost Friday!", "Today’s agenda? Get through the day.", "The day before the day before the weekend.", "One more day till freedom! Happy Thursday!"];

var fridayMessages = ["It's Friday! Time to go make stories for Monday.", "TGIF: Thank God It's Friday", "Friday: The superhero of the workweek.", "Friday is like a superhero that always arrives just in time.", "Cheers to the freakin’ weekend!"];

var saturdayMessages = ["Let the shenanigans begin!", "Relax, it’s the weekend. You’ve earned it.", "Saturday: Because adulting is hard.", "Saturday is for adventures… or naps.", "A day to sleep in and have fun."];

var sundayMessages = ["Sleep until you’re hungry, then eat until you’re sleepy.", "The day to do nothing and enjoy it.", "Sunday Funday!", "It's almost time. Get all the rest you can!", "The perfect day to refuel your soul and be grateful for each and every one of your blessings."];





function pageResponse(){

    document.querySelector("p").classList.remove("invisible");

    var randomNumber1 = Math.floor(Math.random()*7)+1;

    var backgroundImage = "Images/Image" + randomNumber1 + ".png";

    document.querySelector("body").style.background = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('" + backgroundImage + "') no-repeat center center/cover";

    var dayOfTheWeek = document.querySelector("input").value;

   switch (dayOfTheWeek.toLowerCase()) {
    case "monday":

        document.querySelector("p").textContent = mondayMessages[Math.floor(Math.random()*mondayMessages.length)];

        break;



    case "tuesday":

        document.querySelector("p").textContent = tuesdayMessages[Math.floor(Math.random()*tuesdayMessages.length)];

        break;



    case "wednesday":

        document.querySelector("p").textContent = wednesdayMessages[Math.floor(Math.random()*wednesdayMessages.length)];

        break;


    case "thursday":

        document.querySelector("p").textContent = thursdayMessages[Math.floor(Math.random()*thursdayMessages.length)];

        break;


    case "friday":

        document.querySelector("p").textContent = fridayMessages[Math.floor(Math.random()*fridayMessages.length)];

        break;


    case "saturday":

        document.querySelector("p").textContent = saturdayMessages[Math.floor(Math.random()*saturdayMessages.length)];

        break;


    case "sunday":

        document.querySelector("p").textContent = sundayMessages[Math.floor(Math.random()*sundayMessages.length)];

        break;

    default:
        document.querySelector("p").textContent = "Please enter a valid day!";
        break;

    }

    if (document.querySelector("input").value === ""){
    document.querySelector("p").classList.add("invisible"); 
    }
}





