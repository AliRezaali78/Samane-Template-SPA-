let rootTitle="سامانه -";
$(function(){
    // Router Initialization
    // let serverPath = "http://127.0.0.1:5500/main.html";
    // if (window.location.href.match(serverPath));
    // {
    //     window.location.href = serverPath + "#/home";
    // }

    var root = null;
    var useHash = true;
    var hash = '#';
    var router = new Navigo(root, useHash, hash);

    router
        .on({
            'home': function () {
                home();
            },
            'users': function () {
                users();
            },
            'users/:action': function (params) {
                if(params.action == "define")
                    userDefine();
                else
                    notFound();
            },
            'users/:action/:id': function (params) {
                // console.log("Home", params.action, params.id);
            }
        })
        .resolve();

    router.notFound(function (query) {
        notFound();
    });

    // Router Initialization Ends

    // Buttons To Click On To Navigate
    $('#home').on('click', function () {
        router.navigate('/home');
    });
    $('#user-action-1').on('click', function () {
        router.navigate('/users/define');

    });
    $('#user-action-2').on('click', function () {
        router.navigate('/users');
        
    });

    // Buttons End

});

// Functions For Navigation
function notFound(){
    document.title = 'پیدا نشد';
    $('.content-area').empty().load('uis/404.html').hide().fadeIn(700);
    deactivateBtns();

}
function home(){
    document.title = rootTitle + 'صفحه اصلی';
    $('.content-area').empty().load('uis/home.html').hide().fadeIn(700);
   btnActivate('home');
}

function users(){
    document.title = rootTitle + 'کاربران';
    $('.content-area').empty().load('uis/users.html').hide().fadeIn(700);
    btnActivate('user-action-2');
        
}
function userDefine()
{
    document.title = rootTitle + 'تعریف کاربر';
    $('.content-area').empty().load('uis/user-define.html').hide().fadeIn(700);
    btnActivate('user-action-1');
}

// Functions End

// Common 

function btnActivate(btnId){
    $(':button').removeClass('btn-active');
    $('#'+btnId).addClass('btn-active');
}
function deactivateBtns(){
    $(':button').removeClass('btn-active');
}