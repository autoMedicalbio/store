$(function () {
    var template = "<label>姓名：</label>\n" +
        "            <input type=\"text\" name=\"fullname\" >\n" +
        "\n" +
        "            <label>性别：</label>\n" +
        "            <input type=\"text\" name=\"fullname\" >\n" +
        "\n" +
        "            <label>是否有身份证：</label>\n" +
        "            <select name=\"idCard\">\n" +
        "                <option value=\"yes\">是</option>\n" +
        "                <option value=\"no\">否</option>\n" +
        "            </select>\n" +
        "\n" +
        "            <label>样本信息：</label>\n" +
        "            <select name=\"info\">\n" +
        "                <option value=\"kqlm\">口腔黏膜</option>\n" +
        "                <option value=\"qdx\">脐带血</option>\n" +
        "            </select>"
    var price  , name ;
    //良药套餐列表
        $(".meal .ui-collapsible-heading").on( "click", (function (e) {
        var el = $(e.currentTarget);
        price = el.parent(".meal").attr("data-meal");
        name =  el.parent(".meal").attr("data-name");
        var storage = {price:price,name:name}
        localStorage.setItem("price",price);
        localStorage.setItem("name",name);
        $(".meal-price").html(price);
    }))
    $(".next-btn").click(function () {
        if(!price ||  price == 0 ){
            alert("请先选择套餐~")
        }else
            window.location.href ="index.html"
    })
    $("#addUserInfo").click(function () {
        $("#info2").append(template);
        $("#info2").trigger("create")
    })


    name = name ? name : localStorage.getItem("name")
    price = price ? price : localStorage.getItem("price")
    $("#tc-price").html("已选套餐："+ name + "价格:" + price)


});
