const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
<<<<<<< HEAD
copyright.innerHTML = 'Copyright' +' &copy; ' +thisYear+ ' Gilbert Pascascio' ;
// Append copyright paragraph <p> to footer
footer.appendChild(copyright);
=======
copyright.innerHTML = 'Gilbert Pascascio, ' + thisYear;

copyright.innerHTML = 'Copyright' +' &copy; ' +thisYear+ ' Gilbert Pascascio' ;
// Append copyright paragraph <p> to footer
footer.appendChild(copyright);

>>>>>>> origin/lesson-4-3
 // Define an array of skills
let skills = ['JavaScript', 'HTML', 'CSS'];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');
<<<<<<< HEAD

/*Iterate over each skill in array
Create a list item for each skill and store it in a variable
Set the text content of the list item to the current skill
*/
for (let i = 0; i < skills.length; i++){
  let skill = document.createElement('li');
  skill.textContent = skills[i];
  
=======

/*Iterate over each skill in array
Create a list item for each skill and store it in a variable
Set the text content of the list item to the current skill
*/
for (let i = 0; i < skills.length; i++){
let skill = document.createElement('li');
skill.innerHTML = skills[i];
skillsList.appendChild(skill);
  

>>>>>>> origin/lesson-4-3
  // Append skill to the skillslist
  skillsList.appendChild(skill);
}  
// Select the form with the name attribute 'leave_message'
const messageForm = document.querySelector('form[name="leave_message"]');

/* Add a submit event listener to the form
Prevent the default for submission behavior
Create three variable for form fields and retrieve the value
Log the values to the console log*/
messageForm.addEventListener('submit', function(event){
<<<<<<< HEAD
   
=======

>>>>>>> origin/lesson-4-3
    event.preventDefault();
    const usersName = event.target.usersName.value;
    const email = event.target.email.value;
    const message = event.target.usersMessage.value;
    console.log('Name', usersName);
    console.log('Email', email);
    console.log('Message', message);
<<<<<<< HEAD
    
  // Select the message section and its list and store it in variables
    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul')
    
=======

  // Select the message section and its list and store it in variables
    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul')

>>>>>>> origin/lesson-4-3
    // Create a new list item
    const newMessage = document.createElement('li');
    // Set the innerHtml of newMessage to display usersName, usersMessage and an email link
    newMessage.innerHTML = '<a href="mailto:userEmail@example.com"> '+
        event.target.usersName.value + '</a>' + 
        '<br>' +
        '<span>' + event.target.usersMessage.value + '</span>' + '<br>';
<<<<<<< HEAD
       
=======

>>>>>>> origin/lesson-4-3
       // Create and append the remove button
     const removeButton = document.createElement('button');
        removeButton.innerText = 'remove';
        removeButton.type = 'button';
        removeButton.style.backgroundColor = 'orange';

        removeButton.addEventListener('click', function() {
                   const entry = removeButton.parentNode;
                   entry.remove();
<<<<<<< HEAD
                
=======

>>>>>>> origin/lesson-4-3
});
// append removeButton to newMessage
newMessage.appendChild(removeButton);

// Append the newMessage to the messageList
messageList.appendChild(newMessage);

// Reset the form after submission
<<<<<<< HEAD
messageForm.reset();

}); 
 

=======
messageForm.requestFullscreen();


}); 
 
>>>>>>> origin/lesson-4-3
