"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    
    const req = {
        id: id.value,
        psword: psword.value,
    };
    fetch("/login", {
        mothod: "POST",
        headeers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });
}
