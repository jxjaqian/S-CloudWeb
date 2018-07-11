
//发起登录请求

function Login() {


    var name = document.getElementById("username").value;

    var password = document.getElementById("password").value;

    if (name == null || name == "") {

        innerHtml("请输入用户名");

        return;

    }

    if (password == null || password == "") {

        innerHtml("请输入密码");

        return;

    }
    $.ajax({

        url: "../Home/CheckUserValid",	//请求url

        type: "POST",	//请求类型  post|get

        data: "userID=" + name + "&password=" + password,	//后台用 request.getParameter("key");

        dataType: "json",  //返回数据的 类型 text|json|html--

        success: function (users) {	//回调函数 和 后台返回的 数据
            console.info(JSON.stringify(users));
            console.info(users.IsSuccess);
            //console.info(users.Data.Password);

            if (users.IsSuccess) {
                sessionStorage.users = JSON.stringify(users);
                window.location.href = '../WebApp/tabledemo.html';
                //alert("登录成功！");
            }
            else {
                $.ajax({
                    type: "post",
                    url: "../Home/CheckUserIsExist",
                    data: "userCode=" + name,
                    success: function (data) {
                        if (data.Data)
                            innerHtml("密码错误");
                            //document.getElementById("tip").innerHTML = "<font color='red'></font>";
                        else
                            innerHtml("用户名不存在");
                        //document.getElementById("tip").innerHTML = "<font color='red'>用户名不存在</font>";
                    }
                });
            }

        }

    });


}


//插入提示语

function innerHtml(message) {

    document.getElementById("tip").innerHTML = "<span style='font-size:12px; color:red;'>" + message + "</span>";

}

//跳转到注册页面


function RegistPage() {
    window.location.href = '../WebApp/regist.html';
}



//{"ExtensionData":{},
//    "Data":{"CellPhone":"",
//        "HospitalID":"cb78e8d6-c9ea-c2a0-8b52-08d4ce766196",
//        "Password":"B027B83970458ECA79680C3451B9F5F9",
//        "Permissions":[{"PermissionDescribe":"数据上传权","PermissionID":"52bee07a-f3fa-c61f-0239-08d4b9f74d13","PermissionName":"数据上传权","PermissionValue":0,"ExtensionData":{}}],
//        "TypeID":"e293ecb8-6447-c1d2-3e45-08d4b9f74d0e",
//        "UserCode":"surpathupload",
//        "UserID":"cc31db83-8923-cfe4-f6ee-08d4ce759eeb",
//        "UserName":"京新术派-上传",
//        "UserType":{"TypeID":"e293ecb8-6447-c1d2-3e45-08d4b9f74d0e","TypeName":"数据上传人员","TypeValue":0,"ExtensionData":{}},
//        "ExtensionData":{}},
//    "ErrorMessage":"",
//    "IsSuccess":true}
