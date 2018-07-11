$(function () {
    console.log(sessionStorage.users);
    if (sessionStorage.users == null) {
        window.location.href = '../WebApp/login.html';
        return;
    }

    $("#radio").buttonset();
    $(".datepicker").datepicker();

    $("#myselect").click(function () {
        $("#show").css('display','block');
    });

    $(".otherselect").click(function () {
        $("#show").css('display', 'none');
    });

    GetHospitalName();

    var $choose = $("#checkBoxList input");
    $("#selectAll").click(function () {
        $choose.each(function () {
            $(this).prop("checked", true);
        });
    });
    $("#unSelect").click(function () {
        $choose.prop("checked", false);
    });
    $("#reverseSelect").click(function () {
        $choose.each(function () {
            $(this).prop("checked", !$(this).prop("checked"));
        });
    });
    //var mess = '<%=Session["UserName"].ToString() %>';
    //alert(mess);
    
    var users = JSON.parse(sessionStorage.users);
    $("#mess").html("����," + users.Data.UserName);

    var data = new Date();
    var month=data.getMonth()+1;
    $("#times").html(data.getFullYear()+"/"+month+"/"+data.getDate());
});
function GetHospitalName() {
    var url = "../Home/GetAllHospitals";
    $.ajax({
        type: "post",
        url: url,
        success: function (data) {
            if (data.IsSuccess) {
                console.log(JSON.stringify(data));
                var hp = $("#hospitalname");


                //ת��Json����
                var result = eval(data.Data);

                //ѭ������ �������
                $(result).each(function (key, value) {
                    var opt = $("<option ></option>").text(result[key].HospitalName).val(result[key].HospitaiName);
                    hp.append(opt);
                });
            }
            else { alert("����ʧ��"); }
        },
        error: function () {
            alert("error");
        }
    });
}

$(function () {

    var mydata = [

            { pname: "test1", sex: "��", age: "21", height: "176", weight: "65", hospitalname: "����������ҽԺ", applydoctor: "��������-ҽ��", operation: "��", expecttime: "2018/7/7", uploadname: "��������-�ϴ�", imagenum: "3", uploadtime: "2018/7/5", status: "���ϴ�", advise: "����" },
            { pname: "test2", sex: "Ů", age: "56", height: "165", weight: "65", hospitalname: "����������ҽԺ", applydoctor: "��������-ҽ��", operation: "��", expecttime: "2018/7/7", uploadname: "��������-�ϴ�", imagenum: "3", uploadtime: "2018/7/1", status: "���ϴ�", advise: "����" },
            { pname: "test3", sex: "��", age: "25", height: "176", weight: "65", hospitalname: "����������ҽԺ", applydoctor: "��������-ҽ��", operation: "��", expecttime: "2018/7/7", uploadname: "��������-�ϴ�", imagenum: "3", uploadtime: "2018/7/3", status: "���ϴ�", advise: "����" },
            { pname: "test4", sex: "��", age: "71", height: "176", weight: "65", hospitalname: "����������ҽԺ", applydoctor: "��������-ҽ��", operation: "��", expecttime: "2018/7/7", uploadname: "��������-�ϴ�", imagenum: "3", uploadtime: "2018/7/2", status: "���ϴ�", advise: "����" },
            { pname: "test5", sex: "Ů", age: "31", height: "176", weight: "65", hospitalname: "����������ҽԺ", applydoctor: "��������-ҽ��", operation: "��", expecttime: "2018/7/7", uploadname: "��������-�ϴ�", imagenum: "3", uploadtime: "2018/7/5", status: "���ϴ�", advise: "����" },
            { pname: "test6", sex: "Ů", age: "65", height: "176", weight: "65", hospitalname: "����������ҽԺ", applydoctor: "��������-ҽ��", operation: "��", expecttime: "2018/7/7", uploadname: "��������-�ϴ�", imagenum: "3", uploadtime: "2018/7/4", status: "���ϴ�", advise: "����" },
            { pname: "test7", sex: "��", age: "31", height: "176", weight: "65", hospitalname: "����������ҽԺ", applydoctor: "��������-ҽ��", operation: "��", expecttime: "2018/7/7", uploadname: "��������-�ϴ�", imagenum: "3", uploadtime: "2018/7/5", status: "���ϴ�", advise: "����" },
            { pname: "test8", sex: "��", age: "33", height: "176", weight: "65", hospitalname: "����������ҽԺ", applydoctor: "��������-ҽ��", operation: "��", expecttime: "2018/7/7", uploadname: "��������-�ϴ�", imagenum: "3", uploadtime: "2018/7/5", status: "���ϴ�", advise: "����" },
            { pname: "test9", sex: "Ů", age: "45", height: "176", weight: "65", hospitalname: "����������ҽԺ", applydoctor: "��������-ҽ��", operation: "��", expecttime: "2018/7/7", uploadname: "��������-�ϴ�", imagenum: "3", uploadtime: "2018/7/5", status: "���ϴ�", advise: "����" },
            { pname: "test10", sex: "��", age: "56", height: "176", weight: "65", hospitalname: "����������ҽԺ", applydoctor: "��������-ҽ��", operation: "��", expecttime: "2018/7/7", uploadname: "��������-�ϴ�", imagenum: "3", uploadtime: "2018/7/5", status: "���ϴ�", advise: "����" },
            { pname: "test11", sex: "Ů", age: "65", height: "176", weight: "65", hospitalname: "����������ҽԺ", applydoctor: "��������-ҽ��", operation: "��", expecttime: "2018/7/7", uploadname: "��������-�ϴ�", imagenum: "3", uploadtime: "2018/7/5", status: "���ϴ�", advise: "����" },
            { pname: "test12", sex: "��", age: "25", height: "176", weight: "65", hospitalname: "����������ҽԺ", applydoctor: "��������-ҽ��", operation: "��", expecttime: "2018/7/7", uploadname: "��������-�ϴ�", imagenum: "3", uploadtime: "2018/7/5", status: "���ϴ�", advise: "����" },

            //{ id: "12", invdate: "2007-09-10", name: "test12", note: "note12", amount: "500.00", tax: "30.00", closed: false, ship_via: "FE", total: "530.00" }

    ],

    $grid = $("#list"),

    initDate = function (elem) {
        $(elem).datepicker({
        dateFormat: 'yyyy-m-dd',
        autoSize: true,
        changeYear: true,
        changeMonth: true,
        showButtonPanel: true,
        showWeek: true
        });
    },

    stringTemplate = {
        formatter:'string',editable:true,sorttype:'string'
    },

    numberTemplate = {
        formatter: 'number', align: 'right', sorttype: 'number', editable: true,

        searchoptions: { sopt: ['eq', 'ne', 'lt', 'le', 'gt', 'ge', 'nu', 'nn', 'in', 'ni'] }
    },

    dateTemplate = {
        width: 80, align: 'center', sorttype: 'date',

        formatter: 'date', formatoptions: { newformat: 'Y-m-d' }, editable: true, datefmt: 'Y-m-d',

        editoptions: { dataInit: initDate },

        searchoptions: { sopt: ['eq', 'ne', 'lt', 'le', 'gt', 'ge'], dataInit: initDate }
    },

    yesNoTemplate = {
        width: 75, align: 'center', editable: true, formatter: 'checkbox',

        edittype: 'checkbox', editoptions: { value: 'Yes:No', defaultValue: 'Yes' },

        stype: 'select', searchoptions: { sopt: ['eq', 'ne'], value: ':Any;true:Yes;false:No' }
    };

    $grid.jqGrid({

        datatype: 'local',
        //url:,
        //datatype:'json',

        data: mydata,

        //colNames: ['Inv No', 'Client', 'Date', 'Amount', 'Tax', 'Total', 'Closed', 'Shipped via', 'Notes'],

        colNames: ['��������', '�Ա�', '����', '���(cm)', '����(kg)', 'ҽԺ����', '����ҽ��', '��Ҫ��������', 'Ԥ��ʱ��', '�ϴ���Ա����', 'ͼ������', '�ϴ�ʱ��', '״̬', 'ר�ҽ���'],

        colModel: [

            {
                name: 'pname', index: 'pname', width: 60, align: 'center',
                template: stringTemplate
            },

            {
                name: 'sex', index: 'sex', width: 50, align: 'center',
                template: stringTemplate
            },

            {
                name: 'age', index: 'age', formatter:'integer', width: 50, align: 'center',
                template: numberTemplate
            },

            {
                name: 'height', index: 'height', formatter:'integer', width: 50, align: 'center',
                template: numberTemplate

            },

            {
                name: 'weight', index: 'weight',  formatter:'integer',width: 50, align: 'center',
                template: numberTemplate

            },

            {
                name: 'hospitalname', index: 'hospitalname', width: 80, align: 'center',
                template: stringTemplate

            },

            {
                name: 'applydoctor', index: 'applydoctor', width: 60, align: 'center',
                template: stringTemplate

            },

            {
                name: 'operation', index: 'operation', width: 60, align: 'center',
                template: stringTemplate

            },

            {
                name: 'expecttime', index: 'expecttime', width: 50, align: 'center',
                template: dateTemplate

            },

            {
                name: 'uploadname', index: 'uploadname', width: 60, align: 'center',
                template: stringTemplate

            },

            {
                name: 'imagenum', index: 'imagenum',formatter:'integer', width: 60, align: 'center',
                template: numberTemplate

            },

            {
                name: 'uploadtime', index: 'uploadtime', width: 60, align: 'center',
                template: dateTemplate
            },

            {
                name: 'status', index: 'status', width: 60, align: 'center',
                template: stringTemplate

            },

            {
                name: 'advise', index: 'advise', width: 60, align: 'center',
                template: stringTemplate

            },
        ],
        rowNum: 10,
        rowList: [5, 10, 20, 30],
        pager: '#pager',
        gridview: true,
        rownumbers: false,
        autoencode: true,
        ignoreCase: true,
        sortname: 'uploadtime',
        viewrecords: true,
        sortorder: 'desc',
        height: '100%',
        caption: '�����б�'

        //editurl: "../Home/CheckUserValid" �༭url
        //addurl ���url
    });

    $grid.jqGrid('navGrid', '#pager', {
        refreshstate: 'current',
        search: true,
        refresh: false,
        add: false,
        edit: false,
        del: false,
        searchtext: "����"
        //addtext: "���",
        //edittext: "�༭",
        //deltext: "ɾ��",
        //refreshtext:"ˢ��"

    });

    $grid.jqGrid('navButtonAdd', '#pager', {

        caption: "�鿴",

        buttonicon: "ui-icon-calculator",

        title: "�Զ�����",

        onClickButton: function () {

            $(this).jqGrid('columnChooser');

        }

    });
})