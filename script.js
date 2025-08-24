const { use } = require("react");

document.addEventListener('DOMContentLoaded',function(){

    const form =document.getElementById('registration-form');

    const feedbackDiv=document.querySelector('form-feedback');

    form.addEventListener('submit', function(event){

        event.preventDefault();
       const username = document.getElementById('username').value.trim();
       const email =document.getElementById('email').value.trim();
       const password = document.getElementById('password').value.trim();

       let isValid=true;

       let messages =[];

       
       if (username.lenght < 3){
        isValid=false;

        messages.push('Error!');
       }

       if (!email.includes('@') || !email.includes('.')){
           isValid=false;
           messages.push("the email doesn't contain the @ or .");
       }

       if (password.lenght < 8){

        isValid=false;
        messages.push('the password should have at least 8 caracters');

        feedbackDiv.style.display ='block';}

        if (isValid){
            feedbackDiv.textContent('Registration successful!');
            feedbackDiv.style.color ='#28a745';
        }
        if(!isValid){
            feedbackDiv.innerHTML=messages.join('<br>');
            feedbackDiv.style.color ='#dc3545'
        }
    })

    



    
})
