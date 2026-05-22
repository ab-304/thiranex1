function checkPassword() {

    const password =
        document.getElementById("password").value;

    const strengthBar =
        document.getElementById("strengthBar");

    const strengthText =
        document.getElementById("strengthText");

    let strength = 0;


    // CONDITIONS

    const hasLength = password.length >= 8;

    const hasUppercase = /[A-Z]/.test(password);

    const hasLowercase = /[a-z]/.test(password);

    const hasNumber = /[0-9]/.test(password);

    const hasSpecial = /[!@#$%^&*]/.test(password);


    // UPDATE REQUIREMENTS

    updateRequirement("length", hasLength);

    updateRequirement("uppercase", hasUppercase);

    updateRequirement("lowercase", hasLowercase);

    updateRequirement("number", hasNumber);

    updateRequirement("special", hasSpecial);


    // SCORE

    if (hasLength) strength++;

    if (hasUppercase) strength++;

    if (hasLowercase) strength++;

    if (hasNumber) strength++;

    if (hasSpecial) strength++;


    // STRENGTH RESULT

    if (strength <= 2) {

        strengthBar.style.width = "33%";

        strengthBar.style.background = "#ff4d6d";

        strengthText.innerText =
            "Strength: Weak 🔴";
    }

    else if (strength <= 4) {

        strengthBar.style.width = "66%";

        strengthBar.style.background = "#ffd166";

        strengthText.innerText =
            "Strength: Medium 🟡";
    }

    else {

        strengthBar.style.width = "100%";

        strengthBar.style.background = "#06d6a0";

        strengthText.innerText =
            "Strength: Strong 🟢";
    }


    // SUGGESTIONS

    const suggestion =
        document.getElementById("suggestion");

    if (strength <= 2) {

        suggestion.innerText =
            "Use uppercase letters, numbers, and symbols to improve security.";
    }

    else if (strength <= 4) {

        suggestion.innerText =
            "Good password. Add more unique symbols for stronger protection.";
    }

    else {

        suggestion.innerText =
            "Excellent! Your password is strong and secure.";
    }

}



function updateRequirement(id, valid) {

    const element =
        document.getElementById(id);

    if (valid) {

        element.innerHTML =
            "✅ " + element.innerText.substring(2);
    }

    else {

        element.innerHTML =
            "❌ " + element.innerText.substring(2);
    }

}



function togglePassword() {

    const passwordInput =
        document.getElementById("password");

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
    }

    else {

        passwordInput.type = "password";
    }

}