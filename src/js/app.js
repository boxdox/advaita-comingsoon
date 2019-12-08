// Hack for chrome navigation bar issue
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

// Loading Particle JS only after the page has completely loaded.
document.addEventListener(
  "DOMContentLoaded",
  function() {
    particlesJS.load("particles", "particles.json");
  },
  false
);

// Hide the preloading spinner till page becomes interactive ie. JS has loaded completely
document.onreadystatechange = function() {
  let state = document.readyState;
  if (state == "interactive") {
    document.querySelector("#container").style.visibility = "hidden";
  } else if (state == "complete") {
    setTimeout(function() {
      document.querySelector("#preloader").style.visibility = "hidden";
      document.querySelector("#container").style.visibility = "visible";
    }, 1000);
  }
};

// Handle Submit
document
  .querySelector("#submit-btn")
  .addEventListener("click", function(event) {
    event.preventDefault(); // Prevent abrupt page reloads

    // Reply Text
    let responseMessage = "";

    // Getting and verifying the input
    let email = document.getElementsByTagName("input")[0].value;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(email)) {
      // Calling the API
      fetch("https://pr4k.pythonanywhere.com/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email })
      })
        .then(res => {
          if (res.status != 200) {
            responseMessage = "Some error has occured, please try later.";
          } else {
            responseMessage = "Thank you for submitting!";
          }
        })
        .then(() => {
          // Creating a success message
          let container = document.createElement("div");
          container.setAttribute("class", "modal");

          let success = document.createElement("div");
          success.innerText = responseMessage;
          success.setAttribute("class", "modal-content");

          let okButton = document.createElement("div");
          okButton.setAttribute("class", "modal-close-btn");
          okButton.innerText = "Close";

          success.appendChild(okButton);
          container.appendChild(success);
          document.body.appendChild(container);

          okButton.addEventListener("click", function() {
            document.body.removeChild(container);
            document.getElementsByTagName("input")[0].value = "";
          });
        });
    } else {
      alert("Not a valid email :(");
    }
  });
