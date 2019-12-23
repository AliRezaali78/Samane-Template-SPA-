let rootTitle = "SPAT - ";
$(function() {
  //#region  Router Initialization

  var root = null;
  var useHash = true;
  var hash = "#";
  var router = new Navigo(root, useHash, hash);

  //#endregion Router Initialization Ends

  //#region Router
  router
    .on({
      "/:controller/": function(params) {
        let controller = params.controller.toLowerCase() + "Controller";
        let fn = window[controller];
        if (typeof fn === "function") {
          fn();
        } else notFound();
      },
      "/:controller/:action": function(params) {
        let controller = params.controller.toLowerCase() + "Controller";
        let action = params.action.toLowerCase();
        let fnC = window[controller];

        if (typeof fnC !== "function") {
          notFound();
          return;
        }
        let fnA = fnC(action);
        if (typeof fnA === "function") {
          fnA();
          return;
        } else notFound();
      },
      "/:controller/:action/:id": function(params) {
        let controller = params.controller.toLowerCase() + "Controller";
        let action = params.action.toLowerCase();
        let id = params.id.toLowerCase();
        let fnC = window[controller];

        if (typeof fnC !== "function") {
          notFound();
          return;
        }
        let fnA = fnC(action);
        if (typeof fnA === "function") {
          fnA(id);
          return;
        } else notFound();
      }
    })
    .resolve();

  router.notFound(function(query) {
    notFound();
  });
  //#endregion
  checkLink();

  $(":button[go]")
    .not(".sidebar-dropdown")
    .on("click", function() {
      let go = $(this).attr("go");
      router.navigate(go);
    });

  window.onhashchange = function() {
    checkLink();
  };
});

//#region Controllers
 function notFound() {
  loadPage(" پیدا نشد", "uis/404.html");
  deactivateBtns();
}
function homeController(action) {
  if (!action) {
    loadPage(" صفحه اصلی", "uis/home.html");
    return;
  }

  let actions = {
    users: function() {
      if(arguments.length>0) return notFound();
      loadPage("Users", "uis/users.html");
    },
    adduser: function() {
      if(arguments.length>0) return notFound();
      loadPage("Add User", "uis/user-define.html");
    },
    edituser: function(id) {  
      if (!id) return notFound();
      loadPage("Edit User", "uis/user-define.html");
    }
  };
  return actions[action];
}

//#endregion

//#endregion

//#region Common Functions
function checkLink() {
  let buttons = $(":button[go]");
  for (const btn of buttons) {
    let go = $(btn).attr("go");
    let index = window.location.href.indexOf(go);
    if (index >= 0) {
      let link = window.location.href.slice(index);
      link = link.split("/").join("");
      go = go.split("/").join("");
      if (link === go) {
        btnActivate($(btn).attr("id"));
        break;
      }
    }
  }
}

function btnActivate(btnId) {
  $(":button").removeClass("btn-active");
  $("#" + btnId).addClass("btn-active");
}
function deactivateBtns() {
  $(":button").removeClass("btn-active");
}
function loadPage(title, pageToLoad, loadInClass = "content-area") {
  document.title = rootTitle + title;
  $("." + loadInClass)
    .empty()
    .load(pageToLoad)
    .hide()
    .fadeIn(700);
}

function getParamValue(param) {
  param = param.toLowerCase();
  let loc = window.location.href;
  let index = loc.indexOf(param+"/");
  let substr = loc.substr(index);
  index = substr.indexOf("/");
  return substr.substr(index + 1);
}
//#endregion
