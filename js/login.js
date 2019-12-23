$(function() {
  $("#loginbtn").on("click", function(event) {
    event.preventDefault();
    $("#wrong-userpass").hide();

    //validation
    let user = $("#user").val();
    let pass = $("#pass").val();
    let isValid = validateForm(user, pass);

    if (isValid) {
      login(user, pass);
    }
  });
});

function validateForm(user, pass) {
  if (user.trim() === "" || pass.trim() === "") {
    $("#empty-input").show();
    return false;
  } else {
    $("#empty-input").hide();
    return true;
  }
}

function login(username, password) {
  if (!cookies.test()) {
    $("#cookie-support").show();
    return;
  } else {
    $("#cookie-support").hide();
  }

  if (username == 'admin' && password == 'admin') {
      $('#wrong-userpass').hide();
      window.location.replace("main.html#/home");
  }
  else {
      $('#wrong-userpass').show();
      return;
  }
}


