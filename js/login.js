var a_ = document.getElementsByClassName('a2')[0]
var a1_ = document.getElementsByClassName('a1')[0]
var fon_ = document.getElementsByClassName('fon')[0]
var fonn_ = document.getElementsByTagName('form')[0]
var lll_ = document.getElementsByClassName('lll')[0]
var ll_ = document.getElementsByClassName('ll')[0]
var jj_ = document.getElementsByClassName('jj')[0]
touch.on(a_, 'tap', function () {
    fon_.style.display = 'block'
    fon_.style.display = 'flex'
    fonn_.style.display = 'none'
    lll_.style.backgroundColor = '#FF8A00'
    ll_.style.backgroundColor = '#d1d1d1'
})


// 验证码
touch.on(jj_, 'tap', function () {
    var num = 60
    jj_.className = 'jj jjj'
    alert('验证码为:666666')
    var timer = setInterval(function () {
        jj_.innerHTML = '(' + num + ')' + '重发'
        num--
        if (num == 0) {
            jj_.innerHTML = '重新发送'
            clearInterval(timer)
            jj_.className = 'jj'
        }
    }, 1000)
})


touch.on(a1_, 'tap', function () {
    fon_.style.display = 'none'
    fonn_.style.display = 'block'
    fonn_.style.display = 'flex'
    ll_.style.backgroundColor = '#FF8A00'
    lll_.style.backgroundColor = '#d1d1d1'
})


var input_ = document.getElementsByTagName('input')
var button_ = document.getElementsByTagName('button')
var reg = /^1[3-9][0-9]{9}$/   //手机号
var reg1 = /^[\w+|\u4e00-\u9fa5/]{6,12}$/  // 长度在6 - 12之间 字母数字下划线
var reg2 = /[^0-9]/;   //不能全是数字  取反
var reg3 = /[^a-zA-Z]/;//不能全是字母  取反


touch.on(button_[0], 'tap', function () {
    if (input_[0].value.length == '') {
        alert('手机号不能为空')
    } else if (input_[0].value.length == '') {
        alert('密码不能为空')
    } else if (!reg.test(input_[0].value)) {
        alert('手机号格式不正确')
    } else if (!reg1.test(input_[1].value)) {
        alert('密码格式不正确')
    } else if (!reg2.test(input_[1].value)) {
        alert('密码不能全是数字')
    } else if (!reg3.test(input_[1].value)) {
        alert('密码不能全是字母')
    } else {
        alert('登录成功！')
        setTimeout(window.location.href = './index.html')
    }
})


touch.on(button_[1], 'tap', function () {
    if (input_[2].value.length == '') {
        alert('手机号不能为空')
    } else if (!reg.test(input_[2].value)) {
        alert('手机号格式不正确')
    } else if (input_[3].value != '666666') {
        alert('验证码不正确')
    } else {
        alert('登录成功！')
        window.location.href = './index.html'
    }
})




var pp_ = document.getElementsByClassName('pp')[0]
var qq_ = document.getElementsByClassName('qq')[0]
var stong = document.getElementsByTagName('strong')[0]
var v_ = document.getElementsByClassName('v')[0]
touch.on(pp_, 'tap', function () {
    window.location.href = './register.html'
})

touch.on(qq_, 'tap', function () {
    window.location.href = './findPassword.html'
})
touch.on(stong, 'tap', function () {
    window.location.href = './index.html'
})
touch.on(v_, 'tap', function () {
    window.location.href = './my.html'
})










