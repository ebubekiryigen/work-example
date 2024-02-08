window.addEventListener("DOMContentLoaded",event => {
    const navbar = document.querySelector("#baseNavbar")
    const navbarMobile = () => {
        if(!navbar) {
            return
        }
        if(window.scrollY === 0) {
            navbar.classList.remove("bg-black")
            navbar.classList.remove("navbar-bot")
        } else {
            navbar.classList.add("bg-black")
            navbar.classList.add("navbar-bot")
        }
    }
    navbarMobile()
    document.addEventListener("scroll", navbarMobile)
    if(navbar) {
        new bootstrap.ScrollSpy(document.body,{
            target:"#baseNavbar",
            offset:74
        })
    }
});

(function () {
    'use strict'
    const name    = document.querySelector('#name')
    const title   = document.querySelector('#title')
    const content = document.querySelector('#content')
    const email   = document.querySelector('#email')
    const button  = document.querySelector('#formButton')
    const form    = document.querySelector('#formC')
    const current = document.querySelector('#current-character')
    const errorN  = document.querySelector('#errN')
    const errorE  = document.querySelector('#errE')
    const errorC  = document.querySelector('#errC')
    const errorT  = document.querySelector('#errT')

    if(name.value.length == 0 && title.value.length == 0 && content.value.length == 0 && email.value.length == 0) {
        button.disabled = true
    }
    const NumericPattern = /^([^0-9]*)$/;
    const EmailPattern = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;

    name.addEventListener("blur", controlName)
    title.addEventListener("blur", conrtolTitle)
    content.addEventListener("blur", conrtolContent)
    email.addEventListener("blur", conrtolEmail)

    function controlName(){
        if(name.value.length == 0) {
            name.classList.remove("is-valid")
            name.classList.add("is-invalid")
            errorN.innerHTML = "isim alanı boş olamaz"
            return false
        } else if(name.value.length < 3) {
            name.classList.remove("is-valid")
            name.classList.add("is-invalid")
            errorN.innerHTML = "isim alanı minimum 3 karakter olmalıdır"
            return false
        }else if(name.value.length > 30) {
            name.classList.remove("is-valid")
            name.classList.add("is-invalid")
            errorN.innerHTML = "isim alanı maximum 30 karakter olmalıdır"
            return false
        }
        else if(!NumericPattern.test(name.value)) {
            name.classList.remove("is-valid")
            name.classList.add("is-invalid")
            errorN.innerHTML = "isim alanında sayı olamaz"
            return false
        }  else {
            name.classList.add("is-valid")
            name.classList.remove("is-invalid")
            return true
        }
    }
    function conrtolTitle(){
        if(title.value.length == 0) {
            title.classList.remove("is-valid")
            title.classList.add("is-invalid")
            errorT.innerHTML = "Başlık alanı boş olamaz"
            return false
        } else if(title.value.length < 5) {
            title.classList.remove("is-valid")
            title.classList.add("is-invalid")
            errorT.innerHTML = "Başlık alanı minimum 5 karakter olmalıdır"
            return false
        }else if(title.value.length > 60) {
            title.classList.remove("is-valid")
            title.classList.add("is-invalid")
            errorT.innerHTML = "Başlık alanı maximum 60 karakter olmalıdır"
            return false
        }
        else {
            title.classList.add("is-valid")
            title.classList.remove("is-invalid")
            return true
        }
    }
    function conrtolContent(){

        if(content.value.length == 0) {
            content.classList.remove("is-valid")
            content.classList.add("is-invalid")
            errorC.innerHTML = "Mesaj alanı boş olamaz"
            return false
        } else if(content.value.length < 30) {
            content.classList.remove("is-valid")
            content.classList.add("is-invalid")
            errorC.innerHTML = "Mesaj alanı minimum 30 karakter olmalıdır"
            return false
        }else if(content.value.length > 300) {
            content.classList.remove("is-valid")
            content.classList.add("is-invalid")
            errorC.innerHTML = "mesaj alanı maximum 300 karakter olmalıdır"
            return false
        }
        else {
            content.classList.add("is-valid")
            content.classList.remove("is-invalid")
            return true
        }
        
    }
    function conrtolEmail(){

        if(email.value.length == 0) {
            email.classList.remove("is-valid")
            email.classList.add("is-invalid")
            errorE.innerHTML = "Email alanı boş olamaz"
            return false
        } else if(email.value.length < 7) {
            email.classList.remove("is-valid")
            email.classList.add("is-invalid")
            errorE.innerHTML = "Email alanı minimum 7 karakter olmalıdır"
            return false
        }else if(email.value.length > 100) {
            email.classList.remove("is-valid")
            email.classList.add("is-invalid")
            errorE.innerHTML = "Email alanı maximum 100 karakter olmalıdır"
            return false
        }else if(!EmailPattern.test(email.value)) {
            email.classList.remove("is-valid")
            email.classList.add("is-invalid")
            errorE.innerHTML = "Lütfen Geçerli Bir Email Giriniz"
            return false
        }
        else {
            email.classList.add("is-valid")
            email.classList.remove("is-invalid")
            return true
        }

    }

    window.addEventListener("keyup",function(){
    if(name.value.length > 3 && title.value.length > 10 && content.value.length > 30 && email.value.length > 10) {
        button.disabled = false
    } else {
        button.disabled = true
    }
    })
    content.addEventListener("keyup", function(){
        current.textContent = content.value.length
    })

    form.addEventListener('submit', function(e){
        if(!form.checkValidity() || !controlName || !conrtolContent || !conrtolEmail || !conrtolTitle) {
            e.preventDefault()
            e.stopPropagation()
        }
    },false)



})()