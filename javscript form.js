const form =document.querySelector('.form');
const userName =document.querySelector('#name');
const email =document.querySelector('#email');
const password =document.querySelector('#password')
const password2 =document.querySelector('#password2');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
})
function checkInputs(e) {
	// trim to remove the whitespaces
    const usernameValue = userName.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

    
	if(usernameValue === '') {
		setErrorFor(userName, 'Username cannot be blank');
	}else if(!(isUsername(usernameValue))){
		setErrorFor(userName,"Username must contain letters only & be between 4 & 8 characters");
	} else {
        setSuccessFor(userName);
    }
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!(isEmail(emailValue))) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');

    }else if(!(isPassword(passwordValue))){  
		setErrorFor(password,'Password must be atleast 8 characters,one letter and  atleast one number'); 
	}else{
		setSuccessFor(password);


	}	
	if(password2Value === '') {
		setErrorFor(password2, 'Password confirmation cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords do not match');
	} else{
		setSuccessFor(password2);
	}
}	



function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const span = formControl.querySelector('span');
	formControl.className = 'input-group error';
	span.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'input-group success';
    const span = formControl.querySelector('span');
    span.innerText='';

}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isPassword(password){
	return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
}
function isUsername(userName){
	return /^[a-zA-Z]{4,8}$/.test(userName);
}
	
        


