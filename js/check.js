
$(function () {
    var name = $('#name');
    var phone = $('#phone');
    var address = $('#address');
    var win = $('#win');
    var submit=$(".submit");

    $('input,textarea,select').blur(function () {
        var e = $(this);
        if (e.attr('data-validate')) {
            var value = e.val().trim();
            var flag = true;
            var validate = e.attr('data-validate').split(';');
            for (var i = 0; i < validate.length; i++) {
                var arr = validate[i].split(':');
                if (!validateType(value, arr[0])) {
                    //验证不通过
                    $(this).closest('.formGroup').find('.form-help').remove();
                    $('<div>').addClass('form-help').html(arr[1]).insertAfter(this);
                    flag = false;
                    break;
                }
            }
            if (flag) {
                //成功的话清除之前的提示
                $(this).closest('.formGroup').find('.form-help').remove();
            }
        }
    });

    function validateType(value, type) {
        switch (type) {
            case 'require':
                return (/[^(^\s*|\s*$)]/.test(value)); //非空    ^ 仅在作为第一个字符(方括号内)时，表明字符类取反
                // return !!value.length;// !!强制转换成布尔类型
                break;
            case 'name':
                return (/^\S+$/.test(value))
                break;
            case 'phone':
                return (/^\d{11}$/.test(value)
                );
                break;
            case 'address':
                return (/^\S{30,40}$/.test(value)
                );
                break;
            case 'win':
                return (/^\d{6}$/.test(value)
                );
                break;
        }
    }

    submit.on('click', function () {
        $('input').trigger('blur');
        $("textarea").trigger('blur');
        //直接提交，会自动触发一次上边的blur事件
        var length = $('form .form-help').length;
        if (length) {
            return;
        }else{
            $(this).find("img").attr("src","img/confirmBtn2.png");
        }

        /*var data = { user: user.val(), pass: pass.val() };
        $.ajax({
            type: "get",
            url: "/ktv/index.php/login/check",
            data: data,
            success: function success(data) {
                if (data == 'ok') {
                    alert("success");
                    location.href = '/ktv/index.php/gamemanage';
                } else if (data == 'no') {
                    alert("fail");
                }
            }

        });
        return false;*/
    });
});