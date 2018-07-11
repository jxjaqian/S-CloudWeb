//判断用户名是否可用
function CheckUserId() {
    var username = document.getElementById("username").value;
    if (username == null || username == ""){
        innerHtml("请输入用户名");
        return;
    }
    console.log(username);
    var url = "../Home/CheckUserIsExist";
    $.ajax({
        type: "post",
        url: url,
        data: "userCode=" + username,
        success: function (data) {
            if (data.Data != null) {
                innerHtml("用户名已被注册");
                return;
            }
            else
                innerHtml("");
        }
    });
}

//判断两次密码是否一致
function CheckPassword() {
    var pwd1 = document.getElementById("password").value;
    var pwd2 = document.getElementById("repassword").value;
    if (pwd1 == null || pwd1 == "") { innerHtml("请填写密码"); return; }
    if (pwd2 == null || pwd2 == "") { innerHtml("请确认密码"); return; }
    if(pwd1 != pwd2)
        innerHtml("两次密码不一致");
    else
        innerHtml("");
}




function ConfirmPassword() {
    var username = document.getElementById("username").value;
    var pwd1 = document.getElementById("password").value;
    var pwd2 = document.getElementById("repassword").value;
       
    if (pwd1 == pwd2) {
        var url = "../Home/CheckUserIsExist";
        $.ajax({
            //async: false,
            type: "post",
            url: url,
            data: "userCode=" + username,
            success: function (data) {
                if(data == true){
                    innerHtml("可使用的用户名");

                    var user = {};
                    user.Password = pwd1;
                    user.UserID = username;
                    user.TypeID = 10;
                    user.UserCode = 10;
                    $.ajax({
                        //async: false,
                        type: "post",
                        data:user,
                        url: "../Home/RegisterUser",
                        success: function (dd) {
                            console.log(JSON.stringify(dd));
                            //    console.info(dd.IsSuccess);
                            //    console.info(dd.ErrorMessage);
                            if (dd.IsSuccess == true)
                                innerHtml("注册成功");
                            else
                                innerHtml("注册失败");
                        }
                    });
                }
                else
                    innerHtml("用户名已经被注册");
            }
        });
    }
    else{
        innerHtml("密码不一致");
    }
}


function LoginPage(){
    window.location.href = "../WebApp/login.html";
}


function innerHtml(message) {
    document.getElementById("tip").innerHTML = "<span style='font-size:12px; color:red;'>" + message + "</span>";
}