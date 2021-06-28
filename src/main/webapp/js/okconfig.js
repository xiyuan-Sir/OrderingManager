//公共JS
//样式配置文件
var okConfig = {
    // 主题色orange_theme|blue_theme
    theme: "blue_theme",
    // 导航箭头ok-arrow2|ok-arrow3,不填为默认样式
    menuArrow: "ok-arrow2",
    //刷新后是否记住上次打开tab菜单
    isTabMenu: false,
    // 是否开启切换刷新
    isTabRefresh: false
};

//配置文件
var WebConfig = {
    //接口请求地址
    ServiceUrl: "http://localhost:3352/",

    //登陆信息
    LoginUser: JSON.parse(sessionStorage.getItem('loginUserInfo'))
};

//公共函数

/**
 * 下拉框渲染
 * @param {[]} data  - 数据源
 * @param {Document} dropObj -下拉框
 * @param {Document} form  -表单
 */
function DropListDownRender(data, dropObj, form) {
    //清空
    dropObj.empty();
    //赋值渲染
    for (var i = 0; i < data.length; i++) {
        if (data.length > 1 && i == 0)
            dropObj.append("<option value=''>请选择</option>");

        dropObj.append("<option value='" + data[i].Value + "'>" + data[i].Text + "</option>");
    }  
    form.render("select");
}


//获取当前时间，格式YYYY-MM-DD
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}
//获取当前时间前一天
function getLastFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate() - 1;
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}
//点击导出按钮提示语
function ExportTip(count) {
    switch (count) {
        case 0:
            layer.msg("正在导出,请耐心等待..", {
                icon: 6,
                time: 1000,
                offset: 'auto',
                anim: 6
            });
            break;
        case 1:
            layer.msg("正在导出,数据量可能过大,请耐心等待..", {
                icon: 6,
                time: 3500,
                offset: 'auto',
                anim: 6
            });
            break;
        case -1:
            layer.msg("导出失败,请稍后重试", {
                icon: 5,
                time: 2500,
                offset: 'auto',
                anim: 6
            });
            break;

    }

}



//下载Excel文件
function downloadExcel(rurl) {
    let url = rurl;
    let aDom = $("<a>");
    aDom.attr("href", url);
    $("body").append(aDom);
    aDom[0].click();
    aDom.remove();
}



