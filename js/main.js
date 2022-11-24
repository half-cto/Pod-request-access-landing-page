
const email = document.getElementById('email-input');
const submit = document.body.getElementsByClassName('button')[0];
const errorMsg = document.body.getElementsByClassName('error-msg')[0];
const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


console.log(errorMsg);

let validateEmail = () => {
    let inputEmail = email.value;
    errorMsg.innerHTML = '';
    errorMsg.style.color = '#FB3E3E'
    console.log(email.value);
    if (inputEmail === '') {
        errorMsg.innerHTML = 'Oops! Please add your email';
    }else if (!emailRegEx.test(inputEmail)){
        errorMsg.innerHTML = 'Oops! Please check your email';
    } else {
        errorMsg.style.color = '#54E6AF'
        errorMsg.innerHTML = 'Thank You!';
    }
    email.style.backgroundColor = `rgb(${rndColor()}, ${rndColor()},${rndColor()})`;
    
}

let rndColor = () => {
    return Math.floor(Math.random() * 256)
}

submit.onclick = validateEmail;

// Your users should be able to:

// - View the optimal layout depending on their device's screen size
// - See hover states for interactive elements
// - Receive an error message when the form is submitted if:
//   - The `Email address` field is empty should show "Oops! Please add your email"
//   - The email is not formatted correctly should show "Oops! Please check your email"
