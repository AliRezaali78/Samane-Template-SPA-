let rootFile = "";
let root = "http://" + window.location.host + "/" + rootFile;
$(function() {
  $("#logout").click(function(event) {
    logout(event);
  });

});

function checkIfLoggedIn() {
  if (!cookies.get("token")) {
    cookies.del(true);
    redirectTo(root + "/index.html");
  }
  CheckValidityOfToken();
}
function logout(e) {
  e.preventDefault();
  cookies.del(true);
  window.location.replace(root + "/index.html");
}
function redirectTo(url) {
  window.location.replace(url);
}
