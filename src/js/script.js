document.getElementById("submit-btn").addEventListener("click", function () {
  const email = document.getElementById("input-email");
  const password = document.getElementById("input-password");
  if (email.value === "" || password.value === "") {
    alert("Please fill email and password");
  } else if (
    email.value === "aabannayeem4358@gmail.com" &&
    password.value === "1234"
  ) {
    window.location.href = "home.html";
  } else {
    alert("Enter a valid email address and password");
  }
});
