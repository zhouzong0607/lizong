// 1.验证手机号是否合法
// 1.获取输入框内容
var t1 = document.getElementById('t1');
var t3 = document.getElementById('t3');
var t5 = document.getElementById('t5');
var xx = document.getElementsByClassName('xx');
var agg = 0;
t1.oninput = function () {
    var arr_ = /^1[3578]\d{9}$/;
    // console.log(arr_.test(t1.value));
    if (!arr_.test(t1.value)) {
        // alert('请输入正确的手机号');
        xx[0].style.color = 'red'
        xx[0].innerHTML = '请输入正确的手机号';
    } else {
        xx[0].style.color = 'yellowgreen'
        xx[0].innerHTML = '输入正确';
        agg++;
        fu(agg)
    }
}
t5.oninput = function () {
    var arr = /^\w{6,10}$/;
    if (!arr.test(t5.value)) {
        xx[2].style.color = 'red'
        xx[2].innerHTML = '密码格式不正确:6-10位数';
    } else {
        xx[2].style.color = 'yellowgreen'
        xx[2].innerHTML = '输入正确';
        agg++;
        fu(agg)
    }
}

t3.oninput = function () {
    if (t3.value != obj) {
        xx[1].style.color = 'red'
        xx[1].innerHTML = '验证码错误';
    } else {
        xx[1].style.color = 'yellowgreen'
        xx[1].innerHTML = '输入正确';
        agg++;
        fu(agg)
    }
}

var tableText = document.getElementById('code');
var obj;
var timer;
tableText.onclick = function () {
    tableText.style.pointerEvents = "none";
    var num_ = 60;
    obj = [];
    clearInterval(timer)
    timer = setInterval(function () {
        num_--;
        if (num_ == 0) {
            clearInterval(timer)
            num_ = 60;
            tableText.style.pointerEvents = "";
            tableText.innerHTML = '重新发送'
        } else {
            tableText.innerHTML = num_ + '秒后可重新发送';
        }
        if (num_ == 57) {
            for (var i = 0; i < 4; i++) {
                var num = Math.floor(Math.random() * 10);
                obj.push(num)
            }
            obj = obj.join('');
            alert('你的验证码为：' + obj);
        }
    }, 1000)
}

var btn = document.getElementById('mit');
console.log(mit);
btn.onclick = function () {
    if (t1.onblur() && t3.onblur() && t5.onblur()) {
        alert('注册成功');
        t1 = document.getElementById('t1').value;
        t5 = document.getElementById('t5').value;
        setCookie('手机号', t1);
        setCookie('密码', t5);

    }
}
var btn = document.getElementById('mit');
submit.onclick = function () {
    submit.innerHTML = '注册成功'

}