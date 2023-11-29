'use strict'

let newUser = {
    userFName: "",
    userLName: "",
    userEmail: "",
    userPhone: "",
    userPref: "",
    getUser() {
        return "<strong>User Name:</strong> " + this.userFName + "<br>"
    }
}

function validateForm(event) {

    event.preventDefault();

    let fName = document.getElementById("fName");
    let lName = document.getElementById("lName");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let fieldset = document.getElementById("fieldset");
    let prefPphone = document.getElementById("prefPhone");
    let prefEmail = document.getElementById("prefEmail");
}

let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,3})$/;
let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
