// Scrolling animation to about from navbar
document.getElementById("toAbout").addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth",
  });
});
// Scrolling animation to experience from navbar
document.getElementById("toExp").addEventListener("click", function () {
  document.getElementById("experience").scrollIntoView({
    behavior: "smooth",
  });
});
// Scrolling animation to portfolio from navbar
document.getElementById("toPortfolio").addEventListener("click", function () {
  document.getElementById("portfolio").scrollIntoView({
    behavior: "smooth",
  });
});
// Scrolling animation to links from navbar
document.getElementById("toLinks").addEventListener("click", function () {
  document.getElementById("links").scrollIntoView({
    behavior: "smooth",
  });
});
// Scrolling animaiton to contact from navbar
document.getElementById("toContact").addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  });
});

function form() {
  let name = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("comment").value;
  let error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  let text;
  if (name.length < 3 || name == null) {
    text = "Please Enter your Name again";
    error_message.innerHTML = text;
    return false;
  }
  
  if (email.indexOf("@") == -1 || email.length < 6 || email == null) {
    text = "Please Enter the correct Email";
    error_message.innerHTML = text;
    return false;
  }
  if (message.length <= 20 || message == null) {
    text = "Please Enter More Than 20 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("the details have been send. thank you!");
  return true;
}
// Alert when submitting form
// document.getElementById("MessageSubmit").addEventListener("click", () => {
//   alert("Form submitted, thank you!");
// });

// running span 
var textWrapper = document.querySelector(".title");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
anime
  .timeline({
    loop: true,
  })
  .add({
    targets: ".title .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i + 1),
  })
  .add({
    targets: ".title",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });