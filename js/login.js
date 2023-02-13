document.getElementById('btn-submitt').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    if(email==='sabbir386.sa@gmail.com' && password==='secret'){
        window.location.href='bank.html';
        console.log('valid')
    }
    else{
        alert('Please Provide Right User Name and Password');
    }


})