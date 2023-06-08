//获取所有图片的li和所有焦点的li
var imgs = document.querySelectorAll(".banner>ul>li")
var point = document.querySelectorAll(".banner > ol > li")
//获取最大div的元素
var banner = document.querySelector(".banner")
//index表示第几张图片默认第0张显示
var index = 0
//隐藏当前这种图片，显示第index张图片方法
//true表示切换到下一张图片
//false表示切换到上一张图片
function changeOne(type) {
    //隐藏第index张图片
    imgs[index].className = ''
    //隐藏第index个按钮高亮(绿色)
    point[index].className = ''

    //判断传过来的值是否是true，是就切换下一张图片
    if (type === true) {
        index++

    } else if (type === false) {   //判断传过来的值是否是false，是就切换上一张图片
        index--
    } else {        //都不是说明点击是小圆点，就切换到type张图片
        index = type
    }

    //判断index有没有越界，越了就从头开始或者从最后开始
    if (index >= imgs.length) {
        index = 0
    }
    if (index < 0) {
        index = imgs.length - 1
    }

    //为index张图片设置active属性
    //图片是透明度设置不透明，
    imgs[index].className = "active"
    //小圆点是设置高亮
    point[index].className = "active"

}

//单击判断调用changeOne(type)方法

banner.onclick = function (e) {

    //判断点击的是否是点击了左边的按钮
    if (e.target.className === "left") {
        changeOne(false)//如果是就调用方法，并传参false
    }

    //判断点击的是否是点击了右边的按钮
    if (e.target.className === "right") {
        changeOne(true)  //如果是就调用方法，并传参true
    }
    //判断是否点击了小按钮(自定义属性判断，可以去看小圆点li里的(data-c))
    if (e.target.dataset.c === "pas") {
        //如果是再次通过自定义属性判断点击的哪一个小圆点，并把值传过去
        var i = e.target.dataset.i - 0
        changeOne(i)
    }
}
//自动切换下一张图片方法
setInterval(function () {
    changeOne(true)
}, 5000)