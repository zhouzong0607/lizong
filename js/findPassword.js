// 验证码
var div_5 = document.getElementsByClassName('div_5')[0]
touch.on(div_5, 'tap', function () {
    var num = 60;
    div_5.className = 'div_5 pok'
    clearInterval(timer)
    var timer = setInterval(function () {
        div_5.innerHTML = '(' + num + '秒重发)'
        num--
        if (num == 0) {
            div_5.innerHTML = '重新发送'
            clearInterval(timer)
            div_5.className = 'div_5'
        }
    }, 1000)
    alert('验证码为：666666')

});


// var yzm = document.getElementsByTagName('input')[1]
// // 当光标失去焦点时
// yzm.onblur = function () {
//     if (yzm.value.length == '') {
//         alert('请输入验证码')
//     } else if (yzm.value == '666666') {
//         console.log('第二次');
//     } else {
//         alert('输入的验证码不正确')
//     }
// }

// // 手机号
// var sjh = document.getElementsByTagName('input')[0]
// //手机号正则表达式
// var reg = /^1[3-9][0-9]{9}$/
// // 当光标失去焦点时
// sjh.onblur = function () {
//     if (sjh.value.length == '') {
//         alert('手机号不能为空')
//     } else if (!reg.test(sjh.value)) {
//         alert('手机号输入格式不正确')
//     } else {
//         console.log('第一次');
//     }
// }



// // 密码
// var reg1 = /^[\w+|\u4e00-\u9fa5/]{6,12}$/// 长度在6 - 12之间 字母数字下划线
// var reg2 = /[^0-9]/;//不能全是数字  取反
// var reg3 = /[^a-zA-Z]/;//不能全是字母  取反
// var mm = document.getElementsByTagName('input')[2]
// // 当光标失去焦点时
// mm.onblur = function () {
//     if (mm.value.length == '') {
//         alert('密码不能为空')
//     } else if (!reg2.test(mm.value)) {
//         alert('密码不能全是数字')
//     } else if (!reg3.test(mm.value)) {
//         alert('密码不能全是字母')
//     } else if (reg1.test(mm.value)) {
//         console.log('第三次');
//     }
// }

// // 确认密码
// var qrmm = document.getElementsByTagName('input')[3]
// // 当光标失去焦点时
// qrmm.onblur = function () {
//     if (qrmm.value.length == '') {
//         alert('确认密码不能为空')
//     } else if (qrmm.value !== mm.value) {
//         alert('两次密码输入不一致')
//     } else {
//         console.log('第四次');
//     }
// }

// // 提交按钮
// var button_ = document.getElementsByTagName('button')[0]
// button_.ontouchstart = function () {
//     if (sjh.onblur() && mm.onblur() && qrmm.onblur() && yzm.onblur()) {
//         alert('登录成功');
//     } else {
//         alert('失败')
//     }
// }


var button_ = document.getElementsByTagName('button')[0]
var sjh = document.getElementsByTagName('input')[0]
var yzm = document.getElementsByTagName('input')[1]
var mm = document.getElementsByTagName('input')[2]
var qrmm = document.getElementsByTagName('input')[3]
var reg = /^1[3-9][0-9]{9}$/   //手机号
var reg1 = /^[\w+|\u4e00-\u9fa5/]{6,12}$/  // 长度在6 - 12之间 字母数字下划线
var reg2 = /[^0-9]/;   //不能全是数字  取反
var reg3 = /[^a-zA-Z]/;//不能全是字母  取反
touch.on(button_, 'tap', function () {
    if (sjh.value.length == '') {
        alert('手机号不能为空')
    } else if (mm.value.length == '') {
        alert('密码不能为空')
    } else if (yzm.value.length == '') {
        alert('验证码不能为空')
    } else if (qrmm.value.length == '') {
        alert('确认密码不能为空')
    } else if (!reg.test(sjh.value)) {
        alert('手机号格式不正确')
    } else if (yzm.value !== '666666') {
        alert('验证码不正确')
    } else if (!reg1.test(mm.value)) {
        alert('密码格式不正确')
    } else if (!reg2.test(mm.value)) {
        alert('密码不能全是数字')
    } else if (!reg3.test(mm.value)) {
        alert('密码不能全是字母')
    } else if (qrmm.value !== mm.value) {
        alert('两次密码输入不一致')
    } else {
        alert('找回成功！')
        window.location.href = './login.html'
    }
})


//跳转
var stong = document.getElementsByTagName('strong')[0]
touch.on(stong, 'tap', function () {
    window.location.href = './index.html'
})


