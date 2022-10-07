// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...


// STOP LIGHT -------------------------------

// Identify Stop light button
const stopLightBtn = document.querySelector("#stopButton")

//Identify stop light bulb
const stopLightBulb = document.querySelector(" #stopLight");

// function to add light and remove light
function turnStopLightOn(){
    clearLights() // Deactivates all lights
    stopLightBulb.classList.add('redBulb');
} 

function turnStopLightOff(){
    stopLightBulb.classList.remove('redBulb');
}


// When stop is clicked, turn on red stop light
stopLightBtn.addEventListener('click', turnStopLightOn);

// When bulb is clicked, turn off light
stopLightBulb.addEventListener('click',turnStopLightOff);




// SLOW LIGHT -------------------------------

// Identify Slow Light button
const slowLightBtn = document.querySelector("#slowButton")

// Identify slow light bulb
const slowLightBulb = document.querySelector(" #slowLight");

// function to add light, and remove light
function turnSlowLightOn(){
    clearLights() // Deactivates all lights
    slowLightBulb.classList.add('yellowBulb');
} 

function turnSlowLightOff(){
    slowLightBulb.classList.remove('yellowBulb');
}

// When slow light is clicked, turn on yellow slow light
slowLightBtn.addEventListener('click', turnSlowLightOn);

// When bulb is clicked, turn off light
slowLightBulb.addEventListener('click',turnSlowLightOff);


// GO LIGHT -------------------------------

// Identify Go Light button
const goLightBtn = document.querySelector("#goButton")
// Identify go light bulb
const goLightBulb = document.querySelector(" #goLight");

// function to add light and remove light
function turnGoLightOn(){
    clearLights() // Deactivates all lights
    goLightBulb.classList.add('greenBulb');
} 

function turnGoLightOff(){
    goLightBulb.classList.remove('greenBulb');
}

// When go light is clicked, turn on green go light
goLightBtn.addEventListener('click', turnGoLightOn);

// When bulb is clicked, turn off light
goLightBulb.addEventListener('click',turnGoLightOff);

// --------------------------------------

// clear lights function

function clearLights(){
    stopLightBulb.classList.remove('redBulb')
    slowLightBulb.classList.remove('yellowBulb')
    goLightBulb.classList.remove('greenBulb')
}
