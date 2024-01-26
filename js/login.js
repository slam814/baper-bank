document.getElementById('login-btn').addEventListener('click', function(){
    const emailElement = document.getElementById('user-email');
    const email = emailElement.value;
  
    const passwordElement = document.getElementById('user-password');
    const password = passwordElement.value;
    

    if(email === 'abc@gmail.com' && password === '1234'){
        window.location.href = 'bank.html'
    }else if(email === '' && password === ''){
        const invaletUser =  document.getElementById('invalet');
        invaletUser.innerText = ' Please Enter Email or Password';
    }else{
      const invaletUser =  document.getElementById('invalet');
     invaletUser.innerText = 'Incorrect your Email or Password, Please correct Email or Password';
    }
})