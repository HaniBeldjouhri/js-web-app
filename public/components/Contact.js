export default function Contact() {
   let App = document.createElement('div');
   let thediv = document.createElement('div');
   App.className = "App";

   let form = document.createElement('form');
   form.method = "post";
   let nameLabel = document.createElement('label'); 
   nameLabel.textContent = "Name:";
   nameLabel.setAttribute('for', 'name');

   let nameInput = document.createElement('input');
   nameInput.type = "text";
   nameInput.id = "name";
   nameInput.name = "name";
   nameInput.required = true;
   
   let emailLabel = document.createElement('label');
   emailLabel.textContent = "Email:";
   emailLabel.setAttribute('for', 'email');
   
   let emailInput = document.createElement('input');
   emailInput.type = "email";
   emailInput.id = "email";
   emailInput.name = "email"
   emailInput.required = true;

   let submitButton = document.createElement('button');
   submitButton.type = "submit";
   submitButton.textContent = "Send";
   submitButton.className = "btn-2" 
   
   form.appendChild(nameLabel);
   form.appendChild(nameInput);
   form.appendChild(emailLabel);
   form.appendChild(emailInput);
   form.appendChild(submitButton);

   thediv.style = "margin: 20px auto; padding: 20px;box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;"
   thediv.appendChild(form);
   App.appendChild(thediv)
   document.body.appendChild(App);


}