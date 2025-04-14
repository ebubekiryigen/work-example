const form         = document.getElementById('form-valid');
const username     = document.getElementById('username');
const email        = document.getElementById('email');
const phone        = document.getElementById('phone');
const password     = document.getElementById('password');
const re_password  = document.getElementById('re-password');
function validateEmail(input) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if(re.test(input.value)) {
        success(input)
      } else {
        error(input, 'email is not valid')
      }
  };
function validatePhone(input) {
      const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
      if(re.test(input.value)) {
        success(input)
      } else {
        error(input, 'phone is not valid')
      }
  };
function success(input) {
    input.className = 'success';
    const p = input.nextElementSibling;
    p.className = 'none';
    const i = p.nextElementSibling;
    i.className = "fa-solid fa-circle-check icon green";
}
function error(input,message) {
    input.className = 'danger';
    const p = input.nextElementSibling;
    p.innerText = message;
    p.className = "red";
    const i = p.nextElementSibling;
    i.className = "fa-solid fa-circle-exclamation icon red";
}
function checkValid(inputs) {
    inputs.forEach(function(input){
        if(input.value === ''){
            error(input,`${input.id} is required`)
        } else {
            success(input)
        }
    });
}
function lengthValid(input,min,max) {
   if(input.value.length < min) {
     error(input,`${input.id} must be at least ${min} characters`)
   } else if (input.value.length > max) {
    error(input,`${input.id} must be a maximum of ${max} characters`)
   } else {
    success(input)
   }
}
function rePassword(input1,input2) {
    if(input1.value !== input2.value) {
      error(input2,'your passwords do not match')
    }
 }
form.addEventListener('submit', function(e){
    e.preventDefault();
    checkValid([username,email,phone,password,re_password])
    validateEmail(email)
    lengthValid(username,7,20)
    lengthValid(password,7,20)
    rePassword(password,re_password)
    validatePhone(phone)
})