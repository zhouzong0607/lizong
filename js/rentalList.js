// 点击区域隐藏区域显示
//找到区域
var a_ = document.getElementsByClassName('aa')
//找到隐藏部分
var yc_ = document.getElementsByClassName('bb')
//找到蒙版
var mb_ = document.getElementsByClassName('mb')[0]
// console.log(a_);
// touch.on(a_, 'tap', function () {
//     yc_.style.display = 'block'
//     mb_.style.display = 'block'
// })

// touch.on(mb_, 'tap', function () {
//     yc_.style.display = 'none'
//     mb_.style.display = 'none'
// })
for (var i = 0; i < a_.length; i++) {
    a_[i].ind = i
    touch.on(a_[i], 'tap', function () {
        for (var j = 0; j < yc_.length; j++) {
            yc_[j].style.display = 'none'
        }
        yc_[this.ind].style.display = 'block'
        mb_.style.display = 'block'
    })
}

touch.on(mb_, 'tap', function () {
    for (var i = 0; i < yc_.length; i++) {
        yc_[i].style.display = 'none'
        mb_.style.display = 'none'
    }
})

// 点击字体变颜色
var ul_4_ = document.getElementsByClassName('ul_4')[0].children

for (var i = 0; i < ul_4_.length; i++) {
    // console.log(ul_4_[i]);
    // console.log(i)
    ul_4_[i].ontouchstart = function () {
        for (var j = 0; j < ul_4_.length; j++) {
            ul_4_[j].className = '';
        }
        this.className = 'ii';
    }
}



//跳转
var stong = document.getElementsByTagName('strong')[0]
touch.on(stong, 'tap', function () {
    window.location.href = './index.html'
})