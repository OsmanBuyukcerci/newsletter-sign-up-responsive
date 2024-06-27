let input_email;
let wrapper_success = document.getElementById("wrapper-success");

document.addEventListener("DOMContentLoaded", () => {
  let screen_width = screen.width;

  let mobile_img = document.getElementById("mobile-img");
  let desktop_img = document.getElementById("desktop-img");

  if (screen_width && mobile_img && desktop_img && screen_width < 768) {
    desktop_img.style.display = "none";
  } else {
    mobile_img.style.display = "none";
  }
});

window.addEventListener("resize", () => {
  let screen_width = screen.width;

  let mobile_img = document.getElementById("mobile-img");
  let desktop_img = document.getElementById("desktop-img");

  if (screen_width && mobile_img && desktop_img && screen_width < 768) {
    mobile_img.style.display = "block";
    desktop_img.style.display = "none";
  } else {
    desktop_img.style.display = "block";
    mobile_img.style.display = "none";
  }
});

document.getElementById("email").addEventListener("input", (e) => {
  input_email = e.target.value;
});

document.getElementById("form-email").addEventListener("submit", (event) => {
  if (input_email != undefined) {
    event.preventDefault();
    wrapper_success.style.visibility = "visible";
    if (wrapper_success) {
      let span_email = document.getElementById("span-email");
      span_email.innerText = input_email;
    }
  }
});

document.getElementById("btn-dismiss").addEventListener("click", () => {
  if (wrapper_success) {
    wrapper_success.style.visibility = "hidden";
  }
});
