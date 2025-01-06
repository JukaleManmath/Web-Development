const containerEl = document.querySelector(".container");

const careers = ["Web Developer" , " YouTuber" , "Freelancer","Instructor"];
let careerIndex = 0;
let characterIndex = 0;
function updateText(){
    characterIndex++;
    containerEl.innerHTML = `<h1> I am ${careers[careerIndex].slice(0,characterIndex)} </h1>`;
    
    if(characterIndex == careers[careerIndex].length){
        careerIndex++;
        characterIndex = 0;
    }
    if(careerIndex == careers.length){
        careerIndex = 0;
    }
    setTimeout(updateText,400);
}

updateText();