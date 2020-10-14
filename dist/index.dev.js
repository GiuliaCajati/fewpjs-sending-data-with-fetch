"use strict";

// Add your code here
var submitData = function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  }).then(function (res) {
    return res.json();
  }).then(function (object) {
    document.body.innerHTML = object["id"];
  })["catch"](function (error) {
    document.body.innerHTML = error.message;
  });
};