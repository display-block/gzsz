
$(function(){
    var Div = document.getElementById('div1'); //获取id为div1的元素赋值给变量Div
    var Ul = document.getElementById('ulitem');//获取id为ulitem的元素赋值给变量Ul
    Ul.innerHTML = Ul.innerHTML + Ul.innerHTML; //让Ul的innerHTML相加的和赋值给Ul.innerHTML
    timer = setInterval(function () {  //定义定时器函数
        if (Ul.offsetTop < -Ul.offsetHeight / 2) {  //如果Ul移动的高度小于页面高度除以2的负数，那么Ul在页面中的top重置为0；
            Ul.style.top = 0;
        }
        Ul.style.top = Ul.offsetTop - 2 + 'px'; //Ul在页面中的高度等于Ul离页面的高度-2；
    }, 60);  //定义的时间为0.1秒


    $('#ulitem a').mouseenter(function(){
        clearInterval(timer);
    }).mouseleave(function(){
        timer = setInterval(function () {
            if (Ul.offsetTop < -Ul.offsetHeight / 2) {
                Ul.style.top = 0;
            }
            Ul.style.top = Ul.offsetTop - 2 + 'px';
        }, 60);

    })
});


