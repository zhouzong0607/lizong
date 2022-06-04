
//跳转
var stong = document.getElementsByTagName('strong')[0]
var v_ = document.getElementsByClassName('v')[0]
touch.on(stong, 'tap', function () {
    window.location.href = './index.html'
})

touch.on(v_, 'tap', function () {
    window.location.href = './rentalList.html'
})




