let attendeeCount = 0;
let waterCount = 0;
let zeroCount = 0;
let powerCount = 0;

// Attendance goal
let attendanceGoal = 50;

// Get the HTML elements we need
let checkInForm = document.getElementById("checkInForm");
let attendeeNameInput = document.getElementById("attendeeName");
let teamSelect = document.getElementById("teamSelect");

let greeting = document.getElementById("greeting");
let attendeeCountDisplay = document.getElementById("attendeeCount");

let waterCountDisplay = document.getElementById("waterCount");
let zeroCountDisplay = document.getElementById("zeroCount");
let powerCountDisplay = document.getElementById("powerCount");

let progressBar = document.getElementById("progressBar");

// Function that runs when someone checks in
function checkInAttendee(event) {
  // Stop the page from refreshing
  event.preventDefault();

  // Get the attendee's name and selected team
  let attendeeName = attendeeNameInput.value;
  let selectedTeam = teamSelect.value;

  // Increase total attendance
  attendeeCount = attendeeCount + 1;

  // Update the correct team
  if (selectedTeam === "water") {
    waterCount = waterCount + 1;
  }

  if (selectedTeam === "zero") {
    zeroCount = zeroCount + 1;
  }

  if (selectedTeam === "power") {
    powerCount = powerCount + 1;
  }

  // Personalized greeting
  greeting.textContent =
    "Welcome " + attendeeName + " to the Intel Sustainability Summit!";

  // Update attendance numbers on the webpage
  attendeeCountDisplay.textContent = attendeeCount;
  waterCountDisplay.textContent = waterCount;
  zeroCountDisplay.textContent = zeroCount;
  powerCountDisplay.textContent = powerCount;

  // Calculate progress toward 50 attendees
  let progressPercent = (attendeeCount / attendanceGoal) * 100;

  // Update progress bar
  progressBar.style.width = progressPercent + "%";

  // Console output for testing
  console.log(attendeeName + " checked in.");
  console.log("Total attendance: " + attendeeCount);

  // Clear the form for the next attendee
  checkInForm.reset();
}

// Run the function whenever the form is submitted
checkInForm.addEventListener("submit", checkInAttendee);
