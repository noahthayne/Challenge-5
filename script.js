// Create variables for all the parts on the document you need to grab, ammend, save to local date, etc: Event, save button, proably the time as well to ID exactly what event
// display the current time and day in the header where the starter code tells us
//Color code each timeBlock according to past present or future based on the hour it represents
    //future hours are green
    //current hour is red
    //past hours are grey
//Each event block needs to be able to be edited with a new event that the user inputs and the saved when the user selects
    //when the event text area is clicked, the user can input a new name for the event
    //when the user clicks the save button, the users new event name is saved into local storage until midnight
    //both are/should/could clickable events 
//When the page is freshed, the users prior saved input displays in the event box


var eventEl = document.getElementsByClassName(description)
var buttonEl = document.getElementsByClassName(saveBtn)
var now = today();

$("#currentDay").text(moment("2010-10-20 4:30", "YYYY-MM-DD HH:mm"));