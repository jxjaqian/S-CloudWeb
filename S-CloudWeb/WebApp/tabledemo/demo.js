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
    $("#mess").html("您好," + users.Data.UserName);

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


                //转成Json对象
                var result = eval(data.Data);

                //循环遍历 下拉框绑定
                $(result).each(function (key, value) {
                    var opt = $("<option ></option>").text(result[key].HospitalName).val(result[key].HospitaiName);
                    hp.append(opt);
                });
            }
            else { alert("加载失败"); }
        },
        error: function () {
            alert("error");
        }
    });
}

$(function () {

    var mydata = [

            { pname: "test1", sex: "男", age: "21", height: "176", weight: "65", hospitalname: "京新术派总医院", applydoctor: "京新术派-医生", operation: "是", expecttime: "2018/7/7", uploadname: "京新术派-上传", imagenum: "3", uploadtime: "2018/7/5", status: "已上传", advise: "暂无" },
            { pname: "test2", sex: "女", age: "56", height: "165", weight: "65", hospitalname: "京新术派总医院", applydoctor: "京新术派-医生", operation: "是", expecttime: "2018/7/7", uploadname: "京新术派-上传", imagenum: "3", uploadtime: "2018/7/1", status: "已上传", advise: "暂无" },
            { pname: "test3", sex: "男", age: "25", height: "176", weight: "65", hospitalname: "京新术派总医院", applydoctor: "京新术派-医生", operation: "是", expecttime: "2018/7/7", uploadname: "京新术派-上传", imagenum: "3", uploadtime: "2018/7/3", status: "已上传", advise: "暂无" },
            { pname: "test4", sex: "男", age: "71", height: "176", weight: "65", hospitalname: "京新术派总医院", applydoctor: "京新术派-医生", operation: "是", expecttime: "2018/7/7", uploadname: "京新术派-上传", imagenum: "3", uploadtime: "2018/7/2", status: "已上传", advise: "暂无" },
            { pname: "test5", sex: "女", age: "31", height: "176", weight: "65", hospitalname: "京新术派总医院", applydoctor: "京新术派-医生", operation: "是", expecttime: "2018/7/7", uploadname: "京新术派-上传", imagenum: "3", uploadtime: "2018/7/5", status: "已上传", advise: "暂无" },
            { pname: "test6", sex: "女", age: "65", height: "176", weight: "65", hospitalname: "京新术派总医院", applydoctor: "京新术派-医生", operation: "是", expecttime: "2018/7/7", uploadname: "京新术派-上传", imagenum: "3", uploadtime: "2018/7/4", status: "已上传", advise: "暂无" },
            { pname: "test7", sex: "男", age: "31", height: "176", weight: "65", hospitalname: "京新术派总医院", applydoctor: "京新术派-医生", operation: "是", expecttime: "2018/7/7", uploadname: "京新术派-上传", imagenum: "3", uploadtime: "2018/7/5", status: "已上传", advise: "暂无" },
            { pname: "test8", sex: "男", age: "33", height: "176", weight: "65", hospitalname: "京新术派总医院", applydoctor: "京新术派-医生", operation: "是", expecttime: "2018/7/7", uploadname: "京新术派-上传", imagenum: "3", uploadtime: "2018/7/5", status: "已上传", advise: "暂无" },
            { pname: "test9", sex: "女", age: "45", height: "176", weight: "65", hospitalname: "京新术派总医院", applydoctor: "京新术派-医生", operation: "是", expecttime: "2018/7/7", uploadname: "京新术派-上传", imagenum: "3", uploadtime: "2018/7/5", status: "已上传", advise: "暂无" },
            { pname: "test10", sex: "男", age: "56", height: "176", weight: "65", hospitalname: "京新术派总医院", applydoctor: "京新术派-医生", operation: "是", expecttime: "2018/7/7", uploadname: "京新术派-上传", imagenum: "3", uploadtime: "2018/7/5", status: "已上传", advise: "暂无" },
            { pname: "test11", sex: "女", age: "65", height: "176", weight: "65", hospitalname: "京新术派总医院", applydoctor: "京新术派-医生", operation: "是", expecttime: "2018/7/7", uploadname: "京新术派-上传", imagenum: "3", uploadtime: "2018/7/5", status: "已上传", advise: "暂无" },
            { pname: "test12", sex: "男", age: "25", height: "176", weight: "65", hospitalname: "京新术派总医院", applydoctor: "京新术派-医生", operation: "是", expecttime: "2018/7/7", uploadname: "京新术派-上传", imagenum: "3", uploadtime: "2018/7/5", status: "已上传", advise: "暂无" },

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

        colNames: ['患者姓名', '性别', '年龄', '身高(cm)', '体重(kg)', '医院名称', '申请医生', '需要手术方案', '预期时间', '上传人员姓名', '图像数量', '上传时间', '状态', '专家建议'],

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
        caption: '患者列表'

        //editurl: "../Home/CheckUserValid" 编辑url
        //addurl 添加url
    });

    $grid.jqGrid('navGrid', '#pager', {
        refreshstate: 'current',
        search: true,
        refresh: false,
        add: false,
        edit: false,
        del: false,
        searchtext: "查找"
        //addtext: "添加",
        //edittext: "编辑",
        //deltext: "删除",
        //refreshtext:"刷新"

    });

    $grid.jqGrid('navButtonAdd', '#pager', {

        caption: "查看",

        buttonicon: "ui-icon-calculator",

        title: "自定义列",

        onClickButton: function () {

            $(this).jqGrid('columnChooser');

        }

    });
})