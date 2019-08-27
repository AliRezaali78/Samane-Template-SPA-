$(function(){
    $('#loginbtn').on('click',function(event){
        event.preventDefault();

        //validation
        let user=$('#user').val();
        let pass=$('#pass').val();
        let isValid=  validateForm(user,pass);

        if(isValid){
            login(user,pass);
        }
      
    });
});

function validateForm(user,pass){
    if(user.trim()==='' || pass.trim()==='')
    {
        $('#empty-input').show();
        return false;
    }
    else{
        $('#empty-input').hide();
        return true;
    }

}

function login(username,password){
    
    if(!cookies.test()){
        $('#cookie-support').show();
        return;
    }
    else
    {
        $('#cookie-support').hide();
    }

    if(username !=='admin' && password!=='admin')
    {
        $('#wrong-userpass').show();
        return;
    }
    else
        $('#wrong-userpass').hide();


    //success
    let user = new User(username,'احمد','رضایی','ادمین','002126256','asdasdasdasdasd','asdasdasdasds');
    cookies.set('user',user);
    
    cookies.set('login',true);
//    let baseUrl = getBaseUrl();
//    baseUrl+="proj/"; 
    window.location.replace("main.html#/home");

    //fail

}

function getBaseUrl() {
    var re = new RegExp(/^.*\//);
    return re.exec(window.location.href);
}
class User{
    constructor(username,name,fname,role,code,token,pkey){
        this.username=username;
        this.name=name;
        this.role=role;
        this.code= code;
        this.fname=fname;
        this.token=token;
        this.pkey=pkey;
    }
    
}