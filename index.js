let captcha = new Array();
const generateBtn = document.querySelector("#generateBtn");
const submitBtn = document.querySelector("#submitBtn");
const fillCaptcha = document.querySelector("#fillCaptcha");

generateBtn.addEventListener("click", createCaptcha);

function createCaptcha() {
    const activeCaptcha = document.querySelector("#captcha");
    for (q = 0; q < 6; q++) {
    if (q % 2 == 0) {
      captcha[q] = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    } else {
      captcha[q] = Math.floor(Math.random() * 10 + 0);
    }
  }
  let finalCaptcha = captcha.join("");
  activeCaptcha.innerHTML = `${finalCaptcha}`;
}

fillCaptcha.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        validateCaptcha();
    }
})

submitBtn.addEventListener("click", validateCaptcha);

function validateCaptcha() {
    const validationMessage = document.querySelector("#validationMessage");
    let fillcaptcha = fillCaptcha.value;
    let validateCaptcha = 0;
    for (let z = 0; z < 6; z++) {
        if (fillcaptcha.charAt(z) != captcha[z]) {
        validateCaptcha++;
    }
    }
    if (captcha == "") {
        validationMessage.innerHTML = "Generate captcha";
        validationMessage.classList.add("green");
    }
    else if (fillcaptcha == "") {
        validationMessage.innerHTML = "Enter captcha";
        validationMessage.classList.add("red");
    }
    else if (validateCaptcha > 0 || fillcaptcha.length > 6) {
        validationMessage.innerHTML = "Entered captcha is incorrect";
        validationMessage.classList.add("red");
    }
    else {
        validationMessage.innerHTML = "Entered captcha is correct";
        validationMessage.classList.remove("red");
        validationMessage.classList.add("green");
    }
}