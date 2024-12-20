console.log('Hello World!');

const page = document.querySelector('.page-content-div');
const header = document.querySelector('.page-header');
const buttons = document.querySelectorAll('.sidebar-button');
const buttonNames = ['homeButton', 'blogButton', 'tutorButton', 'wordleButton', 'calcButton'];
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

setButton('homeButton');

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
        <p class="page-content">
        Welcome to my website! I hope you enjoy :)
        <p>
    `
}

homeButton();

buttonDict['homeButton'].addEventListener('click', function () {
    homeButton();
})


//BLOG PAGE FUNCTIONALITY
function postPreview(postContent){
    const words = postContent.split(' ');
    const preview = words.slice(0, 40);
    if (words.length > 40) return preview.join(' ') + '...';
    else return preview.join(' ');
}

buttonDict['blogButton'].addEventListener('click', function () {
    header.innerHTML = 'Blog';
    page.innerHTML='';
    fetch('blog.json')
        .then(response => response.json())
        .then(data => {
            for(let i=0; i<data.length; i++){

                //CREATE POST
                const blogPost = document.createElement('div');
                blogPost.classList.add('blog-post');

                //CREATE POST INFO DIV
                const blogPostInfo = document.createElement('div');
                blogPostInfo.classList.add('blog-post-info');
                blogPost.appendChild(blogPostInfo);

                //CREATE POST TITLE
                const blogPostTitle = document.createElement('h2');
                blogPostTitle.classList.add('blog-post-title');
                const blogPostTitleText = document.createTextNode(data[i].title);
                blogPostTitle.appendChild(blogPostTitleText);
                blogPostInfo.appendChild(blogPostTitle);

                //CREATE POST DATE DIV
                const blogPostDateDiv = document.createElement('div');
                blogPostDateDiv.classList.add('blog-post-date-div');
                blogPostInfo.appendChild(blogPostDateDiv);

                //CREATE POST DATE
                const blogPostDate = document.createElement('h2');
                blogPostDate.classList.add('blog-post-date');
                const blogPostDateText = document.createTextNode(data[i].date);
                blogPostDate.appendChild(blogPostDateText);
                blogPostDateDiv.appendChild(blogPostDate);
                
                //CREATE POST CONTENT
                page.insertAdjacentElement('beforeend', blogPost);
                const blogPostContent = document.createElement('p');
                blogPostContent.appendChild(document.createTextNode(postPreview(data[i].content[0])))
                blogPost.appendChild(blogPostContent);
                blogPost.addEventListener('click', function () {
                    page.innerHTML='';
                    console.log(data[i].title, 'click');
                    for (let j = 0; j<data[i].content.length; j++){
                        const content = data[i].content[j];
                        const textBlock = document.createElement('p');
                        textBlock.appendChild(document.createTextNode(content));
                        textBlock.classList.add('page-content')
                        page.appendChild(textBlock);
                    }
                    header.innerHTML = data[i].title;
                    header.appendChild(blogPostDateDiv);
                })
            }
        })
        .catch(error => console.error('Error fetching blog posts:', error));
})

//TUTOR PAGE FUNCTIONALITY
buttonDict['tutorButton'].addEventListener('click', function () {
    header.innerHTML = 'Tutoring';
    page.innerHTML = '';
    const tutorParagraph = document.createElement('div');
    page.appendChild(tutorParagraph);
    
    const tutorParagraph1 = document.createElement('p');
    tutorParagraph1.classList.add('page-content');
    tutorParagraph1.appendChild(document.createTextNode(`
        For about four years now I've been running my tutoring business, and I'm proud to be able to say that all of my clients have reached their goal with my assistance. Students I've worked with have passed exams in AP Physics, Math, Chemistry, History, and more. I've also had people get accepted into high schools all across Chicago such as St. Ignatius, Lane Tech, and DePaul College Prep. Recently, since I've moved into the SAT and ACT space, other clients of mine have been accepted to Case Western Reserve, University of Illinois, and the list keeps on growing as this year's class continues to get acceptance letters.
    `));
    tutorParagraph.appendChild(tutorParagraph1);

    const tutorParagraph2 = document.createElement('p');
    tutorParagraph2.classList.add('page-content');
    tutorParagraph2.appendChild(document.createTextNode(`
        If you're here to inquire about my business, please feel free to hit the button in the bottom left and shoot me a quick email. If you have a positive reference, please do the same and I will post your review here! 
    `));
    tutorParagraph.appendChild(tutorParagraph2);
})

//WORDLE PAGE FUNCTIONALITY
buttonDict['wordleButton'].addEventListener('click', function () {
    header.innerHTML = 'Wordle'
    page.innerHTML = `
    
    `
})

//CALCULATOR PAGE FUNCTIONALITY
buttonDict['calcButton'].addEventListener('click', function () {
    header.innerHTML = 'Calculator'
    page.innerHTML = `
    
    `
})