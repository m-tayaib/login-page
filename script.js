const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signInBtn = document.querySelector(".signInBtn");

let emailTexT = "";
let passwordTexT = "";

email.addEventListener("input", (e) => {
  emailTexT = e.target.value;
});

password.addEventListener("input", (e) => {
  passwordTexT = e.target.value;
});

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (emailTexT !== "" && passwordTexT !== "") {
    console.table([emailTexT, passwordTexT]);
    email.value = "";
    password.value = "";
    return alert("Login Successfully!")
  } else {
    return alert("Please fill all the fields")
  }
});