<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="/sjswaimai/Public/js/uni_armorwidget_wrapper.js"></script>
    <meta charset="utf-8">
    <title>石景山外卖</title>
    <link rel="stylesheet" type="text/css" href="/sjswaimai/Public/css/main_5d1e2f0.css"/>
    <link rel="stylesheet" type="text/css" href="/sjswaimai/Public/css/common_12dc87d.css"/>
    <link rel="stylesheet" type="text/css" href="/sjswaimai/Public/css/landing_dc1f971.css"/>
    <link rel="stylesheet" type="text/css" href="/sjswaimai/Public/css/shoplist_a774a9c.css"/>
    <link rel="stylesheet" type="text/css" href="/sjswaimai/Public/user/main_5d1e2f0.css">
<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/user/common_12dc87d.css">
<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/user/landing_dc1f971.css">
<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/user/menu_4e4a7c2.css">
<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/user/order_23df2f5.css">
<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/user/usercenter_1e040d1.css">

    <script type="text/javascript" src="/sjswaimai/Public/js/main_d338062.js"></script>
    <script type="text/javascript" src="/sjswaimai/Public/js/lib_fcbc5e7.js"></script>
    <script type="text/javascript" src="/sjswaimai/Public/js/landing_cb95d02.js"></script>
    <script type="text/javascript" src="/sjswaimai/Public/js/shoplist_03c450c.js"></script>
</head>
<body>
    <header class="header">
        <div class="ui-width header-wrap">
            <figure>
                <a href="<?php echo U('Index/index');?>" class="wm-logo">石景山外卖</a>

            </figure>
            <figure><h1>&nbsp&nbsp&nbsp&nbsp用户登录</h1></figure>
            
            <div id="user_info" class="user-info-widget" style="1px solid blue;">
                <div id="login_user_info" style="display:none;"></div>
                <div id="logout_user_info">
                    <ul class="logout_info">
                        <li>
                            <span style="color:#ccc">还没有石景山账号?</span><a id="login" href="<?php echo U('User/register');?>" >&nbsp;注册</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
            
        </div>
    </header>
    <div>
   <img style="float:left; margin:40px 60px;width:800px;height:500px"src="/sjswaimai/Public/picture/log.jpg">
    <div style=" width: 400px; height: 300px; margin:100px 40px;float:left;background-color: rgb(255, 255, 255);" class="mod-dialog-wrap">
        <div>
            <h1 style="color:#f6c;margin:30px 0">welcome to SHIJINGSHAN------------</h1>
            
        </div>
        <div class="addr-detail new-address-section"> 
           <form>        
            <table class="addr-table" border="0">            
                <tbody>
                    <tr>                
                        <td valign="top">
                            <span class="l-label">用&nbsp;&nbsp;户&nbsp;&nbsp;名</span></td>               
                             <td>                    
                                                    
                                <div class="form-group">                        
                                    <div class="input-control">                            
                                        <input type="text" style="width:270px"name="uname"   class="placeholder-con" placeholder="请填写您的用户名" >                            
                                                               </div>                        
                                            <div id="checkuname" class="error-msg v-hide">
                                                以英文开头至少6位</div>               
                                    </div>                    
                                             
                            </td>            
                        </tr>   
                        <tr>                
                        <td valign="top">
                            <span class="l-label">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</span></td>               
                             <td>                    
                                                    
                                <div class="form-group">                        
                                    <div class="input-control">                            
                                        <input type="password" name="password" style="width:270px;padding: 10px 9px;
    border: 1px solid #e4e4e4;height: 20px;
    line-height: 20px;" value="" class="placeholder-con" placeholder="请填写您的密码" >                            
                                                              </div>                        
                                            <div id="checkpassword" class="error-msg v-hide">字母（大小写不限）、数字、下划线组成的6-15位字符</div>               
                                    </div>                    
                                             
                            </td>            
                        </tr> 
                                   
                               
                    </tbody>
                </table>        
                <div class="form-group form-submit">            
                    <input type="button" style="background-color:#f6c"class="saveBtn" data-node="saveBtn" value="登录">                            
                                       
                </div>   
            </form>
           </div>
        </div>
    
    </div>

    <script type="text/javascript">
        $('input[name=password]').blur(function(){
            if(!isPassword($(this).val())){
                $('#checkpassword')[0].style.visibility="visible";
            }else{$('#checkpassword')[0].style.visibility="hidden";}
        })
        
        $('input[name=uname]').blur(function(){
            if(!isUsername($(this).val())){
             $('#checkuname')[0].style.visibility="visible";
            }else{$('#checkuname')[0].style.visibility="hidden";}
        })
        
        function isPassword(name){
            var pattern = /^[0-9a-zA-Z_]{6,15}$/;
            return pattern.test(name);
        }
        function isUsername(name){
            var pattern = /^[a-zA-Z][a-zA-Z0-9_]{5,}$/;
            return pattern.test(name);
        }
        $('input[value=登录]').click(function(){
            uname = $('input[name=uname]').val();
            password = $('input[name=password]').val();
            data = {
                uname:uname,
                password:password
            }
            $.ajax({url:"<?php echo U('User/log_submit');?>",type:'POST',data:data,success:
                function(succ){

                        result = JSON.parse(succ);
                        console.log(result);
                        if(result.result=='ok'){
                              alert('登录成功');
                              localStorage.setItem('token',result.token); 
                               window.location.href="<?php echo U('Index/index');?>"; 
                        }else{alert('登录失败！');}
                }
            })
        })
         
    </script>