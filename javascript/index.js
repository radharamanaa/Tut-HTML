
document.forms[0].addEventListener("submit", validateForm);

document.querySelector("button").addEventListener("click", validateForm);

function usernameCh(inputElement) {
    console.log(inputElement.value);
}

let obj = {count:1, setCount:function func(){this.count++}};

let anotherVar = obj.setCount;
function some(){
    anotherVar();
}
let clearing = setInterval(some,1000); 
setTimeout(()=> clearTimeout(clearing),10000);


function validateForm(event) {

    let usernameField = document.getElementById("username");
    let passwordField = document.getElementById("passw");
    if (!usernameField.value && !passwordField.value) {//"" false
        event.preventDefault();
        alert("Username or password cannot be empty");
        return;
    }
    if (usernameField.value.length < 4 || passwordField.value.length < 4) {
        event.preventDefault();
        alert("Username or password cannot be less than 4 characters");
    }

}