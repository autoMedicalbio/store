$(function () {
    var price  ;
    //良药套餐列表
    $(".meal .ui-collapsible-heading").on( "click", (function (e) {
        var el = $(e.currentTarget);
        price = el.parent(".meal").attr("data-meal");
        $(".meal-price").html(price);
    }))
    $(".next-btn").click(function () {
        if(!price ||  price == 0 ){
            alert("请先选择套餐~")
        }else
            window.location.href ="./html/form.html"
    })


})
