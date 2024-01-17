let nameError = document.querySelector("#name__error");
let phoneError = document.querySelector("#phone__error");
let emailError = document.querySelector("#email__error");
let messageError = document.querySelector("#message__error");
let submitError = document.querySelector("#submit__error");

const validateName = () => {
  let name = document.querySelector("#contact__name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    nameError.style.color = "red";
    return false;
  }

  // if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
  //     nameError.innerHTML = "Write full name";
  //     return false;
  // }

  nameError.innerHTML = `valid`;
  nameError.style.color = "green";
  return true;
};

const validatePhone = () => {
  let phone = document.querySelector("#contact__phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = `Phone no is required`;
    phoneError.style.color = "red";
    return false;
  }

  if (phone.length !== 10) {
    phoneError.innerHTML = `Phone no should be 10 digits`;
    phoneError.style.color = "red";
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only digits please";
    phoneError.style.color = "red";
    return false;
  }

  phoneError.innerHTML = `valid`;
  phoneError.style.color = "green";
  return true;
};

const validateEmail = () => {
  let email = document.querySelector("#contact__email").value;

  if (email.length == 0) {
    emailError.innerHTML = `Email is required`;
    emailError.style.color = "red";
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email Invalid";
    emailError.style.color = "red";
    return false;
  }

  emailError.innerHTML = `valid`;
  emailError.style.color = "green";
  return true;
};

const validateMessage = () => {
  let message = document.querySelector("#contact__message").value;
  let required = 30;
  let left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + " more characters required";
    messageError.style.color = "red";
    return false;
  }

  messageError.innerHTML = `valid`;
  messageError.style.color = "green";
  return true;
};

const validateForm = () => {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "flex";
    submitError.innerHTML = "Please fill the required field";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
};
