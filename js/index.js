let today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = 'Copyright' +' &copy; ' +thisYear+ ' Gilbert Pascascio' ;
// Append copyright paragraph <p> to footer
footer.appendChild(copyright);

function addTextToAboutSection() {
  // Get the "About" section by its ID
  let aboutSection = document.getElementById("about");

  // Create a new paragraph element
  let newParagraph = document.createElement("p");

  // Set the text content for the new paragraph
  newParagraph.textContent = "I am currently enrolled at Code The Dream School.";

  // Append the new paragraph to the "About" section
  aboutSection.appendChild(newParagraph);
}

// Call the function to add text when the page loads (you can call it based on some event)
window.onload = function() {
  addTextToAboutSection();
};


// Define an array of experience
let experience = ['Item 1', 'Item 2', 'Item 3'];
const experienceSection = document.querySelector('#experience');
const experienceList = experienceSection.querySelector('ul');

/*Iterate over each experience in array
Create a list item for each experience and store it in a variable
Set the text content of the list item to the current experience
*/
for (let i = 0; i < experience.length; i++){
let experiences = document.createElement('li');
experiences.innerHTML = experience[i];

  // Append experiences to the experiencelist
  experienceList.appendChild(experiences);
}  


 // Define an array of skills
let skills = ['JavaScript', 'HTML', 'CSS'];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

/*Iterate over each skill in array
Create a list item for each skill and store it in a variable
Set the text content of the list item to the current skill
*/
for (let i = 0; i < skills.length; i++){
let skill = document.createElement('li');
skill.innerHTML = skills[i];

  // Append skill to the skillslist
  skillsList.appendChild(skill);
}  

let messageForm = document.querySelector('form[name="leave_message"]');
 /*Prevent the default for submission behavior
Create three variable for form fields and retrieve the value
Log the values to the console log*/
messageForm.addEventListener('submit', function(event){
    event.preventDefault();
    const usersName = event.target.usersName.value;
    const email = event.target.email.value;
    const message = event.target.usersMessage.value;
    console.log('Name', usersName);
    console.log('Email', email);
    console.log('Message', message);


  // Select the message section and its list and store it in variables
    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul');

    // Create a new list item
    const newMessage = document.createElement('li');
    // Set the innerHtml of newMessage to display usersName, usersMessage and an email link
    newMessage.innerHTML = '<a href="mailto:userEmail@example.com"> '+
        event.target.usersName.value + '</a>' + 
        '<br>' +
        '<span>' + event.target.usersMessage.value + '</span>' + '<br>';

       // Create and append the remove button
     const removeButton = document.createElement('button');
        removeButton.innerText = 'remove';
     messageForm.addEventListener('submit', function(){
        removeButton.addEventListener('click', function() {
                   const entry = removeButton.parentNode;
                   removeButton.innerText= "remove";
});
// append removeButton to newMessage
newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);

// Reset the form after submission
messageForm.reset();

}); 

messageForm.requestFullscreen();


}); 
 
 
