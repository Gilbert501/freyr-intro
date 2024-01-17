let today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML= 'Copyright' +' &copy; ' +thisYear+ ' Gilbert Pascascio' ;
// Append copyright paragraph <p> to footer
footer.appendChild(copyright);

function addTextToAboutSection() {
  // Get the "About" section by its ID
  let aboutSection = document.getElementById("about");

  // Create a new paragraph element
  let newParagraph = document.createElement("p");

  // Set the text content for the new paragraph
  newParagraph.textContent = "Hello! I'm Gilbert and I live in New York, I'm currently enrolled at Code the Dream School, immersing myself in the world of programming and web development. I'm eager to master the languages that drive digital innovation. Coming from a law enforcement background, I find the field of cybersecurity particularly interesting. I am excited about the prospect of contributing my skills to the tech industry. Let's code the future together!";

  // Append the new paragraph to the "About" section
  aboutSection.appendChild(newParagraph);
}

// Call the function to add text when the page loads (you can call it based on some event)
window.onload = function() {
  addTextToAboutSection();
};


// Define an array of experience
let experience = ["While I have no formal experience in web development, I am eager to apply the skills and knowledge gained through coursework. I have dedicated time to my personal project, which was creating a responsive webpage and experimenting with various front-end technologies. These hands-on experiences have allowed me to develop a solid foundation in HTML, CSS, and JavaScript, and I am enthusiastic about contributing my skills to dynamic and collaborative teams."];
const experienceSection = document.querySelector('#experience');
const experienceList = experienceSection.querySelector('ul');

/*Iterate over each experience in array
Create a list item for each experience and store it in a variable
Set the text content of the list item to the current experience
*/
for (let i = 0; i < experience.length; i++){
let experiences = document.createElement('li');
experiences.innerText = experience[i];

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
skill.innerText = skills[i];

  // Append skill to the skillslist
  skillsList.appendChild(skill);
}  
const messageSection = document.getElementById('messages');
messageSection.style.display = 'none';
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
   
    messageSection.style.display = 'block';
    const messageList = messageSection.querySelector('.message-list');

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
     
        removeButton.addEventListener('click', function() {
                   const entry = removeButton.parentNode; 
                   entry.remove();

// Check if there are no more messages in the messageList
       if (messageList.children.length === 0) {
// Remove the "Messages" heading
       messageSection.style.display = 'none';
}
 });

 // append removeButton to newMessage
newMessage.appendChild(removeButton);

// Append newMessage to messageList
messageList.appendChild(newMessage);

// Reset the form after submission
messageForm.reset();
}); 

/* Make a GET request using the fetch API
- DOM selection for project section and unordered list and store then in separate variables
- Iterate over the repos, create a new list item and atore in a variable
- Set the inner text of the list item to current repo's name.
- Set the inner HTML to the current repo's name */
fetch('https://api.github.com/users/Gilbert501/repos')
.then(response => {
  if(!response.ok){
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
    return response.json();
}) 
.then(repositories => {
  const projectSection = document.getElementById('projects');
  const projectList = projectSection.querySelector('ul')
  for (let i=0; i < repositories.length; i++) {
    const project = document.createElement('li');
    if (repositories[i].name.includes('intro')){
       project.innerHTML = `<a class="project-links" href ="${repositories[i].html_url}"> ${repositories[i].name}</a>`
    //Append the project to project list
    projectList.appendChild(project);
  }
}
})
.catch(error => {
  console.error("Error fetching repo:", error);
});
 