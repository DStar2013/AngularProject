/**
 * Created by dream on 17/1/3.
 */
// all regex rules const definition
// --------------------------------------------------------------------------
app.constant("regexRuleConst", {
    "postcode": /^[1-9][0-9]{5}$/, //邮政编码
    "idcard": /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, //身份证号码验证表达式
    "chCode": /[^\u4e00-\u9fa5\s+]/ig, //所有字符必须为中文字符
    "enCode": /^[a-zA-Z\s]+$/, // 所有的英文字符
    "mobile": /^1[3-8][0-9]\d{8}$/, //验证手机号码/^1[3|4|5|8][0-9]\d{4,8}$/
    "empty": /^\s+|\s+$/ig, // 移除字符串空字符串
    "url": /^https?:\/\//,
    "captchaInput": /^.{4}$/, //TOP 图片验证码的验证表达式发
    "otpInput": /^\d{6}$/
});

/*
 * 定义uicontrols列表页的内容
 */
app.constant("uicontrolsListConst", [{
    name: "1px像素边框",
    routerName: "uicontrols.borders",
    describe: "1px像素边框"
},{
    name: "dialog弹框",
    routerName: "uicontrols.dialogs",
    describe: "dialog弹框提示"
}]);




