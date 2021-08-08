<?php

$cat_user = 'admin';
$cat_password = 'admin';

$cat_salt = 'salt';

//如果cookie空，POST用户名密码不为空
if(isset($_POST['username']) && isset($_POST['password'])) {
    //验证输入密码是否匹配
    if(md5($_POST['username'].$_POST['password'].$cat_salt)===md5($cat_user.$cat_password.$cat_salt)) {
        //设置cookie
        setcookie('verify',md5($cat_user.$cat_password.$cat_salt),time()+86400*7);
        header("location:/");
    }
    else {
        echo "<script>alert('Error: Username Or Password Incorrect ╮(￣▽￣\"\")╭')</script>";
    }
}

//检测cookie
if(empty($_COOKIE['verify']) || $_COOKIE['verify']!=md5($cat_user.$cat_password.$cat_salt)) {
    ?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no">
        <link rel="apple-touch-icon-precomposed" type="image/png" href="/_h5ai/public/images/favicon/favicon-152.png">
        <link rel="shortcut icon" href="/_h5ai/public/images/favicon/favicon-16-32.ico">
        <title>Design By Mintimate</title>
        <style>
            body {
                margin: 0;
                background-color: #555555;
            }

            html {
                background-color: #555555;
            }

            .container {
                width: 100%;
                min-height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                background-repeat: no-repeat;
                background: url(/_h5ai/public/images/bg.jpg) center center / cover no-repeat;
            }

            .loginCard {
                background-color: #FFFFFF;
                border-radius: 10px;
                width: 25rem;
                padding: 77px 55px 33px 55px;
                -webkit-box-shadow: 0 5px 10px 0px rgb(0 0 0 / 10%);
                box-shadow: 0 5px 10px 0px rgb(0 0 0 / 10%);
                opacity: 0.95;
            }

            .loginForm {
                width: 100%;
            }

            .loginFormTittle {
                display: block;
                text-align: center;
                font-size: 30px;
            }

            /*---------------------------------------------*/
            .loginInput {
                position: relative;
                border-bottom: 2px solid #adadad;
                margin-bottom: 37px;
            }

            .loginInput-input {
                font-family: Poppins-Regular;
                font-size: 15px;
                color: #555555;
                line-height: 1.2;
                display: block;
                width: 100%;
                height: 45px;
                background: transparent;
                padding: 0 5px;
            }

            .focus-input100::after {
                font-size: 15px;
                color: #999999;
                line-height: 1.2;
                content: attr(data-placeholder);
                display: block;
                width: 100%;
                position: absolute;
                top: 16px;
                left: 0px;
                padding-left: 5px;
                -webkit-transition: all 0.4s;
                -o-transition: all 0.4s;
                -moz-transition: all 0.4s;
                transition: all 0.4s;
            }

            .loginInput-input:focus+.focus-input100::after {
                top: -15px;
            }

            .loginInput-input:focus+.focus-input100::before {
                width: 100%;
            }

            .has-val.loginInput-input+.focus-input100::after {
                top: -15px;
            }

            .has-val.loginInput-input+.focus-input100::before {
                width: 100%;
            }



            input {
                outline: none;
                border: none;
            }

            .loginButtonDisplay {
                display: -webkit-box;
                display: -webkit-flex;
                display: -moz-box;
                display: -ms-flexbox;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                padding-top: 13px;
            }

            .loginButton {
                width: 100%;
                display: block;
                position: relative;
                z-index: 1;
                border-radius: 25px;
                overflow: hidden;
                margin: 0 auto;
            }

            .loginButton:hover .loginButtonColor {
                left: 0;
            }

            .loginButtonColor {
                position: absolute;
                z-index: -1;
                width: 300%;
                height: 100%;
                background: #a64bf4;
                background: -webkit-linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
                background: -o-linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
                background: -moz-linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
                background: linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
                top: 0;
                left: -100%;
                -webkit-transition: all 0.4s;
                -o-transition: all 0.4s;
                -moz-transition: all 0.4s;
                transition: all 0.4s;
            }

            .login-btn {
                font-family: Poppins-Medium;
                font-size: 15px;
                color: #fff;
                line-height: 1.2;
                text-transform: uppercase;
                display: -webkit-box;
                display: -webkit-flex;
                display: -moz-box;
                display: -ms-flexbox;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 20px;
                width: 100%;
                height: 50px;

            }

            button {

                outline: none !important;
                border: none;
                background: transparent;
            }

            .text-info {
                font-size: 0.3em;
                color: #ADADAD;
            }
        </style>
    </head>
    <body>
        <div id="login" class="container">
            <div class="loginCard">
                <form action="/" method="post" class="loginForm">
                    <span class="loginFormTittle">
                        ShowTheFiles!!!
                    </span>
                    <span class="loginFormTittle">
                        <p style="font-size: 0.3em; margin-bottom: 1em;">Power By h5ai</p>
                    </span>
                    <div class="loginInput" data-validate="Valid email is: a@b.c">
                        <input class="loginInput-input" type="text" name="username">
                        <span class="focus-input100" data-placeholder="Username"></span>
                    </div>

                    <div class="loginInput" data-validate="Enter password">
                        <span class="btn-show-pass">
                            <i class="zmdi zmdi-eye"></i>
                        </span>
                        <input class="loginInput-input" type="password" name="password">
                        <span class="focus-input100" data-placeholder="Password"></span>
                    </div>

                    <div class="loginButtonDisplay">
                        <div class="loginButton">
                            <div class="loginButtonColor"></div>
                            <button type="submit" class="login-btn">
                                Login
                            </button>
                        </div>
                    </div>

                    <div style="text-align: center; margin-top: 2em;">
                        <span class="text-info">
                            Want To Fork This Project?
                        </span>
                        <a class="text-info" href="https://github.com/Mintimate/h5ai_M">
                            Here~
                        </a>
                    </div>
                </form>
            </div>
        </div>
        <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.slim.min.js"></script>
        <script>
            $('.loginInput-input').each(function() {
                $(this).on('blur', function() {
                    if ($(this).val().trim() != "") {
                        $(this).addClass('has-val');
                    } else {
                        $(this).removeClass('has-val');
                    }
                })
            })
        </script>
    </body>
</html>
<?php
die(1);
}

?>
