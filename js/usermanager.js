let rootFile = "";
let root = 'http://' + window.location.host + '/' + rootFile;
$(function () {
    checkIfLoggedIn();
    setTexts();
    // $(window).on("beforeunload", function() { 
    //     checkIfLoggedIn(); 
    // })
    $('#logout').click(function (event) {
        logout(event);
    });
});

function checkIfLoggedIn() {
    // Call server for checking
    if (!cookies.get('login')) {
        cookies.del(true);
        window.location.replace(root + '/index.html');
    }
}

function setTexts() {
    let user = cookies.get('user');
    $('#username').text(user.name + " " + user.fname);
    $('#role').text(user.role);
}


function logout(e) {
    e.preventDefault();
    cookies.del(true);
    window.location.replace(root + '/index.html');
}

function getBaseUrl() {
    var re = new RegExp(/^.*\//);
    return re.exec(window.location.href);
}

