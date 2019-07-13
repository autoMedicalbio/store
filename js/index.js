$(function () {
    var template = "<div class='info'>\n" +
        "    <p>被检测人信息</p>\n" +
        "    <label>姓名：</label>\n" +
        "    <input type='text' name='fullname' class='name'>\n" +
        "\n" +
        "    <label>性别：</label>\n" +
        "    <select name='sex' class='sex'>\n" +
        "        <option value='#'>请选择</option>\n" +
        "        <option value='0'>男</option>\n" +
        "        <option value='1'>女</option>\n" +
        "    </select>\n" +
        "\n" +
        "    <label><span class='red'>&nbsp;*&nbsp;</span>是否有身份证：</label>\n" +
        "    <select name='idCard' class='idCard'>\n" +
        "        <option value='#'>请选择</option>\n" +
        "        <option value='yes'>是</option>\n" +
        "        <option value='no'>否</option>\n" +
        "    </select>\n" +
        "\n" +
        "    <label><span class='red'>&nbsp;*&nbsp;</span>样本信息：</label>\n" +
        "    <select name='info' class='info'>\n" +
        "        <option value='#'>请选择</option>\n" +
        "        <option value='kqlm'>口腔黏膜</option>\n" +
        "        <option value='qdx'>脐带血</option>\n" +
        "    </select>\n" +
        "    <label class='label-textarea'>\n" +
        "        <span class='red'>&nbsp;*&nbsp;</span>\n" +
        "        邮寄地址：\n" +
        "        <span class='right'><input type='checkbox' class='addressInput'/>自定义邮寄地址</span>\n" +
        "    </label>\n" +
        "    <textarea type='text' name='textarea' class='address'></textarea>\n" +
        "   <a class='delInfo'>删除</a>"
        "</div>"
    var price  , name , productList =[] ;
    //良药套餐列表
    $(".menu").on( "click", (function (e) {
        var total =Number($(".meal-price").html() ) ;
        var el = $(e.currentTarget);
        price = Number( el.val() );
        name =  el.attr("data-name");
        if(el.is(":checked")){
            productList.push({price,name})
           total += price;
        }else{
            _.remove(productList,function (val) {
                return val.name == name ;
            })
           total -= price;
        }

        total = total >0 ? total :0 ;
        $(".meal-price").html(total);
        isCheckProduct();
    }))
    $(".next-btn").click(function () {
        if(!price ||  price == 0 ){
            alert("请先选择套餐~")
        }else
            window.location.href ="index.html"
    })
    $("#addUserInfo").click(function () {
        $("#userInfo").append(template);
        $("#userInfo").trigger("create")
    })

    function isCheckProduct() {
        var html = "";
        _.each(productList,function (val) {
            html += "<p><span>" + val.name  + "</span>" + "：" + "<span>" + val.price  + "</span></p>"
        })

        $("#tc-price").html(html);
    }


    $("body").on("click", ".delInfo",delInfo );
    function delInfo(e){
        var el = $(e.currentTarget);
        el;
        el.parent(".info").remove();
    }





});
