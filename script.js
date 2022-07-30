// DOM Elements

const time = document.getElementById('time')
const greeting = document.getElementById('greeting')
const name = document.getElementById('name')
const focus = document.getElementById('focus')
const city = document.getElementById('city')

// Options
const showAMPM = true;
//Show Time
function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
    
    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12 hour format
    hour =  hour % 12 || 12;


    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAMPM ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// add Zero
function addZero(n){
    return(parseInt(n,10) < 10 ? '0':'') + n;

}

// Set background and Greeting
function setBgGreet(){
 let today = new Date();
    hour = today.getHours();
  if (hour < 12){
    //Morning
    document.body.style.backgroundImage="url('https://source.unsplash.com/random/1600x900/?Morning')"
    greeting.textContent='Good Morning';
  } else if (hour < 18){ 
    // Afternoon
    document.body.style.backgroundImage="url('https://source.unsplash.com/random/1600x900/?Afternoon')"
    greeting.textContent='Good Afternoon';
    document.body.style.color='#B6BFBF'
  } else {
    //Evening 
    document.body.style.backgroundImage="url('https://source.unsplash.com/random/900x700/?Evening')"
    greeting.textContent='Good Evening';
    document.body.style.color='white'
  }
}

// get Name
function getName(){
    if (localStorage.getItem('name')=== null){
        name.textContent = '[Enter Name] ';
    }else{
        name.textContent=localStorage.getItem('name');
    }
}
// set Name
function setName(e){
    if(e.type === 'keypress'){
        //Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }else{
        localStorage.setItem('name', e.target.innerText)
    }
}

// get Name
function getFocus(){
    if (localStorage.getItem('focus') === null){
        focus.textContent = 'Enter Focus';
    }else{
        focus.textContent=localStorage.getItem('focus');
    }
}

// set Name
function setFocus(e){
    if(e.type === 'keypress'){
        //Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }else{
        localStorage.setItem('focus', e.target.innerText)
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
getWeather();
displayWeather();