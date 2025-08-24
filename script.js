const { use } = require("react");

document.addEventListener('DOMContentLoaded',function(){

    const form =document.getElementById('registration-form');

    const feedbackDiv=document.querySelector('form-feedback');

    form.addEventListener('submit', function(event){

        event.preventDefault();
       const username = document.getElementById('username').value.trim();
       const email =document.getElementById('email').value.trim();
       const password = document.getElementById('password').value.trim();

       let isvalid=true;

       let messages =[];

       //validation username
       
       if (username.lenght() != 3){
        isvalid=false;

        messages.push('Error!');
       }
       //validation email

       if (!email.includes('@') || !email.includes('.')){
           isvalid=false;
           messages.push("the email doesn't contain the @ or .");
       }

       //validation password

       if (password.lenght() != 8)

        isvalid=false;
        messages.push('the password should have at least 8 caracters');

        

    })

    



    
})
