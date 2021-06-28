//校验登陆信息
var info = sessionStorage.getItem('loginUserInfo');
if (info === undefined || info === null || info === "" || info === "null" || info === "undefined") {
    alert('会话过期，请重新登陆!');
    window.location.replace("../../login.html");
}