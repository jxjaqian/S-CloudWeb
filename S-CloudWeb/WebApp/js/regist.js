//�ж��û����Ƿ����
function CheckUserId() {
    var username = document.getElementById("username").value;
    if (username == null || username == ""){
        innerHtml("�������û���");
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
                innerHtml("�û����ѱ�ע��");
                return;
            }
            else
                innerHtml("");
        }
    });
}

//�ж����������Ƿ�һ��
function CheckPassword() {
    var pwd1 = document.getElementById("password").value;
    var pwd2 = document.getElementById("repassword").value;
    if (pwd1 == null || pwd1 == "") { innerHtml("����д����"); return; }
    if (pwd2 == null || pwd2 == "") { innerHtml("��ȷ������"); return; }
    if(pwd1 != pwd2)
        innerHtml("�������벻һ��");
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
                    innerHtml("��ʹ�õ��û���");

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
                                innerHtml("ע��ɹ�");
                            else
                                innerHtml("ע��ʧ��");
                        }
                    });
                }
                else
                    innerHtml("�û����Ѿ���ע��");
            }
        });
    }
    else{
        innerHtml("���벻һ��");
    }
}


function LoginPage(){
    window.location.href = "../WebApp/login.html";
}


function innerHtml(message) {
    document.getElementById("tip").innerHTML = "<span style='font-size:12px; color:red;'>" + message + "</span>";
}