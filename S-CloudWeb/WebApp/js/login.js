
//�����¼����

function Login() {


    var name = document.getElementById("username").value;

    var password = document.getElementById("password").value;

    if (name == null || name == "") {

        innerHtml("�������û���");

        return;

    }

    if (password == null || password == "") {

        innerHtml("����������");

        return;

    }
    $.ajax({

        url: "../Home/CheckUserValid",	//����url

        type: "POST",	//��������  post|get

        data: "userID=" + name + "&password=" + password,	//��̨�� request.getParameter("key");

        dataType: "json",  //�������ݵ� ���� text|json|html--

        success: function (users) {	//�ص����� �� ��̨���ص� ����
            console.info(JSON.stringify(users));
            console.info(users.IsSuccess);
            //console.info(users.Data.Password);

            if (users.IsSuccess) {
                sessionStorage.users = JSON.stringify(users);
                window.location.href = '../WebApp/tabledemo.html';
                //alert("��¼�ɹ���");
            }
            else {
                $.ajax({
                    type: "post",
                    url: "../Home/CheckUserIsExist",
                    data: "userCode=" + name,
                    success: function (data) {
                        if (data.Data)
                            innerHtml("�������");
                            //document.getElementById("tip").innerHTML = "<font color='red'></font>";
                        else
                            innerHtml("�û���������");
                        //document.getElementById("tip").innerHTML = "<font color='red'>�û���������</font>";
                    }
                });
            }

        }

    });


}


//������ʾ��

function innerHtml(message) {

    document.getElementById("tip").innerHTML = "<span style='font-size:12px; color:red;'>" + message + "</span>";

}

//��ת��ע��ҳ��


function RegistPage() {
    window.location.href = '../WebApp/regist.html';
}



//{"ExtensionData":{},
//    "Data":{"CellPhone":"",
//        "HospitalID":"cb78e8d6-c9ea-c2a0-8b52-08d4ce766196",
//        "Password":"B027B83970458ECA79680C3451B9F5F9",
//        "Permissions":[{"PermissionDescribe":"�����ϴ�Ȩ","PermissionID":"52bee07a-f3fa-c61f-0239-08d4b9f74d13","PermissionName":"�����ϴ�Ȩ","PermissionValue":0,"ExtensionData":{}}],
//        "TypeID":"e293ecb8-6447-c1d2-3e45-08d4b9f74d0e",
//        "UserCode":"surpathupload",
//        "UserID":"cc31db83-8923-cfe4-f6ee-08d4ce759eeb",
//        "UserName":"��������-�ϴ�",
//        "UserType":{"TypeID":"e293ecb8-6447-c1d2-3e45-08d4b9f74d0e","TypeName":"�����ϴ���Ա","TypeValue":0,"ExtensionData":{}},
//        "ExtensionData":{}},
//    "ErrorMessage":"",
//    "IsSuccess":true}
