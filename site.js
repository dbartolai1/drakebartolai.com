console.log('Hello World!');

const page = document.querySelector('.page-content-div');
const header = document.querySelector('.page-header');
const buttons = document.querySelectorAll('.sidebar-button');
const buttonNames = ['homeButton', 'blogButton', 'tutorButton', 'wordleButton', 'classmateButton', 'calcButton'];
const buttonDict = {};
let activeButton = 'homeButton';

function setButton(activeButton){
    for (let j=0; j<buttons.length; j++){
        if (activeButton == buttonNames[j]){
            console.log(activeButton, 'was clicked!');
            buttons[j].classList.add('sidebar-button-active');
        } else {
            let button=buttons[j];
            button.classList.remove('sidebar-button-active');
        }
    }
}

setButton(activeButton);

for (let i=0; i<buttons.length; i++){
    buttonDict[buttonNames[i]] = buttons[i];
    buttons[i].addEventListener('click', function () {
        activeButton = buttonNames[i]
        setButton(activeButton);
    });
}

//HOME PAGE FUNCTIONALITY
function homeButton(){
    header.innerHTML = 'Home'
    page.innerHTML = `
        <p class="page-content">
        Hey, I'm Drake! I'm pursuing a B.S. in Computer Engineering at University of Illinois, with a minor in Econometrics. I hope to parlay these two disciplines into one career, one where I can use computers to innovate in different kinds of markets, particularly in sports.
        </p>
        <p class="page-content">
        I like to always stay learning, and I continue to expand my ability to create software every day. Feel free to check out my projects and blog to the left! I also do work as a private tutor, hosting individual and small group sessions. You can find my reviews and references to the left as well, and schedule an appointment if you like.
        </p>
        <p class="page-content">
        Currently, I am building out LowStakes, a platform which compiles odds from diferent sportsbooks and highlights bets with high expected values. I'm also going to provide some other utilities, such as a vig calculator and a bet tracker.  
        </p>
        <p class="page-content">
        I'd also like to expand on ClassMate. Currently, it works as a low level gradebook, and functions a lot more like a utility than a full blown app. I envision expanding it into a full blown school planner. It could track your grades with all the same functionality it currently has, and also allows you to plan your schedule, set due dates, and study using spaced repitition.
        </p>
    `
}

homeButton();

buttonDict['homeButton'].addEventListener('click', function () {
    homeButton();
})


//BLOG PAGE FUNCTIONALITY
buttonDict['blogButton'].addEventListener('click', function () {
    header.innerHTML = 'Blog'
    page.innerHTML = `
    
    `
})

//TUTOR PAGE FUNCTIONALITY
buttonDict['tutorButton'].addEventListener('click', function () {
    header.innerHTML = 'Tutoring'
    page.innerHTML = `
    
    `
})

//WORDLE PAGE FUNCTIONALITY
buttonDict['wordleButton'].addEventListener('click', function () {
    header.innerHTML = 'Wordle'
    page.innerHTML = `
    
    `
})

//CLASSMATE PAGE FUNCTIONALITY
buttonDict['classmateButton'].addEventListener('click', function () {
    header.innerHTML = 'ClassMate'
    page.innerHTML = `
    
    `
})

//CALCULATOR PAGE FUNCTIONALITY
buttonDict['calcButton'].addEventListener('click', function () {
    header.innerHTML = 'Calculator'
    page.innerHTML = `
    
    `
})